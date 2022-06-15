import "../../stylesheets/settings.css";
import { BiUserCircle } from "react-icons/bi";


export default function Settings() {
  return (
    <div className="settings">
    
      <div className="Wrapper">
        <div className="Stitle">
          <span className="SUpTitle">Update Your Account</span>
          <span className="SDelTitle">Delete Account</span>
        </div>
        <form className="Sform">
          <label>Profile Picture</label>
          <div className="Spfp">
            <img
              className="pfpImg"
              src={require("../../images/pict1.jpg")}
              alt=""
            />
            <label htmlFor="fileInput" className="">
              <BiUserCircle className="SpfpIcon" />
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="John" />
          <label>Email</label>
          <input type="email" placeholder="John@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}
