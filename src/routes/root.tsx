import Navbar from "../components/NavBar";
import WorkoutSelector from "../components/WorkoutSelector";
import { generateDummyData } from "../utils/GenerateDummyData";

function home() {
  const dummyData = generateDummyData();

  return (
    <div className="outerContainer">
      <div className="innerContainer">
        <header>
          <h1 className="appTitle">Gymmy</h1>
          <WorkoutSelector list={dummyData}></WorkoutSelector>

          {/* selection screeb */}

          {/* history */}

          {/* login logout */}
        </header>
        <Navbar />
      </div>
    </div>
  );
}

export default home;
