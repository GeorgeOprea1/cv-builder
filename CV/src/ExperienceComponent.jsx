import { useState } from "react";
import "./styles/ExperienceComponent.css";
import {
  FaSuitcase,
  FaChevronDown,
  FaChevronUp,
  FaTrashAlt,
  FaEdit,
} from "react-icons/fa";

const ExperienceComponent = ({
  onSave,
  savedExperience,
  deleteExperience,
  deleteExperienceAtIndex,
}) => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startExDate, setStartExDate] = useState("");
  const [endExDate, setEndExDate] = useState("");
  const [locationEx, setLocationEx] = useState("");
  const [description, setDescription] = useState("");
  const [exForm, setExForm] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  function handleClick() {
    setExForm(!exForm);
    setEditIndex(null);
  }

  const handleEditExperience = (index) => {
    const selectedExperience = savedExperience[index];
    setEditIndex(index);
    setCompany(selectedExperience.company);
    setPosition(selectedExperience.position);
    setStartExDate(selectedExperience.startExDate);
    setEndExDate(selectedExperience.endExDate);
    setLocationEx(selectedExperience.locationEx);
    setDescription(selectedExperience.description);
    setExForm(true);
  };

  const handleSave = () => {
    const editedExperience = {
      company,
      position,
      startExDate,
      endExDate,
      locationEx,
      description,
    };

    if (editIndex !== null) {
      const updatedExperiences = [...savedExperience];
      updatedExperiences[editIndex] = editedExperience;
      onSave(updatedExperiences);
      setEditIndex(null);
    } else {
      onSave([...savedExperience, editedExperience]);
    }

    setCompany("");
    setPosition("");
    setStartExDate("");
    setEndExDate("");
    setLocationEx("");
    setDescription("");
    setExForm(false);
  };

  return (
    <div className="input-container">
      <button id="experience-component-button" onClick={handleClick}>
        <h1 className="experienceH1">
          <FaSuitcase />
          Experience
        </h1>
        {exForm ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {exForm && (
        <>
          <div className="experience-component-container">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              type="text"
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="experience-component-container">
            <label htmlFor="position">Position</label>
            <input
              id="position"
              type="text"
              placeholder="Position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div className="experience-component-container">
            <label htmlFor="startExDate">Start Date</label>
            <input
              id="startExDate"
              type="text"
              placeholder="Start Date"
              value={startExDate}
              onChange={(e) => setStartExDate(e.target.value)}
            />
          </div>
          <div className="experience-component-container">
            <label htmlFor="endExDate">End Date</label>
            <input
              id="endExDate"
              type="text"
              placeholder="End Date"
              value={endExDate}
              onChange={(e) => setEndExDate(e.target.value)}
            />
          </div>
          <div className="experience-component-container">
            <label htmlFor="locationEx">Location</label>
            <input
              id="locationEx"
              type="text"
              placeholder="Location"
              value={locationEx}
              onChange={(e) => setLocationEx(e.target.value)}
            />
          </div>
          <div className="experience-component-container">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              type="text"
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="btn-container">
            <button id="SaveBtn" onClick={handleSave}>
              Save
            </button>
            <button id="DeleteBtn" onClick={deleteExperience}>
              Delete
            </button>
          </div>
        </>
      )}
      {savedExperience.map((experience, index) => (
        <div key={index} className="saved-experience-container">
          <p>{experience.company}</p>
          <div className="edit-btns-container">
            <button
              id="deleteBtn2"
              onClick={() => deleteExperienceAtIndex(index)}
            >
              <FaTrashAlt className="saved-icon" />
            </button>
            <button id="editBtn" onClick={() => handleEditExperience(index)}>
              <FaEdit className="saved-icon" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceComponent;
