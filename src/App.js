import {Link, Outlet} from "react-router-dom"
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1> My Library </h1>
      <nav style={{borderBottom: "solid 1px", paddingBottom:"1rem"}}>
        <ul>
          <li>
            <Link to="/books"> Books </Link>
          </li>
          <li>
            <Link to="/about" > About us </Link>  
          </li>
        </ul>
      </nav>  
      <Outlet/>
    </div>
  );
};

export default App;
