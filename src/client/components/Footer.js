import React from "react";

function Footer() {
  return (
    <>
      <hr />
      <div className="footer">
        <div className="footer-right">
          <div>
            <img
              className="footer-icon"
              src="https://cdn4.vectorstock.com/i/1000x1000/85/18/charity-food-icon-in-flat-style-on-white-vector-27938518.jpg"
              alt="food with love icon"
            />
          </div>
          <p>
            &copy; Created by : <strong>DlnyaMazhari</strong>
          </p>
        </div>
        <div className="socialMedia-icons">
          <ul className="socialMedia-icons">
            <li className="socialMedia-icons">
              <a href="#">
                <img
                  className="socialMedia-icons"
                  src="https://thumbs.dreamstime.com/b/facebook-icon-logo-white-background-editable-vector-illustration-facebook-icon-logo-141051712.jpg"
                  alt="facebook icon"
                />
              </a>
            </li>
            <li className="socialMedia-icons">
              <a href="#">
                <img
                  className="socialMedia-icons"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png"
                  alt="instagram icon"
                />
              </a>
            </li>
            <li className="socialMedia-icons">
              <a href="#">
                <img
                  className="socialMedia-icons"
                  src="https://image.flaticon.com/icons/png/512/124/124021.png"
                  alt="twitter icon"
                />
              </a>
            </li>
            <li className="socialMedia-icons">
              <a href="#">
                <img
                  className="socialMedia-icons"
                  src="https://image.flaticon.com/icons/png/512/174/174857.png"
                  alt="linkedin icon"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
