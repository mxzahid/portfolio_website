import React from "react";
import Slider from "../Components/Slides/Slider";
import Header from "../Components/Header";
import Footer from "../Components/Footer"
function HomePage(props) {
  return (
    <div>
      <Header
        mainHeader={props.mainHeader}
        subHeader={props.subHeader}
        subText={props.subText}
      />
      <Slider />
      <Footer />
    </div>
  );
}

export default HomePage;
