import {Content} from "./Content.js"
import {Title} from "./Title.js"
import {NavLink} from "./NavLink.js"
import {MainTitle} from "./MainTitle.js"
import "./style.css"
import {useState} from "react" // npm run deploy    this will update gh pages

function App() {
  const [displaying,SetDisplaying] = useState([false,false,false,false,false])
  const [week,setWeek] = useState(0)

  function swapDisplaying(index) {
    let temparr = [...displaying]
    if (displaying[index]) {
      temparr[index] = false
    }
    else {
      temparr[index] = true
    }
    SetDisplaying(temparr)
  }

  return (
    <div id="SiteContainer">

      <div className="textContainer">
        <MainTitle week={week} />
        <header>
          <nav>
            <ul>
              <NavLink week={week} setWeek={setWeek} SetDisplaying={SetDisplaying} />
            </ul>
          </nav>
        </header>

        {week > 0 && <Title week = {week} />}
        <ul className="days">
          {week > 0 ? displaying.map(function (state,index) {
          return <Content week = {week} displaying = {state} swapDisplaying = {() => swapDisplaying(index)} index={index}/>}): 
          <>
          <h2>About Me</h2>
          <p>I like to draw in pixel art, and I'm slowly branching out to other bits of digital art</p>
          <p>I draw on an XPpen 13.3 Pro drawing tablet that helps massively with 6+ hour drawing sessions</p>
          <p>Below is a drawing of the knight from Hollow Knight that I drew after 100%ing the game</p>
          <p>P.S. I highly recommend playing through hollowknight as it has an amazing story and visual style</p>
          <p>P.P.S I haven't drawn in a while but you can find my instagram by clicking on the image</p> 
          <a href="https://www.instagram.com/frog.inapond/" target="blank">
          <img src={process.env.PUBLIC_URL + "/images/HollowKnightFlower.png"}></img>
          </a>
          <p>I really enjoy problem solving which has led me to come across some amazing puzzle games and </p>
          <p>programming languages that make me think logically. I like logical thinking because it</p>
          <p>can be very visual like flow charts or how a box moves across a screen, it all stems</p>
          <p>from logical thinking which I think can be very artistic and beautiful</p> </>}
        </ul>

      </div>
    </div>
  );
}

export default App;
