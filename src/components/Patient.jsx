
const Patient = ({ patient, setPatient, erasePatient }) => {

  const handleDelete = () => {
    const answer = confirm("Are you sure you want to delete this patient?");
    if (answer){
      erasePatient(patient.id);
    }
  };
  
  return (
    <div className="mx-5 my-10 mt-5 bg-white shadow-md m-3 px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Name: {""}
        <span className="font-normal normal-case">{patient.name}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Owner: {""}
        <span className="font-normal normal-case">{patient.owner}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{patient.email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Date: {""}
        <span className="font-normal normal-case">{patient.register}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Symptoms: {""}
        <span className="font-normal normal-case">{patient.symptoms}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg uppercase"
          onClick={() => setPatient(patient)} // Arrow function because we need to wait for the click event
        >
          Edit
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg uppercase"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Patient;
