import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import './style/app.scss'
import './style/appVariables.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRouter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
