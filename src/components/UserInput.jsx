export default function UserInput({ userInputs, handleChange }) {
  return (
    <section id="user-input">
      {Object.keys(userInputs).map((userInput, idx) => {
        return (
          <div key={idx} className="input-group">
            <label htmlFor={`input-${idx}`}>{userInput}</label>
            <input
              id={`input-${idx}`}
              type="number"
              onChange={handleChange}
              placeholder={userInputs[userInput]}
              data-for={userInput}
            />
          </div>
        );
      })}
    </section>
  );
}
