import React from "react";
import bkg from "../assets/images.jpg";
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
        <div className="text">Get selected in every exam</div>
        <div className="btn">
          <button>Contact us</button>
        </div>

        {/* card number 1 */}
        <div className="card1" id="c1">
          <img src={book} alt="book" className="card-img" />
          <div className="card-txt">
            <p>lorem ipsum lorem lorem </p>
            <p>lorem ipsum lorem lorem </p>
            <p>lorem ipsum lorem lorem </p>
          </div>
        </div>

        {/* card number 2 */}
        <div className="card2" id="c2">
          <img src={book2} alt="" />
          <div className="card-txt">
            <p>lorem ipsum lorem lorem </p>
            <p>lorem ipsum lorem lorem </p>
            <p>lorem ipsum lorem lorem </p>
          </div>
        </div>

        {/* card number 3 */}
        <div className="card1" id="c3">
          <img src={diploma} alt="" />
          <div className="card-txt">
            <p>lorem ipsum lorem lorem </p>
            <p>lorem ipsum lorem lorem </p>
            <p>lorem ipsum lorem lorem </p>
          </div>
        </div>

        {/* card number 4 */}
        <div className="card2" id="c4">
          <img src={professor} alt="" />
          <div className="card-txt">
            <p>lorem ipsum lorem lorem </p>
            <p>lorem ipsum lorem lorem </p>
            <p>lorem ipsum lorem lorem </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
