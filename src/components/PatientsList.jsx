import Patient from "./Patient";

const PatientsList = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center">Patients List</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Manage your {" "}
        <span className="text-indigo-600 font-bold">
          Patients and Appointments
        </span>
      </p>
      <Patient />
    </div>
  );
};

export default PatientsList;
