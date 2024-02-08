export default function UserInput({labelName, userInputs, onUserInputsChange}) {
  return (
    <p>
      <label>{labelName}</label>
      <input 
        type="number" 
        value={userInputs[labelName]} 
        onChange={(event) => onUserInputsChange(labelName, event.target.value)} 
      />
    </p>
  )
}