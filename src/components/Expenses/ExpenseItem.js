import React, {useState} from "react";
import Card from "../UI/Card";
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
    const item =props.item
    const [title , setTitle ] = useState(item.title);

    const clickHandler = () => {
        setTitle('yenilendi')
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={item.date}/>
                    <div className="item__description">
                        <h2>{title}</h2>
                    </div>
            <div className='expense-item__price'>${item.amount}</div>
            <button onClick={clickHandler} ></button>
        </Card>
    )
}

export default ExpenseItem;
