import Navbar from './Navbar'
import Home from "./Home";
import SignUp from "./SignUp";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Profile from './Profile';

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
    },
    {
      path: "/profile",
      element: <>
        <Navbar />
        <Profile />
      </>
    }
  ])

function App() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <RouterProvider router={router} >
      </RouterProvider>
    </div>
  );
}

export default App;
