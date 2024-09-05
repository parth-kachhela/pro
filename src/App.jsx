import Profile from "../src/components/Profile/Profile.jsx";
import "./App.css";
import PostInfo from "./components/PostInfo/PostInfo";

function App() {
  return (
    <>
      <Profile />
      <hr className="hr" />
      <PostInfo />
    </>
  );
}

export default App;
