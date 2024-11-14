import express from "express";
import connectMongoDB from "./db.js";
import authRoutes from "./routes/authRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import flash from "connect-flash";
import path from 'path';
import ConnectMongoDBSession from "connect-mongodb-session";

const MongoDBStore = ConnectMongoDBSession(session);
const app = express();
const PORT = process.env.PORT || 3000;

connectMongoDB();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

// cookies 
app.use(cookieParser(process.env.COOKIE_SECRET));

// SESSION
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000 * 60 * 24 * 7
    },
    store: new MongoDBStore({
        uri: process.env.MONGO_DB_URI,
        collection: 'sessions'
    })
}));

app.use(flash());

app.use(function (req, res, next) {
    res.locals.message = req.flash();
    next();
});

app.use(function (req, res, next) {
    res.locals.user = req.session.user || null;
    next();
});

app.set('view engine', 'ejs');

app.use('/', postRoutes);

app.use('/', authRoutes);

app.listen(3000, () => {
    console.log(`it's working on ${PORT}`);
});