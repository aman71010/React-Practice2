import {calculateInvestmentResults, formatter } from '../util/investment';

export default function InvestmentRecords({userInputs}) {
  const inputsValue = Object.values(userInputs);
  const inputs = {
    initialInvestment: inputsValue[0],
    annualInvestment: inputsValue[1],
    expectedReturn: inputsValue[2],
    duration: inputsValue[3],
  }
  const resultsData = calculateInvestmentResults(inputs);
  const initialInvestment = 
    resultsData[0].valueEndOfYear
    - resultsData[0].interest
    - resultsData[0].annualInvestment;
  return (
    <div>
      <table id="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {
            resultsData.map(item => {
              const totalInterest = item.valueEndOfYear
              - item.annualInvestment*item.year - initialInvestment;
              const totalAmountInvestment = item.valueEndOfYear - totalInterest;
              return <tr key={item.year}>
                <td>{item.year}</td>
                <td>{formatter.format(item.valueEndOfYear)}</td>
                <td>{formatter.format(item.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(totalAmountInvestment)}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}