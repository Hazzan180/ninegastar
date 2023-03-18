import "./Home.styles.css";
import { Header } from "../../components/navbar/Navbar.component";
import { Link } from "react-router-dom";
import Sponsor from "../../components/Sponsor/Sponsor";
import Ychooseus from "../../components/Ychooseus/Ychoose";
import Slider from "../../components/Artistssays/Slider";

export const Home = () => {
  return (
    <>
      <Header>
        <Hero />
      </Header>

     <Sponsor />
     <Ychooseus />
     <Slider />
    </>
  );
};

export const Hero = () => {
  return (
    <div className="hero-container gd gd-col-2 ">
      <div className="text-container">
        <h1 className="text-col-white">
          GET THAT VISIBILITY NEEDED AS AN UPCOMING ARTIST WITH 9JASTAR
        </h1>
        <p className="text-col-grey-light">
          We believe that music has the power to bring people together and
          create positive change in the world. Through our website, we aim to
          spread the joy of music and connect fans with the artists they love.
        </p>
        <Link to={"/login"}>
          <button className="btn bg-tertiary-purple btn-round text-col-white">
            Get started
          </button>
        </Link>
      </div>
      <div className="image-container-wrapper">
        <div className="image-container">
          <img src="images/h1.png" alt="singer" />
        </div>
        <div className="image-container top-item">
          <img src="images/h2.png" alt="artist" />
        </div>
      </div>
    </div>
  );
};
