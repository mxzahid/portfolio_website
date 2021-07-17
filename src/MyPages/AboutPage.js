import React from "react";
import Header from "../Components/Header";
import About from "../Components/AboutMe/About";
import suit from "../Images/suit.png";
import AllTabs from '../Components/AboutMe/AllTabs';
import Footer from "../Components/Footer"
function AboutPage(props) {
  return (
    // <div className = "about-bg">
    <div>  
      <Header 
      mainHeader={props.mainHeader}
      />
      <About>
        <img 
          src= {suit} 
          alt= "suit"
          className="suit-image" 
          />
        <AllTabs>
          <div label= 'Intro'>
          <p style={{ color: " #FEFEFE",
                    fontSize: "1.3em"}}>
          My name is Abdullah Zahid, hailing from Pakistan, I am an avid learner
          with Bachelor Degrees in Computer Science and Economics from the
          University of Miami.
        </p>
        <p style={{ color: "#FEFEFE", fontSize: "1.3em" }}>
          I started my programming journey in High School with Arduinos and Raspberry Pis for small convenience
          purposes like a bluetooth lock, or clap lights.
          Playing around with these mini computers got me immediately hooked to what is now my motto: "Solving problems
          through programming"
        </p>
        <p style={{ color: " #FEFEFE",fontSize: "1.3em" }}>
          If you are interested in getting in touch with me feel free to send me
          an email through the "Contact Me" tab on the top right of this page!
        </p> 
          </div>
          <div label= 'TechInterests'>
          <p style={{ color: "#FEFEFE", fontSize: "1.3em"}}>
          Majority of my interests lie in Machine Learning, more specifically,
          in Natural Language processing, although predictive modeling is quite
          lucrative as well. 
        </p>
        <p style={{ color: "#FEFEFE", fontSize: "1.3em"}}>
          I believe that the key difference in human and machine intelligence is the amount of data
          needed for either type of learning. The burning problem that I would love to solve is the need for
          copius amounts of data by even the most sophisticated machine learning algorithms. 
          The day machines can effectively learn from a limited dataset, is the day we can compare
          artifical intelligence to human intelligence. 
        </p>
        <p style={{ color: "#FEFEFE", fontSize: "1.3em"}}>
          I specialize in web-development and am a 
          fullstack developer with experience in the MERN stack. My goto language
          nowadays is Python for data science but I have built projects in Java, C, and C++.
        </p>
          </div>
        <div label='Hobbies'>
        <p style={{ color: " #FEFEFE", fontSize: "1.3em" }}>
          I have always dabbled around in a wide range of activities ranging from sports
          to Science. As a pre-teen I was the district champion for swimming, and as a 
          teenager, grew to love Table Tennis, making the state team. These sports taught me
          the spirit of competition and hard work that has presisted throughout my life.
        </p>
        <p style={{ color: " #FEFEFE", fontSize: "1.3em" }}>
          Moreover, I have been an avid Model UN (MUN) debator with an Outstanding Diplomacy Award at the NUST International MUN 
          while also making the MUN team at the University of Miami. MUN, like many other things, is all about teamwork and collaboration.
          I learned how to effectively make my voice heard in a group while catering to everyone's sentiments. 
        </p>
        <p style={{ color: " #FEFEFE", fontSize: "1.3em" }}>
          But my most creative hobby has to be DJing. In college I was a DJ for my fraternity Alpha Sigma Phi, where I played in various 
          social settings and had the pleasure of mixing multiple genres for different crowds.  
        </p>
        </div>
        </AllTabs>
      
      </About>
      <Footer />
    </div>
  );
}

export default AboutPage;
