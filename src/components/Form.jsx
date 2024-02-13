const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Patients Follow Up</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Add {""}
        <span className="text-indigo-600 font-bold">Patients</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
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
            className="w-full border-2 p-2 mt-2 placeholder-gray-400 rounded-md"
            placeholder="Describe pet's symptoms"
          / >
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 rounded-md cursor-pointer transition-all duration-300 ease-in-out"
          value="Add Patient"
        />
      </form>
    </div>
  );
};

export default Form;
