import React from "react";
import woods from "../../images/woods.jpg";
import bridge from "../../images/bridge.jpg"

const Leftpanel = () => {
  return (
    <div className="Leftpanel">
      <div className="card">
        <img src={woods} alt="Woods" className="image" />
        <div className="card_content">
          <h3>
            <b>TITLE HEADING</b>
          </h3>
          <h5>
            Title description,
            <span className="pan">April 7, 2014</span>
          </h5>
          <p>
            Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
            Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna
            enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non
            congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed
            vitae justo condimentum, porta lectus vitae, ultricies congue
            gravida diam non fringilla.
          </p>

          <br></br>
          <br></br>

          <div className="card_btn_flex">
          <div>
            <button className="read_btn">READ MORE » </button>
          </div>
          <div>
            <p><b>Comment</b> <span className="zero">0</span></p>
          </div>
        </div>
        </div>
       
      </div>
      <div className="card">
        <img src={bridge} alt="Woods" className="image" />
        <div className="card_content">
          <h3>
            <b>BLOG ENTRY</b>
          </h3>
          <h5>
            Title description,
            <span className="pan">April 7, 2014</span>
          </h5>
          <p>
            Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
            Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna
            enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non
            congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed
            vitae justo condimentum, porta lectus vitae, ultricies congue
            gravida diam non fringilla.
          </p>

          <br></br>
          <br></br>

          <div className="card_btn_flex">
          <div>
            <button className="read_btn">READ MORE » </button>
          </div>
          <div>
            <p><b>Comment</b> <span className="zero">2</span></p>
          </div>
        </div>
        </div>
       
      </div>
    </div>
  );
};
export default Leftpanel;
