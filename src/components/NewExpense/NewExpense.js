import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense = (props)=>{
    const saveExpenseDataHandler =(enteredExpenseData)=>{
        const expensedata ={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        console.log(expensedata);
        props.onAddExpense(expensedata);


    }
    return(
        <div className="new-expense">
            <ExpenseForm onSaveEnteredData={saveExpenseDataHandler}/>
        </div>
    );


}
export default NewExpense;