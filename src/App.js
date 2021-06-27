import Homepage from "./containers/pages/homepage/Homepage";
import "./App.css";
import { Container } from "react-bootstrap";

import Routes from './routes/Routes';
function App() {
  return (
    <div className="App">
      <Container fluid>
        <Routes />
      </Container>
    </div>
  );
}

export default App;
