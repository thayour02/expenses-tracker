import {  createContext, useState } from "react";



export const GlobalContext = createContext(null)


export default function  GlobalState ({ children }){
    const [formData, setFormData] = useState({
        type : "income",
        amount : 0,
        description : ""
    })

    
    const [value, setValue] = useState('expense')
    const [totalExpense, setTotalExpense] = useState(0)
    const [totalIncome, setTotalIncome] = useState(0)
    const [allTransaction, setAllTransaction] = useState([])

    function handleFormSubmit(currentFormData){
        if(!currentFormData.description || !currentFormData.amount) return;
        setAllTransaction([
            ...allTransaction,{...currentFormData, id:Date.now()}
        ])
    }
    
    return <GlobalContext.Provider
    value={{formData,
         setFormData,
         value, 
         setValue,
         totalExpense, 
         setTotalExpense,
         totalIncome, 
         setTotalIncome,
         allTransaction, 
         setAllTransaction,
         handleFormSubmit}}
    >{children}</GlobalContext.Provider>
}