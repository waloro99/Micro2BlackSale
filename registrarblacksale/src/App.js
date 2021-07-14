import './assets/css/App.css';
import Navbar from './Componentes/Navbar';
import FooterW from './Componentes/Footer';
import RecuperarCuenta from './Componentes/RecuperarCuenta';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
        <Route path="/" exact>
            <RecuperarCuenta/>
          </Route>
        </Switch>
        <FooterW />
      </div>
    </Router>
  );
}

export default App;
