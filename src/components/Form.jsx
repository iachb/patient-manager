const Form = () => {
  return (
    <form>
      <label htmlFor="name">
        Name:
        <input type="text" id="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;