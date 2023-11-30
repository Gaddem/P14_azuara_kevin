import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalComponent from "../component/ModalComponent";
import { states } from "../constante/states";
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const AddEmployeeScreen = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    department: "Sales", // Valeur par défaut
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });

  useEffect(() => {
    // Création des options pour le menu déroulant des États
    // Utilisation du state pour mettre à jour les options
    states.map((state) => (
      <option key={state.abbreviation} value={state.abbreviation}>
        {state.name}
      </option>
    ));

    // Initialisation des datepickers
    flatpickr("#date-of-birth", {
      enableTime: false,
      dateFormat: "m/d/Y",
      onChange: (selectedDates) =>
        setEmployee((prevState) => ({
          ...prevState,
          dateOfBirth: selectedDates[0]
            ? selectedDates[0].toLocaleDateString()
            : "",
        })),
    });

    flatpickr("#start-date", {
      enableTime: false,
      dateFormat: "m/d/Y",
      onChange: (selectedDates) =>
        setEmployee((prevState) => ({
          ...prevState,
          startDate: selectedDates[0]
            ? selectedDates[0].toLocaleDateString()
            : "",
        })),
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const saveEmployee = () => {
    // Logique pour enregistrer l'employé dans le stockage local
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
    openModal();
  };

  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form id="create-employee">
          <div className="row_form">
            <div className="part_form">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                value={employee.firstName}
                onChange={handleInputChange}
              />

              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                name="lastName"
                value={employee.lastName}
                onChange={handleInputChange}
              />

              <label htmlFor="date-of-birth">Date of Birth</label>
              <input
                id="date-of-birth"
                type="text"
                name="dateOfBirth"
                value={employee.dateOfBirth}
                onChange={handleInputChange}
              />

              <label htmlFor="start-date">Start Date</label>
              <input
                id="start-date"
                type="text"
                name="startDate"
                value={employee.startDate}
                onChange={handleInputChange}
              />
              <label htmlFor="department">Department</label>
              <select
                name="department"
                id="department"
                value={employee.department}
                onChange={handleInputChange}
              >
                <option value="Sales">Sales</option>
                <option value="Marketing">Marketing</option>
                <option value="Engineering">Engineering</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Legal">Legal</option>
              </select>
            </div>
            <div className="part_form">
              <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input
                  id="street"
                  type="text"
                  name="street"
                  value={employee.street}
                  onChange={handleInputChange}
                />

                <label htmlFor="city">City</label>
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={employee.city}
                  onChange={handleInputChange}
                />

                <label htmlFor="state">State</label>
                <select
                  name="state"
                  id="state"
                  value={employee.state}
                  onChange={handleInputChange}
                >
                  {states.map((state) => (
                    <option key={state.abbreviation} value={state.abbreviation}>
                      {state.name}
                    </option>
                  ))}
                </select>

                <label htmlFor="zip-code">Zip Code</label>
                <input
                  id="zip-code"
                  type="number"
                  name="zipCode"
                  value={employee.zipCode}
                  onChange={handleInputChange}
                />
              </fieldset>
            </div>
          </div>
          <button className="save_button" type="button" onClick={saveEmployee}>
            Save
          </button>
        </form>
      </div>
      <ModalComponent
        isOpen={isModalOpen}
        onClose={closeModal}
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.7)" },
          modal: {
            borderRadius: "20px",
            backgroundColor: "white",
            padding: 15,
          },
        }}
      >
        Employee Created !
      </ModalComponent>
    </>
  );
};

export default AddEmployeeScreen;
