import { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import PatientsList from "./components/PatientsList";

function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const obtainLocalStorage = () => {
      const patientsStorage = JSON.parse(localStorage.getItem("patients")) ?? [];
      setPatients(patientsStorage);
    };
    obtainLocalStorage();
  }, []);

  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  const erasePatient = (id) => {
    const updatedPatients = patients.filter((patient) => patient.id !== id);
    setPatients(updatedPatients);
  };

  return (
    <>
      <div className="container mx-auto mt-20">
        <Header />

        <div className="mt-12 md:flex">
          <Form
            patients={patients}
            setPatients={setPatients}
            patient={patient}
            setPatient={setPatient}
          />
          <PatientsList
            patients={patients}
            setPatient={setPatient}
            erasePatient={erasePatient}
          />
        </div>
      </div>
    </>
  );
}

export default App;
