import Navbar from './Navbar'
import Home from "./Home";
import SignUp from "./SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../styles/App.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <>
        <Navbar />
        <Home />
      </>,
      errorElement: <div>aca no perrito</div>
    },
    {
      path: "/signup",
      element: <>
        <Navbar />
        <SignUp />
      </>
    }
  ])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} >
      </RouterProvider>
    </div>
  );
}

export default App;
