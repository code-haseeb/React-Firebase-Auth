import Signup from "./components/Signup";
import { Container } from "react-bootstrap";
function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", minWidth: "100vw" }}
    >
      <div
        className="w-100 align-items-center justify-content-center"
        style={{ maxWidth: "400px" }}
      >
        <Signup />
      </div>
    </Container>
  );
}

export default App;
