import React from "react";
import bkg from "../assets/bg1.jpg";
import "./home.css";
import book from "../assets/book.svg";
import book2 from "../assets/book2.svg";
import professor from "../assets/professor.svg";
import diploma from "../assets/diploma.svg";

const Home = () => {
  return (
    <>
      {/* Background image */}
      <div className="bkgimg">
        <img src={bkg} />
        <div className="text">WHO SAID</div>
        <div className="text1">EDUCATION</div>
        <div className="text2">WAS BORING?</div>
        <div className="btn">
          <button>Contact us</button>
        </div>

        {/* card number 1 */}
        <div className="card1" id="c1">
          <img src={book} alt="book" className="card-img" />
          <div className="card-txt">
            <p id="pa">GUIDENCE</p>   
          </div>
        </div>

        {/* card number 2 */}
        <div className="card2" id="c2">
          <img src={book2} alt="" />
          <div className="card-txt">
            <p id="pb">PHILOSOPHY</p>
          </div>
        </div>

        {/* card number 3 */}
        <div className="card3" id="c3">
          <img src={diploma} alt="" />
          <div className="card-txt">
            <p id="pc">LEARNING</p>
          </div>
        </div>

        {/* card number 4 */}
        <div className="card4" id="c4">
          <img src={professor} alt="" />
          <div className="card-txt">
            <p id="pd">PRACTICE</p>
          </div>
        </div>

        {/* quote space */}
        <div className="quote">
        <p className = "q1">We Teach, You Rise</p>
        <p className = "q3">----------------</p>
        <p className="q2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis laboriosam dolore at totam, 
        expedita, voluptatum unde quo velit itaque, minima excepturi. Quis veniam blanditiis eveniet asperiores 
        illo. Impedit quas enim labore veritatis sit suscipit repellat commodi quisquam voluptatem, ex, conshgkjgl</p>
        </div>
        <div className="Keyfeatures">
          <p id="kf">KEY FEATURES</p>
          <p id="service"><b>SERVICES WE PROVIDE</b></p>
          <div className="boxes">
            <p><b>ENVIRONMENT</b></p>
            <p>lorem ipsum lorem lorem </p>
            <p>lorem ipsum lorem lorem </p>
          </div>
          <div className="boxes">
          <p><b>ACTIVE LEARNING</b></p>
          <p>lorem ipsum lorem lorem </p>
          <p>lorem ipsum lorem lorem </p>
          </div>
          <div className="boxes">
          <p><b>CREATIVE LESSONS</b></p>
          <p>lorem ipsum lorem lorem </p>
          <p>lorem ipsum lorem lorem </p>
          </div>
          <div className="boxes">
          <p><b>QUALIFIED TEACHERS</b></p>
          <p>lorem ipsum lorem lorem </p>
          <p>lorem ipsum lorem lorem </p>
          </div>
        </div>
        <div id="follow">
            <ul id="socialmedia">
                {/* <li class="followli"><a href="https://www.instagram.com/"><img src="facebook.png" alt="" class="highlighttheicon"></a></li>
                <li class="followli"><a href="https://www.instagram.com/"><img src="twitter.png" alt="" class="highlighttheicon"></a></li>
                <li class="followli"><a href="https://www.instagram.com/obi.fuss/"><img src="insta.png" alt="" class="highlighttheicon"></a></li> */}
            </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
