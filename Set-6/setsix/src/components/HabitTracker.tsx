import { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch3";

type Habit = {
  title: string;
  desc: string;
  daysFollowed: number;
  daysSkipped: number;
};

const HabitTracker = () => {
  const [habits, setHabits] = useState<Habit[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const res = (await fakeFetch("https://example.com/api/habits")) as {
        status: number;
        message: string;
        data: any;
      };
      const { status, message, data } = res;
      if (status === 200 && message === "Success") {
        setHabits(data.habits);
      }
    } catch (err: any) {
      console.error("Error during fetching products", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!habits) return <div>No habits found.</div>;

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px" }}>
      <h1>Habit Tracker:</h1>
      <ul>
        {habits.map((habit, index) => (
          <li key={index} style={{ borderBottom: "1px solid #ccc" }}>
            <h3 style={{ lineHeight: "0.3" }}>{habit.title}: </h3>
            <p style={{ lineHeight: "0.3" }}>{habit.desc}</p>
            <br />
            <p style={{ lineHeight: "0.3" }}>
              <b>Days Followed: </b>
              {habit.daysFollowed}
            </p>
            <p style={{ lineHeight: "0.3" }}>
              <b>Days Skipped: </b>
              {habit.daysSkipped}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HabitTracker;
