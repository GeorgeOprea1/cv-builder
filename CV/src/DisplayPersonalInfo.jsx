import "./styles/DisplayPersonalInfo.css";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const DisplayPersonalInfo = (props) => {
  return (
    <div className="personal-info-container">
      <div className="resume-name">{props.fullName} </div>
      <div className="resume-contact">
        {props.email ? (
          <div className="contact-container">
            <IoIosMail className="icon" /> {props.email}
          </div>
        ) : null}
        {props.phoneNumber ? (
          <div className="contact-container">
            <FaPhone className="icon" /> {props.phoneNumber}
          </div>
        ) : null}
        {props.address ? (
          <div className="contact-container">
            <FaLocationDot className="icon" /> {props.address}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DisplayPersonalInfo;
