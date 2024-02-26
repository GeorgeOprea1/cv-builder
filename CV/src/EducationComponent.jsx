import { useState } from "react";
import "./styles/EducationComponent.css";
import { FaGraduationCap } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const EducationComponent = ({
  onSave,
  savedEducations,
  deleteEducation,
  deleteEducationAtIndex,
}) => {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [edForm, setEdForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleClick = () => {
    setEdForm(!edForm);
  };

  const handleEditEducation = (index) => {
    const selectedEducation = savedEducations[index];
    setEditIndex(index);
    setSchool(selectedEducation.school);
    setDegree(selectedEducation.degree);
    setStartDate(selectedEducation.startDate);
    setEndDate(selectedEducation.endDate);
    setLocation(selectedEducation.location);
    setEdForm(true);
  };

  const handleSave = () => {
    const editedEducation = {
      school,
      degree,
      startDate,
      endDate,
      location,
    };

    if (editIndex !== null) {
      const updatedEducations = [...savedEducations];
      updatedEducations[editIndex] = editedEducation;
      onSave(updatedEducations);
      setEditIndex(null);
      setEdForm(false);
    } else {
      onSave([...savedEducations, editedEducation]);
    }

    setDegree("");
    setEndDate("");
    setStartDate("");
    setSchool("");
    setLocation("");
  };

  return (
    <div className="input-container">
      <button id="education-component-button" onClick={handleClick}>
        <h1 className="educationH1">
          <FaGraduationCap /> Education
        </h1>
        {edForm ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {edForm && (
        <>
          <div className="education-component-container">
            <label htmlFor="school">School</label>
            <input
              id="school"
              type="text"
              placeholder="School"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />
          </div>
          <div className="education-component-container">
            <label htmlFor="degree">Degree</label>
            <input
              id="degree"
              type="text"
              placeholder="Degree"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            />
          </div>
          <div className="education-component-container">
            <label htmlFor="start">Start Date</label>
            <input
              id="start"
              type="text"
              placeholder="Start Date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className="education-component-container">
            <label htmlFor="ends">End Date</label>
            <input
              id="end"
              type="text"
              placeholder="End Date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className="education-component-container">
            <label htmlFor="location">Location</label>
            <input
              id={location}
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="btn-container">
            <button id="saveBtn" onClick={handleSave}>
              Save
            </button>
            <button id="deleteBtn" onClick={deleteEducation}>
              Delete
            </button>
          </div>
        </>
      )}
      {savedEducations.map((education, index) => (
        <div key={index} className="saved-education-container">
          <p>{education.school}</p>
          <div className="edit-btns-container">
            <button
              id="deleteBtn2"
              onClick={() => deleteEducationAtIndex(index)}
            >
              <FaTrashAlt className="saved-icon" />
            </button>
            <button id="editBtn" onClick={() => handleEditEducation(index)}>
              <FaEdit className="saved-icon" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationComponent;
