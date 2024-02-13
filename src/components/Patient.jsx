const Patient = () => {
  return (
    <div className="mt-5 bg-white shadow-md m-3 px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Name: {""}
        <span className="font-normal normal-case">Hook</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Owner: {""}
        <span className="font-normal normal-case">Juan</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">owner@email.com</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Date: {""}
        <span className="font-normal normal-case">December 10 2022</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Symptoms: {""}
        <span className="font-normal normal-case">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quia.{" "}
        </span>
      </p>
    </div>
  );
};

export default Patient;
