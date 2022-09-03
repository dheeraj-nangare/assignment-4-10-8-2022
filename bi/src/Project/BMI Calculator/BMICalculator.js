import { useState } from "react"
import "./BMICalc.css"

const BMICalculator = () => {
  const [height, setHeight] = useState()
  const [weight, setWeight] = useState()
  const [result, setResult] = useState()
  const [minWeight, setMinWeight] = useState()
  const [maxWeight, setMaxWeight] = useState()
  const [healthStatus, setHealthStatus] = useState()
  const [isVisibility,setIsVisibility] = useState(false)

  const getHeight = (e) => {
    setHeight(e.target.value)
  }
  const getWeight = (e) => {
    setWeight(e.target.value)
  }
  const calculateBMI = (e) => {
    e.preventDefault()
    let h = height / 100
    let ans = weight / (h * h)
    ans = Math.round(ans*100)/100
    setResult(ans)
    
    let maxW = Math.round(2500*h*h)/100
    setMaxWeight(maxW)
    
    let minW = Math.round(1850*h*h)/100
    setMinWeight(minW)

    if (ans > 18.5 && ans < 25) {
      setHealthStatus("You are in a healthy weight range")
    }
    else {
      setHealthStatus("You are not in a healthy weight range")
    }

    setIsVisibility(true)
  }

  return (
    <div class="container">
      <div class="headerContainer">
        <h1>BMI Calculator</h1>
      </div>
      <div class="bodyContainer">
      <form>
        <h2>Enter your height in cm:</h2>
        <input type="number" onChange={(e) => getHeight(e)}></input>
        <h2>Enter your weight in kg:</h2>
        <input type="number" onChange={(e) => getWeight(e)}></input>
        <br/>
        <button onClick={(e) => calculateBMI(e)}>Submit</button>
      </form>
      </div>
      <div id="ansContainer" style={{visibility: isVisibility ? 'visible' : 'hidden'}}>
      <h3>Your BMI is {result}</h3>
      <h3>Your suggested weight range is between {minWeight} - {maxWeight}</h3>
      <h3>{healthStatus}</h3>
      </div>
    </div>
  )
}
export default BMICalculator