import { useState } from "react";
import AboutPopUp from "./popups/AboutPopUp";

const Home = () => {
  const [isAboutPopUp, setIsAboutPopUp] = useState(false);

  const toggleAboutPopUp = () => {
    setIsAboutPopUp(!isAboutPopUp);
  };

  const customStyles = {
    width: "25rem",
    padding: "10px",
    zIndex: "-1",
  };

  return (
    <>
      <div className="card-container">
        <div className="card" style={customStyles}>
          <h5 className="card-title">Welcome to Bad Bank</h5>
          <img src="/images/money.png" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              At Bad Bank, we pride ourselves on being the best at bad banking. Let us eliminate the hassle that comes with managing your money by letting it become someone else's problem.
              <br></br><span className="bad-policy-practice">If you feel you have no interest, you are not a loan.</span>
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="card-container">
        <button onClick={toggleAboutPopUp} className="btn btn-primary">
          Learn About Project Bad Bank
        </button>
      </div>

      {isAboutPopUp && <AboutPopUp handleClose={toggleAboutPopUp} />}
    </>
  );
};

export default Home;
