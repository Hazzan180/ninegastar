import { CardImage } from "../../components/cards/Card.component";
import { useContext } from "react";
import { profile } from "../../context/UserProfile";

import "./auth.styles.css";

export const Role = ({ title }) => {
  const { setRole } = useContext(profile);
  return (
    <div className="role-selector-container">
      <h2>Select the profile you want to {title}</h2>
      <div className="role-selector-container">
        <CardImage
          heading={"Artist"}
          image={"/images/artist.jpeg"}
          onClick={() => {
            setRole("Artist");
          }}
        />
        <CardImage
          heading={"User"}
          image={"images/user.jpg"}
          onClick={() => {
            setRole("User");
          }}
        />
      </div>
    </div>
  );
};
