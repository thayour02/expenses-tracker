import {   useDisclosure,  } from "@chakra-ui/react";
import Summary from "../overView";
import Expenses  from "../expense";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context";

export default function Main() {
    const {onClose, isOpen, onOpen} = useDisclosure()
    const {totalIncome, setTotalIncome,allTransaction,totalExpense, setTotalExpense} = useContext(GlobalContext)

    useEffect(()=>{
        let income = 0;
        let expense = 0;

        allTransaction.forEach(item => {
            item.type === 'income' ? income = income + parseFloat(item.amount):
            expense = expense + parseFloat(item.amount)
        });
        setTotalExpense(expense)
        setTotalIncome(income)
    })
    return <div>
        <div className="flex  justify-between items-center bg-gray-200 pt-2 ps-3 pe-9">
            <header className="text-2xl font-bold text-blue-400">Expenses Tracker</header>
            <div className="pb-1">
                <button onClick={onOpen} className="bg-blue-400 text-white hover:bg-gray-200 hover:text-red-900  rounded-lg font-bold w-40 h-9">Add Transaction</button>
            </div>
        </div>
        <div>
            <Summary totalExpense={totalExpense} totalIncome={totalIncome} isOpen={isOpen} onClose={onClose} />
        </div>

        <div className="flex justify-evenly bg-gray-200 min-h-[60vh]">
            <Expenses/>
            <Expenses/>
        </div>


    </div>

}