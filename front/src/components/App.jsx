import Navbar from "./Navbar";
import Home from "./Home";
import SignUp from "./SignUp";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Profile from "./Profile";

function App() {
  return (
    <div className="bg-neutral-800">
      <BrowserRouter>
        <Navbar />
        <Routes className="w-full h-full overflow-auto">
          <Route exact path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
