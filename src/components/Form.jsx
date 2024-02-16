import { useEffect, useState } from "react";
import Error from "./Error";

const Form = ({ patients, setPatients, patient, setPatient }) => {
  // Hooks
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [email, setEmail] = useState("");
  const [register, setRegister] = useState("");
  const [symptoms, setSymptoms] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(patient).length !== 0) {
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setRegister(patient.register);
      setSymptoms(patient.symptoms);
    }
  }, [patient]);

  const generateId = () => {
    const random = Math.random().toString(36).substr(2);
    const date = new Date().toString(36);

    return random + date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form
    if ([name, owner, email, register, symptoms].includes("")) {
      setError(true);
      return;
    }
    setError(false);
    // Object with patient data
    const objectPatient = {
      name,
      owner,
      email,
      register,
      symptoms,
    };

    if (patient.id) {
      // Edit patient
      objectPatient.id = patient.id;
      // Updates the patients array by replacing the patient with the specified id with the updated patient object.
      const updatedPatients = patients.map((p) =>
        p.id === patient.id ? objectPatient : p
      );
      setPatients(updatedPatients);
      setPatient({});
    } else {
      // Add new patient
      objectPatient.id = generateId();
      setPatients([...patients, objectPatient]);
    }

    //!!!! In React, we dont modify the array directly!!!!
    setPatients([...patients, objectPatient]); // Spread operator "..." create a new array with the new data

    // Reset form
    setName("");
    setOwner("");
    setEmail("");
    setRegister("");
    setSymptoms("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Patients Follow Up</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Add {""}
        <span className="text-indigo-600 font-bold">Patients</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error>All fields are required</Error>}
        <div className="mb-5">
          <label
            htmlFor="pet"
            className="block text-gray-700 uppercase font-bold"
          >
            Pet&apos;s Name
          </label>
          <input
            id="pet"
            type="text"
            placeholder="Pet's Name"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="owner"
            className="block text-gray-700 uppercase font-bold"
          >
            Owner&apos;s Name
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Owner's Name"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="email@example.com"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="register"
            className="block text-gray-700 uppercase font-bold"
          >
            Register
          </label>
          <input
            id="register"
            type="date"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            value={register}
            onChange={(e) => setRegister(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="block text-gray-700 uppercase font-bold"
          >
            Symptoms
          </label>
          <textarea
            id="symptoms"
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe pet's symptoms"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 rounded-md cursor-pointer transition-all duration-300 ease-in-out"
          value={patient.id ? "Edit Patient" : "Add Patient"}
        />
      </form>
    </div>
  );
};

export default Form;
