import { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch6";

type Habit = {
  title: string;
  desc: string;
  daysFollowed: number;
  daysSkipped: number;
  archived: boolean;
};

const ArchieveAndUnArchieve = () => {
  const [habitData, setHabitData] = useState<Habit[]>([]);
  const [heading, setHeading] = useState("UnArchieved");
  const [data, setData] = useState<Habit[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = (await fakeFetch("https://example.com/api/habits")) as {
        status: number;
        message: string;
        data: any;
      };
      const { status, data } = res;
      if (status === 200) {
        setHabitData(data.habits);
        setData(data.habits.filter((habit: Habit) => !habit.archived));
      }
    } catch (e) {
      console.error("Error fetching habits:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <>Loading...</>;

  return habitData.length ? (
    <div style={{ border: "1px solid #ccc", padding: "20px" }}>
      <h1>{heading}</h1>
      <ul>
        {data.map(({ title, desc, daysFollowed, daysSkipped }, index) => (
          <li key={index} style={{ borderBottom: "2px solid gray" }}>
            <p>
              <b style={{ fontSize: "20px" }}>{title}:</b> <br /> {desc}
            </p>
            <p>
              <b>Days Followed:</b> {daysFollowed} <br />
              <b>Days Skipped:</b> {daysSkipped}
            </p>
          </li>
        ))}
      </ul>
      <button
        onClick={() => {
          if (heading === "UnArchieved") {
            setHeading("Archived");
            setData(habitData.filter((habit) => habit.archived));
          } else {
            setHeading("UnArchieved");
            setData(habitData.filter((habit) => !habit.archived));
          }
        }}
      >
        {heading === "UnArchieved" ? "Show archived" : "Show unarchived"}
      </button>
    </div>
  ) : (
    <>No Habits Found</>
  );
};

export default ArchieveAndUnArchieve;
