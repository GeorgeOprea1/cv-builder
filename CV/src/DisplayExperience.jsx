import "./styles/DisplayExperience.css";
import { MdDeleteForever } from "react-icons/md";

const DisplayExperience = ({ data, onDelete }) => {
  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <div className="display-container">
      <h2 className="experience-header">Professional Experience</h2>
      {data.map((item, index) => (
        <div key={index} className="experience-container">
          <div className="wraper">
            <div className="date-location-container">
              <div className="date-container">
                <p> {item.startExDate}</p>
                {item.endExDate ? <p> - {item.endExDate}</p> : null}
              </div>
              <p>{item.locationEx}</p>
            </div>
            <div className="company-description-container">
              <div className="company-container">
                <p>
                  <strong>{item.company}</strong>{" "}
                </p>
                <p> {item.position}</p>
              </div>
              <p className="description">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayExperience;
