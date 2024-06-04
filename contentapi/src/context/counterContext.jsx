import { createContext,useState } from "react";

// first we have to create a context


export const counterContext = createContext(null);



// second we have to create a provider
// Third we have to provide a value

export const CounterProvider = (props) =>{
    const [state,setState] = useState(5)
    return <counterContext.Provider value={{state,setState}}>{props.children}</counterContext.Provider>
}