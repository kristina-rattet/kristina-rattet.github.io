import { Button, Box } from "@mui/material";

const AboutPopUp = ({ handleClose }) => {
  return (
    <>
      <div className="popup-box">
        <div className="box">
          <div className="card">
            <div className="card-body">
              <span className="">About Us</span>
              <hr />
              <div>
                <Box m={2} className="custom-btn-group">
                  <div>
                    <h2>Bad Bank demonstrates how good a developer can be at bad design.</h2>
                    <p>
                      Bad Bank project serves as the second independent project for {" "}
                      <a href="https://executive-ed.xpro.mit.edu/professional-certificate-coding-womens-cohort">
                      Professional Certificate in Coding - For Women
                      </a>
                      and demonstrates the combined skillsets learned in Module 1 & 2 of the program. The name "Bad Bank" is applicable due to the intentional exposure of critically confidential customer data.
                      <br /> <br />
                      This website consists of a simple React application where concepts such as hooks, context, routing,
                      and form validations are applied. In addition, we demonstrate the ability to produce a static website through the deployment of our React application using AWS S3
                      Buckets.
                      <br /> <br />
                      <div className="features">
                        <div>
                          The following technologies and libraries are used:
                          <ul>
                            <li>React JS</li>
                            <li>Formik</li>
                            <li>Yup Schema Validation</li>
                            <li>React Toastify</li>
                            <li>Material UI</li>
                            <li>Bootstrap</li>
                            <li>ChartJS</li>
                          </ul>
                        </div>
                        <div>
                          The following functionalities are available:
                          <ul>
                            <li>Create Account</li>
                            <li>Login to Account</li>
                            <li>Edit Account</li>
                            <li>Transactions List</li>
                            <li>Deposit</li>
                            <li>Withdraw</li>
                            <li>Totals Charts</li>
                          </ul>
                        </div>
                      </div>
                    </p>
                    <h5>
                      Kristina Rattet <h6>MITx Pro Professional Certificate in Coding for Women, <br></br>Anticipated completion date of July 2023</h6>
                    </h5>

                    <h6>
                      <a href="https://github.com/anthgrim/BadBank">
                        GitHub Repo
                      </a>
                    </h6>
                  </div>
                </Box>

                <Box m={2} className="custom-btn-group">
                  <Button
                    variant="contained"
                    type="submit"
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                </Box>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPopUp;
