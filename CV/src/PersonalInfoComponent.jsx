import "./styles/PersonalInfoComponent.css";

const PersonalInfoComponent = (props) => {
  return (
    <div className="input-container">
      <h2 className="personal-info-header">Personal Details</h2>
      <div className="personal-input-container">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          placeholder="Full Name"
          value={props.fullName}
          onChange={props.nameChange}
        />
      </div>
      <div className="personal-input-container">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={props.email}
          onChange={props.emailChange}
        />
      </div>
      <div className="personal-input-container">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          placeholder="Phone Number"
          value={props.phoneNumber}
          onChange={props.phoneChange}
        />
      </div>
      <div className="personal-input-container">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          placeholder="Address"
          value={props.address}
          onChange={props.addressChange}
        />
      </div>
      <button id="personalDelete" onClick={props.onDelete}>
        Delete
      </button>
    </div>
  );
};

export default PersonalInfoComponent;
