import React from "react";
import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";

const  ExpensesList = (props) => {
    let expensesContent= <span className={"text-white"}>Kayıt Bulunamamıştır</span>;
    if(props.items.length===0){

        return <h2 className='expenses-list__fallback'>Harcama Bulunamadı</h2>
    }
    return (<ul className='expenses-list'>
        {props.items.map(item=> <ExpenseItem item={item} key={item.id}/>)}
    </ul>)
}

export default ExpensesList
