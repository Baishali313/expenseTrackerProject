import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props) {
  const clickHandler = () => {
    console.log('clicked!!!');
  };

  const deleteHandler = () => {
    // Find the parent element (Card) and remove it
    const expenseItem = document.querySelector('.expense-item');
    expenseItem.parentNode.removeChild(expenseItem);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h2>{props.locationOfExpenses}</h2>
        <div className="expense-item__price">{props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={deleteHandler}>Delete Expense</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
