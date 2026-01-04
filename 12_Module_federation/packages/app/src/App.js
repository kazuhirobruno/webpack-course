import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

import "./app.css";

const HomePage = React.lazy(() => import("HomeApp/HomePage"));
const ContactPage = React.lazy(() => import("ContactApp/ContactPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar color="light" light expand="md">
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </NavItem>
        </Nav>
      </Navbar>

      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
