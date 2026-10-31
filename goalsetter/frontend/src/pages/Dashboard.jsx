
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import GoalForm from "../components/GoalForm";
import Spinner from "../components/Spinner";
import GoalItem from "../components/GoalItem";
import { getGoals, reset } from "../features/goals/goalSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  // Check authentication and fetch goals
  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, dispatch]);

  // Handle errors separately
  useEffect(() => {
    if (isError) {
      console.error(message);
    }
  }, [isError, message]);

  if (!user) {
    return null;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user.name}!!!</h1>
        <p>Goals Dashboard</p>
        <p>Create your own goal</p>
      </section>

      <GoalForm />

      <section className="content">
        {goals.length > 0 ? (
          <div className="goals">
            {goals.map((goal) => (
              <GoalItem key={goal._id} goal={goal} />
            ))}
          </div>
        ) : (
          <h3>You have not set any goals!</h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
