import { Route } from "react-router-dom";
import "./App.css";
import { Button } from "./components/styledcomponents/button/index";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Button />
      <Route path="/" exact>
        <Home />
      </Route>
    </div>
  );
}

export default App;
