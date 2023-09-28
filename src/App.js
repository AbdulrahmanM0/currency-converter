// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
const[amount, setAmount] = useState();
const [fromCur,setFromCur] = useState("EUR") 
const [toCur,setToCur] = useState("USD") 
const [converted,setConverted] = useState('')
const [isLoading,setIsLoading] = useState(false)


useEffect(function(){
  async function convert(){
    setIsLoading(true)
    const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`);
    const data = await res.json();
    setConverted(data.rates[toCur])
    setIsLoading(false)
  }
  if(fromCur === toCur) return setConverted(amount)
  convert()
},[amount,fromCur,toCur])


  return (
    <div>
      <h1>Today is 28/9/2023</h1>
      <p>I've played in your code . do U think you will find out it ??!! </p>
      <h3>Bty this is your ip address '41.235.127.168' (0-0)</h3>
      <input
        type="text" value={amount} onChange={(e) => setAmount(Number(e.target.value))} disabled={isLoading}/>
      <select value={fromCur} onChange={(e) => setFromCur(e.target.value)} disabled={isLoading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={toCur} onChange={(e) => setToCur(e.target.value)} disabled={isLoading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{converted} {toCur}</p>
    </div>
  );
}
