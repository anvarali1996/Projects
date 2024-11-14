export const protectRoute = (req, res, next) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    next();
}

export const guestRoute = (req, res, next) => {
    if (req.session.user) {
        return res.redirect('/profile');
    }
    next();
}