import Homepage from "./containers/pages/homepage/Homepage";
import "./App.css";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Container fluid>
        <Homepage />
      </Container>
    </div>
  );
}

export default App;
