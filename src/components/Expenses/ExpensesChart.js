import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = props => {
console.log(props.expenses)
    const chartDataPoints = [
        {label: 'Ocak',  value: 0},
        {label: 'Şubat',  value: 0},
        {label: 'Mart',  value: 0},
        {label: 'Nisan',  value: 0},
        {label: 'Mayıs',  value: 0},
        {label: 'Haziran',  value: 0},
        {label: 'Temmuz',  value: 0},
        {label: 'Ağustos',  value: 0},
        {label: 'Eylül',  value: 0},
        {label: 'Ekim',  value: 0},
        {label: 'Kasım',  value: 0},
        {label: 'Aralık',  value: 0},

    ]
    for (const expense of props.expenses){

        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expenseMonth

    }
    return <Chart dataPoints={chartDataPoints}/>
}

export  default ExpensesChart
