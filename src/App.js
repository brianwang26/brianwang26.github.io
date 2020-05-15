import React from 'react';
import bed from './bed.jpg';
import basketball from './basketball.jpeg';
import kayak from './kayak.jpeg';
import tokyo from './tokyo.jpeg';
import styles from './Styles.css'
import './App.css'; 
import Dog from './Dog';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function App() {

  function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1><font size = "7"> Brian Wang </font></h1>

        <div className = "contactInfo">
          <p><font color = "black">brian.c.wang.23@dartmouth.edu</font></p>
          <p><font color = "black">www.linkedin.com/in/brianwang2023</font></p>
        </div> 

        {/* <Dog name="Oscar"> </Dog> */}
        <h2><font color="white">About me</font></h2>
        <div className = "aboutMe"> 
        <p> <font color = "black">My name is Brian Wang and I am currently a first-year student at Dartmouth College. I am completing a double major 
          in computer science and economics modified with math. I'm originally from Raleigh, North Carolina and am currently residing in the San Francisco Bay Area. Through this website, I hope you can learn 
          more about me, my projects, and my hobbies.</font></p>
        </div>

        <p> </p>


        {/* Uses Vertical Timeline Element to construct visual timeline of projects I've worked on */}
        <div className = "projects">
          <h1><font color = "black" font-weight = "bold"> Projects </font></h1>
        </div>
        <div></div>

        <VerticalTimeline>

          <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '10px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
            <h1 className="vertical-timeline-element-title">DartPoll</h1>
            <p></p>
            <h7 className="vertical-timeline-element-subtitle">April 2020-Present</h7>
            <p> Worked in a team of 4 to build a platform where Dartmouth students can pose and respond to polls. </p>
            <p> Tools Using: React, CSS, Firebase, Chart.js, Moment.js, SVG, Figma </p>
            <a className="App-link" href="https://github.com/msorbaro/coast-to-coast" target="_blank" rel="noopener noreferrer">
                GitHub Repository
             </a>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgb(34, 139, 34)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '10px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'rgb(34, 139, 34)', color: '#fff' }}
            >
            <h1 className="vertical-timeline-element-title">The Dartmouth Mobile App</h1>
            <p></p>
            <h7 className="vertical-timeline-element-subtitle">April 2020-Present</h7>
            <p> Hired to help develop our campus newspaper's own mobile application from scratch. </p>
            <p> Tools Using: React Native, Express, MongoDB </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgb(255, 99, 71)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '10px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'rgb(255, 99, 71)', color: '#fff' }}
            >
            <h1 className="vertical-timeline-element-title">Personal Website</h1>
            <p></p>
            <h7 className="vertical-timeline-element-subtitle">March 2020-Present</h7>
            <p> Building the website you are currently on! </p>
            <p> Tools Using: React, CSS </p>
            <a className="App-link" href="https://github.com/brianwang26/brianwang26.github.io" target="_blank" rel="noopener noreferrer">
                GitHub Repository
             </a>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '10px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            >
            <h1 className="vertical-timeline-element-title">Dartmouth Trends</h1>
            <p></p>
            <h7 className="vertical-timeline-element-subtitle">March 2020-Present</h7>
            <p> Developing a website that allows Dartmouth administration and students to understand grade distribution and enrollment patterns of classes and academic departments. </p>
            <p> Tools Using: Python, BeautifulSoup, Pandas, Matplotlib, React, Flask </p>
            <a className="App-link" href="https://github.com/brianwang26/DartmouthTrends" target="_blank" rel="noopener noreferrer">
                GitHub Repository
             </a>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgb(34, 139, 34)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '10px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'rgb(34, 139, 34)', color: '#fff' }}
            >
            <h1 className="vertical-timeline-element-title">myCan</h1>
            <p></p>
            <h7 className="vertical-timeline-element-subtitle">July 2018-August 2018</h7>
            <p> Worked with a partner to create an autonomous mobile sanitation bin that could be controlled via auditory inputs and a mobile app. </p>
            <p> Tools Used: Arduino C, MIT App Inventor, Arduino Uno Circuit Boards, Servo Motors, Sound Sensors, Pressure Sensors</p>
            <a className="App-link" href="https://tinyurl.com/myCanDemo" target="_blank" rel="noopener noreferrer">
                Demo
            </a>
            <a>    </a>
            <a className="App-link" href="https://docs.google.com/presentation/d/1M_CXiu0t9frGUl3Y-2Vlnpmppz6ou-nHhnB4ZCUIdTU/edit#slide=id.p" target="_blank" rel="noopener noreferrer">
                Poster Board
            </a>
            <a>    </a>
            <a className="App-link" href="https://www.youtube.com/watch?v=JiKbZPzy4PY" target="_blank" rel="noopener noreferrer">
                Presentation
            </a>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: 'rgb(255, 99, 71)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '10px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: 'rgb(255, 99, 71)', color: '#fff' }}
            >
            <h1 className="vertical-timeline-element-title">iPaint</h1>
            <p></p>
            <h7 className="vertical-timeline-element-subtitle">July 2018</h7>
            <p> Worked with a partner to develop a multi-featured drawing mobile app with multiple backgrounds, colors, and brushes. </p>
            <p> Tools Used: MIT App Inventor </p>

            <a className="App-link" href="https://tinyurl.com/iPaintDemo" target="_blank" rel="noopener noreferrer">
                Demo
             </a>
             <a>    </a>
             <a className="App-link" href="https://www.youtube.com/watch?v=ZqKt1ITV0jU" target="_blank" rel="noopener noreferrer">
                Presentation
             </a>
            </VerticalTimelineElement>

      </VerticalTimeline>
      
      <p> </p>
      <div className = "hobbies">
          <h1><font color = "black" font-weight = "bold"> Hobbies</font></h1>
      </div>
      <p> </p>

      <div className = "ending">
      <p> Thanks for visiting my website! Please come again another time, as I will be constantly updating this site with projects and hobbies that I pick up. Also, I will be improving the design of this site as I get better at React and CSS! Please feel free to reach out to me at anytime. </p>
      </div> 


      </header>
    </div>
  );
}

export default App;

  // var name = "Trump";

  // var component = null; 
  // if (name == "Brian") {
  //   component = <p>I am the greatest person on earth</p>
  // }
  // else {
  //   component = <p>I am not the greatest person in the world</p>
  //   console.log("He's not Brian")
  // }
  
  // var component1 = name != "Trump"
  // ? <p>You are not the savior of our nation</p>
  // : <p>You are the savior of our nation</p>

  // var buttonFunction =  () => {
  //   console.log("This is working very well")
  //   console.log(name == "Brian")
  // }

  // var onChangeFunction = (event) => {
  //   console.log(event.target.value)
  // }

  // var myList = ["Tadashi", "April", "October"]
  
  // var dogMap = myList.map(
  //   (name) => { 
  //     return <p className = "doggy"> hi {name} !</p>;
  //   }
  // )

  // var october = {
  //   name: "October Bowman", 
  //   age: 12, 
  //   activity: "Living Outside",
  //   color: "black"
  // }

  // var april = {
  //   name: "April Chan", 
  //   age: 1, 
  //   activity: "Eating Food",
  //   color: "gold"
  // }

  // var newList = [october, april];

  // var dogMap2 = newList.map(
  //   (dog) => {
  //     return <p className="doggy"> {dog.name} likes {dog.activity}!</p>
  //   }
  // )


  // <h2><font color = "red">What I like</font></h2>
  // <p><font color = "aqua">Though I'm not very good at it, I love watching and playing the game of <b>basketball.</b> Fun Fact: I even have a 
  // Little Tikes Hoop in my house which I've elevated to 7 feet, and my friends come and play on it sometimes. </font> </p> 
  // <img src={basketball} />
  // <figcaption><font color = "fuchsia">Me ballin'</font></figcaption>
  // <p><font color = 'lime'>I also love canoeing, kayaking, and anything else to do with water.</font></p>
  // <img src={kayak} width="2000" height="1500"/>
  // <figcaption><font color = "yellow">Kayaking on the Williamette River in Portland, Oregon</font></figcaption>
  // <p><font color = "red"> I also enjoy hanging out with my brother, David. He's now 24-years old but we 
  // still act like children when we're around each other.</font></p>
  // <img src = {tokyo} />
  // <figcaption><font color = "aqua"> My brother and I</font></figcaption>
  // <h2><font color = "fuchsia">My Favorite Internet Things</font></h2>
  // <ul>
  // <li><a
  //   className="App-link"
  //   href="https://www.buzzfeed.com/daves4/how-many-five-year-olds-can-you-take-in-a-fight"
  //   target="_blank"
  //   rel="noopener noreferrer"
  // >
  //   How many five year olds can you fight?
  // </a></li>
  // <li><a
  //   className="App-link"
  //   href="https://worldmapper.org/maps/?_sft_product_cat=population-atlas"
  //   target="_blank"
  //   rel="noopener noreferrer"
  // >
  //   World population atlas 
  // </a></li>
  // <li><a
  //   className="App-link"
  //   href="https://coronavirus.jhu.edu/map.html"
  //   target="_blank"
  //   rel="noopener noreferrer"
  // >
  //   Coronavirus Map: stay informed!!
  // </a></li>
  // </ul>
  // {/* <button onClick={buttonFunction}>
  //   Brian Wang's Internet History
  // </button>
  // <input type="text" onChange = {onChangeFunction}/>
  // <div className = "dogContainer">
  //   {dogMap}
  //   {dogMap2}
  // </div>
  // {component}
  // {component1} */}

  // <h4><font color = "aqua"> Tell me about yourself</font></h4>
  // <div className = "questionnaire"> 
  //   Name: <input type="text"></input>
  //   Email: <input type="text"></input>
  //   Social-Security Number: <input type="text"></input>
  // </div>

  // Checkbox: <input type="checkbox" onclick="myFunction()"></input>

  // <h4><font color = "white"> What are you right now? </font></h4>
  // <div className = "buttonContainer">
  // <button onClick={console.log("Happy")}>
  //   Happy!
  // </button>
  // <button onClick={console.log("Sad")}>
  //   Sad  
  // </button>
  // <button onClick={console.log("Excited")}>
  //   Excited
  // </button>
  // <button onClick={console.log("Nervous")}>
  //   Nervous
  // </button>
  // <button onClick={console.log("Tired")}>
  //   Tired
  // </button>
  // <button onClick={console.log("Hungry")}>
  //   Hungry
  // </button>
  // </div>
  // <p>  </p> 
  