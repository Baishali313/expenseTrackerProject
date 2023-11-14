import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const [isVisible, setIsVisible] = useState(true);
  const [amount, setAmount]= useState(props.amount);

  const clickHandler = () => {
    setTitle('updated');
    console.log(title); // This may log the previous title due to the asynchronous nature of state updates
  };

  const deleteHandler = () => {
    // Set isVisible to false instead of removing the element from the DOM
    setIsVisible(false);
  };

  const changeExpenseHandler= () =>{
    setAmount('100$');
    
  }

  return isVisible ? (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        {/* <h2>{props.locationOfExpenses}</h2> */}
        <div className="expense-item__price">{amount}</div>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={deleteHandler}>Delete Expense</button>
        <button onClick= {changeExpenseHandler}> make 100$ </button>
      </div>
    </Card>
  ) : null;
}

export default ExpenseItem;
