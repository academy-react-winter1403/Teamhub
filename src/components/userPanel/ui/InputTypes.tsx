const InputTypes = () => {
  return (
    <div className="w-1/3 flex flex-col justify-evenly">
      <fieldset className="fieldset">
        <legend className="fieldset-legend">What is your name?</legend>
        <input type="text" className="input" placeholder="Type here" />
        {/* <p className="fieldset-label">Optional</p> */}
      </fieldset>
    </div>
  );
};

export default InputTypes;
