import { Home } from "./Routes/Home/Home.route";
import { Navbar } from "./components/navbar/Navbar.component";
import { Routes, Route } from "react-router-dom";
import { ExploreMusic } from "./Routes/ExploreMusic/ExploreMusic.route";
import { Dashboard } from "./Routes/Dasboard/Dashboard.route";
import { Login } from "./Routes/Auths/Login";
import { SignUp } from "./Routes/Auths/SignUp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/explore-music" element={<ExploreMusic />} />
          <Route path="/explore-music/:artistId" element={<Dashboard />} />

          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
