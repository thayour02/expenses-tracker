import TransactionFrom from "../add-trans";
import ChartSummary from "../chart";

export default function Summary({onClose, isOpen, totalExpense, totalIncome}) {
    return <div>
        <div className="pb-5">
            <div className="pe-20 mr-20 pt-10 pb-3">
            <p className="pe-20 mr-20 text-xl font-semibold">Balance is ${totalIncome - totalExpense}</p>

            </div>
            <div className="flex item-center justify-between ">
                <div className="bg-gray-200 min-w-[90vh] h-40 rounded-lg ">
                    <div className="pb-6 pt-3">
                        <p className="text-xl font-semibold">${totalIncome}</p>
                        <span>Total Income</span>
                    </div>
                    <div>
                        <p  className="text-xl font-semibold">${totalExpense}</p>
                        <span>Total Expenses</span>
                    </div>
                </div>
                <div className="pe-20">
                    <p className="text-2xl font-bold text-blue-400">Chart</p>
                    <ChartSummary/>
                </div>
            </div>
        </div>
    <TransactionFrom onClose={onClose} isOpen={isOpen}/>
    </div>
}