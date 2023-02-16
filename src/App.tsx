import { Link } from "react-router-dom";
import Main from "./Main";
function App() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">Search For Heros</Link>
          </li>
        </ul>
        <hr />
        <Main />
      </div>
    </>
  );
}

export default App;
