import "./App.css";
import { Container } from "react-bootstrap";

import NavComponent from './components/navbar/Navbar';
import Routes from './routes/Routes';
function App() {
  return (
    <div className="App">
      <Container fluid>
        <NavComponent homeLink="/" bgColor="dark" header="Shopping list" user="Shaarang" />
        <Routes />
      </Container>
    </div>
  );
}

export default App;
