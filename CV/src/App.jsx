import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./styles/App.css";
import Header from "./Header";
import TemplateLoader from "./TemplateLoader";
import Footer from "./Footer";
import PersonalInfoComponent from "./PersonalInfoComponent";
import DisplayPersonalInfo from "./DisplayPersonalInfo";
import EducationComponent from "./EducationComponent";
import DisplayEducation from "./DisplayEducation";
import ExperienceComponent from "./ExperienceComponent";
import DisplayExperience from "./DisplayExperience";

const App = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [educationData, setEducationData] = useState([]);
  const [experienceData, setExperienceData] = useState([]);

  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);

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

  const personalInfoDeleteBtn = () => {
    setFullName("");
    setAddress("");
    setEmail("");
    setPhoneNumber("");
  };

  const deleteAll = () => {
    personalInfoDeleteBtn();
    handleExperienceDelete();
    handleEducationDelete();
    setEducationData([]);
    setExperienceData([]);
  };

  const deleteEdSection = () => setEducationData([]);
  const deleteExSection = () => setExperienceData([]);

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

  const loadExample = () => {
    setFullName("John Doe");
    setEmail("john.doe@email.com");
    setPhoneNumber("(555)-123-4567");
    setAddress("123 Main Street, Anytown, USA");
    setExperienceData([
      {
        company: "ABC Tech",
        position: "Software Engineer",
        description:
          "Developed and maintained web applications using ReactJS and Node.js. Led a team of developers for Project X, resulting in a 20% increase in user engagement.",
        startExDate: "January 2019",
        endExDate: "Present",
        locationEx: "Anytown, USA",
      },
      {
        company: "XYZ Corporation",
        position: "IT Support Intern",
        description:
          "Provided technical support to employees, troubleshooting hardware and software issues. Assisted in network maintenance and system upgrades.",
        endExDate: "December 2018",
        startExDate: "June 2017",
        locationEx: "Portland, USA",
      },
    ]);
    setEducationData([
      {
        school: "Anytown University",
        degree: "Bachelor of Science in Computer Sience",
        startDate: "January 2015",
        endDate: "May 2019",
        location: "Anytown, USA",
      },
    ]);
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
            loadExample={loadExample}
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
