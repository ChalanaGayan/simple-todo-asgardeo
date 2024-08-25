// src/App.jsx
import "./App.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Footer from "./components/Footer"; // Import Footer component
import { AuthenticatedComponent } from "@asgardeo/auth-react";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <> <Home /><Footer /> </>,
  },
  {
    path: "/home",
    element: (
      <AuthenticatedComponent fallback={<Navigate to='/' />}>
        <div className="flex flex-col min-h-screen">
          <Main />
          <Footer /> {/* Add Footer here */}
        </div>
      </AuthenticatedComponent>
    ),
  },
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
