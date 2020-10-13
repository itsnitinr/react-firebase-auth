import React from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "./contexts/AuthContext";
import Signup from "./components/Signup.component";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <AuthProvider>
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Signup />
      </div>
    </Container>
  </AuthProvider>
);

export default App;
