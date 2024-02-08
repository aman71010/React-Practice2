import UserInput from "./UserInput";

export default function UserInputs({userInputs, onUserInputsChange}) {
  const inputNames = Object.keys(userInputs);
  return (
    <section id="user-input">
      <div className="input-group">
        <UserInput 
          labelName={inputNames[0]} 
          userInputs={userInputs} 
          onUserInputsChange={onUserInputsChange} 
        />
        <UserInput 
          labelName={inputNames[1]} 
          userInputs={userInputs} 
          onUserInputsChange={onUserInputsChange}
        />
      </div>
      <div className="input-group">
        <UserInput 
          labelName={inputNames[2]}
          userInputs={userInputs} 
          onUserInputsChange={onUserInputsChange} 
        />
        <UserInput 
          labelName={inputNames[3]}
          userInputs={userInputs} 
          onUserInputsChange={onUserInputsChange}
        />
      </div>
    </section>
  )
}