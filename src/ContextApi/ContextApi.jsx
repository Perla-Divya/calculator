import React ,{createContext} from 'react'
import Comp1 from './Comp1'

export let x=createContext()

const ContextApi=()=>{
    console.log(x)          //(Provider,Consumer)
    let name='Diya'
  return(
      <div>
          <h1>
             Context API
          </h1>
          <x.Provider value={name}>
              <Comp1 />
          </x.Provider>
      </div>
  )  
}
export default ContextApi