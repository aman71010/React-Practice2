import { useState } from "react";

import Header from "./Components/Header";
import InvestmentRecords from "./Components/InvestmentRecords";
import UserInputs from "./Components/UserInputs";

const INVESTMENT_DETAILS = {
  'Initial Investment': '',
  'Annual Investment': '',
  'Expected Return': '',
  'Duration': '',
}

function App() {
  const [userInputs, setUserInputs] = useState(INVESTMENT_DETAILS);

  function handleUserInputsChange(inputName, value){
    setUserInputs(prevInputs => ({
      ...prevInputs,
      [inputName]: +value
    }))
  }

  const isValidDuration = userInputs.Duration >= 1;

  return (
    <>
      <Header />
      <UserInputs userInputs={userInputs} onUserInputsChange={handleUserInputsChange} />
      {
        isValidDuration ? <InvestmentRecords userInputs={userInputs} /> : 
        <p className="center">Please enter a valid duration greater than one.</p>
      }
    </>
  )
}

export default App
