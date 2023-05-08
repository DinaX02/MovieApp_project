import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

export function OurRecommendations() {
  return (
    <div>
     <h2 className="spacing_left space_bot">Our Recommendations</h2>


       <div className="card_movie space_bot">
      <img className="img_card"
            src={require("../assets/landscape_test_st.jpg")}/>
            <div className="year_title_director">
        <h4>Film Title</h4>
        <div className="flex-row">
          <div className="director-name">
            <h4>Director Name</h4>
          </div>
          <div className="year_film">
            <p>Year</p>
          </div>
          </div>
          </div>
      </div>
<div className="btn_try_yrlf space_bot">
  <Link to={"/movies"}><button>Try it Now</button></Link>
</div>
    </div>
  );
}
