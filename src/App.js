import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { calculateResults } from "./util/investment";
import { useState, useMemo } from "react";

const INITIAL_INPUTS = {
  initialInvestment: 1000,
  annualInvestment: 500,
  expectedReturn: 10,
  duration: 10,
};

function App() {
  const [userInputs, setUserInputs] = useState(INITIAL_INPUTS);
  const calculatedData = useMemo(
    () => calculateResults(userInputs),
    [userInputs]
  );

  const updateData = ({ target }) => {
    setUserInputs((prevUserInputs) => {
      const updatedUserInputs = { ...prevUserInputs };
      updatedUserInputs[target.dataset.for] = parseFloat(target.value);
      return updatedUserInputs;
    });
  };

  return (
    <>
      <Header />
      <UserInput userInputs={userInputs} handleChange={updateData} />
      <Results data={calculatedData} />
    </>
  );
}

export default App;
