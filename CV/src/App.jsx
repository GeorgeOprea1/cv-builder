import EducationComponent from "./EducationComponent";
import ExperienceComponent from "./ExperienceComponent";
import "./styles/App.css";
import { useState } from "react";
import DisplayEducation from "./DisplayEducation";
import DisplayExperience from "./DisplayExperience";
import DisplayPersonalInfo from "./DisplayPersonalInfo";
import PersonalInfoComponent from "./PersonalInfoComponent";
import Header from "./Header";
import TemplateLoader from "./TemplateLoader";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Footer from "./Footer";

const App = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const personalInfoDeleteBtn = () => {
    setFullName("");
    setAddress("");
    setEmail("");
    setPhoneNumber("");
  };
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);

  const handleEducationSave = (data) => {
    const updatedEducationData = [...educationData, data];
    setEducationData(updatedEducationData);
  };

  const handleExperienceSave = (data) => {
    const updatedExperienceData = [...experienceData, data];
    setExperienceData(updatedExperienceData);
  };

  const handleEducationDelete = (index) => {
    const updatedEducationData = educationData.filter((_, i) => i !== index);
    setEducationData(updatedEducationData);
  };

  const handleExperienceDelete = (index) => {
    const updatedExperienceData = experienceData.filter((_, i) => i !== index);
    setExperienceData(updatedExperienceData);
  };

  function deleteAll() {
    personalInfoDeleteBtn();
    handleExperienceDelete();
    handleEducationDelete();
    setEducationData([]);
    setExperienceData([]);
  }

  function deleteEdSection() {
    setEducationData([]);
  }

  function deleteExSection() {
    setExperienceData([]);
  }

  const handleDownloadPDF = () => {
    const sectionToCapture = document.getElementById("downloadSection");

    html2canvas(sectionToCapture).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        unit: "px",
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);

      pdf.save("section.pdf");
    });
  };

  return (
    <div className="app-container">
      <Header />
      <div className="interface-container">
        <div className="inputs-container">
          <PersonalInfoComponent
            nameChange={handleFullNameChange}
            emailChange={handleEmailChange}
            phoneChange={handlePhoneNumberChange}
            addressChange={handleAddressChange}
            fullName={fullName}
            email={email}
            phoneNumber={phoneNumber}
            address={address}
            onDelete={personalInfoDeleteBtn}
          />
          <TemplateLoader
            deleteAll={deleteAll}
            onDownload={handleDownloadPDF}
          />
          <EducationComponent
            onSave={handleEducationSave}
            deleteEducation={deleteEdSection}
          />

          <ExperienceComponent
            onSave={handleExperienceSave}
            deleteExperience={deleteExSection}
          />
        </div>

        <div className="display-container" id="downloadSection">
          <DisplayPersonalInfo
            fullName={fullName}
            email={email}
            phoneNumber={phoneNumber}
            address={address}
          />
          <DisplayEducation
            data={educationData}
            onDelete={handleEducationDelete}
          />
          <DisplayExperience
            data={experienceData}
            onDelete={handleExperienceDelete}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
