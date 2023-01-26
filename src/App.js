import React from "react";
import Profile from "./Profile/Profile";
import "../public/styles.css";

const App = () => {
  const handleName = () => {
    alert("Marck Zuckerberg");
  };

  return (
    <div>
      <Profile
        fullName="Mark Zuckerberg"
        bio="Mark Zuckerberg (born May 14, 1984) is a former Harvard computer science student who along with a few friends launched Facebook, the worlds most popular social network, in February 2004. Zuckerberg also has the distinction of being the worlds youngest billionaire, which he achieved in 2008 at the age of 24. He was named Man of the Year by Time magazine in 2010. Zuckerberg currently is the chief executive officer and president of Facebook."
        profession="Chief Executive Officer of Facebook"
        handleName={handleName}
      >
        <img
          src="https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds"
          width="150px"
          height="150px"
          alt="Mark"
        />
      </Profile>
    </div>
  );
};
export default App;
