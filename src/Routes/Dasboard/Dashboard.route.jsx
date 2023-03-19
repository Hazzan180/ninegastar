import "./dashboard.route.css";
import { PlayIcon } from "../../svg/PlayIcon.svg";
import { MusicIcon } from "../../svg/music.svg";
import { Carousel } from "../../components/carousel/Carousel.component";
import { useParams, Link } from "react-router-dom";
import {artists} from "../../artist.jsx";
import { NavLink, Outlet } from "react-router-dom";
import medaiMention from "../../Dassets/image/mediaMentions.png";
import awards from "../../Dassets/image/awards.png";
import about1 from "../../Dassets/image/about1.png";
import about2 from "../../Dassets/image/about2.png";
import about3 from "../../Dassets/image/about3.png";

import {
  CardLg,
  CardImage,
  CardRound,
} from "../../components/cards/Card.component";



export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <DashboardHeader />
    </div>
  );
};
export const DashboardHeader = () => {
  const { artistId } = useParams();

  const { name, about, mostlistened, featuredasana, mainImage, featured} =
    artists.find(
      (element) => element.name.toLowerCase() === artistId.toLowerCase()
    );
  console.log();
  return (
    <div className="boss">
      <div>
       <div className="atext">
        <h1>{name}</h1>
        <p>500 monthly listeners</p>
       </div>

      
         <div className="dashboard-header-container">
           <img className="dashboard-image" src={mainImage} alt={name}></img> 
           <NavLink to="https://rb.gy/5k5kpc" className="makeRequest">
             <h3>Make A Request</h3>
           </NavLink>
         </div>
      </div>

      <div className="about-section">
        <div className="about-text">
          <h1>About</h1>
          {about}
        </div>

       <div className="about-imgs">
       <div className="aimg-container">
          <div className="aimage-container">
            <img className="dashboard-image" src={about1} alt={about}></img>
          </div>
          <NavLink to="https://rb.gy/5k5kpc" className="alink x">
             <h3>Fan Request</h3>
          </NavLink>
        </div>

        <div className="aimg-container">
          <div className="aimage-container center">
          <img className="dashboard-image" src={about2} alt={about}></img>
          </div>
          <NavLink to="" className="alink ">
             <h3>Support</h3>
          </NavLink>
        </div>

        <div className="aimg-container">
          <div className="aimage-container">
          <img className="dashboard-image" src={about3} alt={about}></img>
          </div>
          <NavLink to="https://rb.gy/bfioll" className="alink ">
             <h3>Partner</h3>
          </NavLink>
        </div>
       </div>
      </div>

      <Carousel title={"Most Listened"}>
            {mostlistened.map((element, index) => (
              <CardLg
                key={index}
                image={element["album-art"]}
                heading={element["artist-name"]}
                text={element.title}
              />
            ))}
          </Carousel>

          <Carousel title={featuredasana}>
            {featured.map((element, index) => (
              <CardLg
                key={index}
                image={element["album-art"]}
                heading={element["artist-name"]}
                text={element.title}
              />
            ))}
          </Carousel>

      <div className="mediaAwards">
        <div>
          <div className="mediaAward-img">
            <img src={medaiMention} alt="artist" className="link"/>
            <div>
               <h3 className="green">Media Mentions</h3>
               <h3 className="white">Best Upcoming Airtist </h3>
            </div>
          </div>
        </div>

        <div>
          <div className="mediaAward-img">
            <img src={awards} alt="artist" className="link"/>
            <div>
              <h3 className="green2">Awards</h3>
              <h3 className="white2">Fast Growing Musician 2022</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export const DashboardCard = ({ title, image }) => {
  return (
    <div className="cardImage-container-dashboard block">
      <img src={image} alt="yoda" />
      <div className="cardImage-text-dashboard">
        {title !== "" && <h3 className="bg-black mg-10">{title}</h3>}
      </div>
    </div>
  );
};