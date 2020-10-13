import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Signup from "./components/Signup.component";
import Login from "./components/Login.component";
import Dashboard from "./components/Dashboard.component";
import PrivateRoute from "./components/PrivateRoute.component";
import ForgotPassword from "./components/ForgotPassword.component";
import UpdateProfile from "./components/UpdateProfile.component";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}
  >
    <div className="w-100" style={{ maxWidth: "400px" }}>
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  </Container>
);

export default App;
