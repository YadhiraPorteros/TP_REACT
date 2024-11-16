import { useState } from "react"

export const ComponentCounter = () => {

  const [counter, setcounter] = useState<number>(0)

  const IncrementarCounter = ()=>{
    setcounter((prev)=> prev+1);
  }

  const DecrementarCounter = ()=>{
   if(counter > 0){
    setcounter((prev)=> prev-1);
   }
  }
  
  return (
    <div>
      <h2>Valor de counter: {counter}</h2>
      <button onClick={IncrementarCounter}>Incrementar</button>
      <button onClick={DecrementarCounter}>Decrementar</button>


    </div>
  )
}
