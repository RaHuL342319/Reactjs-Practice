import { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch7";

type Project = {
  title: string;
  description: string;
  technologies: string;
  completed: boolean;
};

const ProjectsCard = () => {
  const [projectsData, setProjectsData] = useState<Project[]>([]);
  const [showDetails, setShowDetails] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = (await fakeFetch("https://example.com/api/projects")) as {
        status: number;
        message: string;
        data: any;
      };
      const { status, data } = res;
      if (status === 200) {
        setProjectsData(data.projects);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;

  return projectsData.length ? (
    <div style={{ border: "1px solid #ccc", padding: "20px" }}>
      <h1>Projects</h1>
      {projectsData.map((project, index) => {
        const { title, description } = project;
        return (
          <div key={index}>
            <p>
              <b>Name:</b> {title} <br />
              <b>Description:</b> {description}
            </p>
            <button onClick={() => setShowDetails(project)}>
              Show Details
            </button>
          </div>
        );
      })}

      {showDetails && (
        <div>
          <h1>Project Details</h1>
          <p>
            <b>Name:</b> {showDetails.title} <br />
            <b>Description:</b> {showDetails.description}
            <br />
            <b>Technologies: </b> {showDetails.technologies}
            <br />
            <b>Completed: </b> {showDetails.completed ? "Yes" : "No"}
          </p>
        </div>
      )}
    </div>
  ) : (
    <div>No Projects Found</div>
  );
};

export default ProjectsCard;
