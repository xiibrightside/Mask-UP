import React from "react";
import { Route, Routes } from "react-router-dom";
import Protected from "./components/Protected";
import { AuthContextProvider } from "./context/AuthContext";
import About from "./pages/About";
import Bot from "./pages/Bot";
import Guidelines from "./pages/Guidelines";
import LandingPage from "./pages/LandingPage";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Feedback from "./pages/Feedback";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/home"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
          <Route
            path="/bot"
            element={
              <Protected>
                <Bot />
              </Protected>
            }
          />
          <Route
            path="/about"
            element={
              <Protected>
                <About />
              </Protected>
            }
          />
          <Route
            path="/guidelines"
            element={
              <Protected>
                <Guidelines />
              </Protected>
            }
          />
          <Route
            path="/feedback"
            element={
              <Protected>
                <Feedback />
              </Protected>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
