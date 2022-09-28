import {NavLink, Outlet} from "react-router-dom"
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1 style={{margin:0, paddingTop: "1rem"}}> My Library </h1>
      <nav style={{borderBottom: "solid 1px", paddingBottom:"0.5rem", margin: "0 1rem"}}>
        <ul >
          <li>
            <NavLink style={({isActive}) => {
                            return {
                                display: "block",
                                margin: "0.5rem 0",
                                color: isActive ? "red" : null,
                                background: "#ffb703",
                                textDecoration: "none",
                                padding: "0.5rem" 
                            }
                      }}
            to="/books"> Books 
            </NavLink>
          </li>
          <li>
          <NavLink style={({isActive}) => {
                            return {
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "red" : null,
                                background: "#ffb703",
                                textDecoration: "none",
                                padding: "0.5rem"
                                
                            }
                      }}
            to="/about"> About us 
            </NavLink> 
          </li>
        </ul>
      </nav>  
      <Outlet/>
    </div>
  );
};

export default App;
