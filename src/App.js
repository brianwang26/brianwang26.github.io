import React from 'react';
import bed from './bed.jpg';
import basketball from './basketball.jpeg';
import kayak from './kayak.jpeg';
import tokyo from './tokyo.jpeg';
import memeA from './memeA.png';
import memeB from './memeB.jpg';
import memeC from './memeC.jpg';

import './App.css'; 
import Dog from './Dog'   

function App() {

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
        <h1><font color="aqua">Welcome to my Website</font></h1>
        <Dog name="Oscar"> </Dog>
        <h2><font color="fuchsia">Who I am</font></h2>
        <p> <font color = "lime">My name is Brian Wang and I am currently a first-year student at Dartmouth College. At Dartmouth, I am doing a double major 
          in computer science and economics modified with math. Due to the coronavirus, this spring term, I am <code>coding</code> from the comforts of my 
          home in Fremont, California in the San Francisco Bay Area.</font></p>
        <img src={bed} />
        <figcaption><font color = "yellow"> Me @ home during 20S </font> </figcaption>
        <h2><font color = "red">What I like</font></h2>
        <p><font color = "aqua">Though I'm not very good at it, I love watching and playing the game of <b>basketball.</b> Fun Fact: I even have a 
        Little Tikes Hoop in my house which I've elevated to 7 feet, and my friends come and play on it sometimes. </font> </p> 
        <img src={basketball} />
        <figcaption><font color = "fuchsia">Me ballin'</font></figcaption>
        <p><font color = 'lime'>I also love canoeing, kayaking, and anything else to do with water.</font></p>
        <img src={kayak} width="2000" height="1500"/>
        <figcaption><font color = "yellow">Kayaking on the Williamette River in Portland, Oregon</font></figcaption>
        <p><font color = "red"> I also enjoy hanging out with my brother, David. He's now 24-years old but we 
        still act like children when we're around each other.</font></p>
        <img src = {tokyo} />
        <figcaption><font color = "aqua"> My brother and I</font></figcaption>
        <h2><font color = "fuchsia">My Favorite Internet Things</font></h2>
        <ul>
        <li><a
          className="App-link"
          href="https://www.buzzfeed.com/daves4/how-many-five-year-olds-can-you-take-in-a-fight"
          target="_blank"
          rel="noopener noreferrer"
        >
          How many five year olds can you fight?
        </a></li>
        <li><a
          className="App-link"
          href="https://worldmapper.org/maps/?_sft_product_cat=population-atlas"
          target="_blank"
          rel="noopener noreferrer"
        >
          World population atlas 
        </a></li>
        <li><a
          className="App-link"
          href="https://coronavirus.jhu.edu/map.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coronavirus Map: stay informed!!
        </a></li>
        </ul>
        {/* <button onClick={buttonFunction}>
          Brian Wang's Internet History
        </button>
        <input type="text" onChange = {onChangeFunction}/>
        <div className = "dogContainer">
          {dogMap}
          {dogMap2}
        </div>
        {component}
        {component1} */}

        <h4><font color = "aqua"> Tell me about yourself</font></h4>
        <div className = "questionnaire"> 
          Name: <input type="text"></input>
          Email: <input type="text"></input>
          Social-Security Number: <input type="text"></input>
        </div>

        Checkbox: <input type="checkbox" onclick="myFunction()"></input>

        <h4><font color = "white"> What are you feeling right now? </font></h4>
        <div className = "buttonContainer">
        <button onClick={console.log("Happy")}>
          Happy!
        </button>
        <button onClick={console.log("Sad")}>
          Sad  
        </button>
        <button onClick={console.log("Excited")}>
          Excited
        </button>
        <button onClick={console.log("Nervous")}>
          Nervous
        </button>
        <button onClick={console.log("Tired")}>
          Tired
        </button>
        <button onClick={console.log("Hungry")}>
          Hungry
        </button>
        </div>
        <div className = "memeHeader">
          <h1><font color = "blue"> Meme Wall </font></h1>
        </div>

        <div className = "memes">
          <img src={memeA} />
          <img src={memeB} />
          <img src = {memeC} />
        </div>

      </header>
    </div>
  );
}

export default App;