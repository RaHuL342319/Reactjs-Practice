import "./App.css";
import ArchieveAndUnArchieve from "./components/ArchieveAndUnArchieve";
import HabitTracker from "./components/HabitTracker";
import PlayList from "./components/PlayList";
import Products from "./components/Products";
import ProjectsCard from "./components/ProjectsCard";
import ShowBackery from "./components/ShowBackery";
import SocialMedia from "./components/SocialMedia";
import Todo from "./components/Todo";
import UserProfile from "./components/UserProfile";
import VideoLabel from "./components/VideoLable";

function App() {
  return (
    <>
      <Products />
      <Todo />
      <HabitTracker />
      <PlayList />
      <ShowBackery />
      <ArchieveAndUnArchieve />
      <ProjectsCard />
      <UserProfile />
      <VideoLabel />
      <SocialMedia />
    </>
  );
}

export default App;
