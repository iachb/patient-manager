const Error = ({children}) => {
  return (
    <div className="bg-red-100 p-3 text-center text-red-700 mb-5">
        <p>{children}</p>
    </div>
  );
};

export default Error;
