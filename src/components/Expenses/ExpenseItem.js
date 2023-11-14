import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../UI/Card'




function ExpenseItem(props){

    // const expenseDate= new Date(2021, 2, 28);
    // const expenseTitle='Car Insurance';
    // const expenseAmount=294.67;
    // const month=props.date.toLocaleString('en-US',{month:'long'});
    // const date=props.date.toLocaleString('en-US',{date:'2-digit'});
    // const year= props.date.getFullYear();

    const clickHandler= ()=>{
        console.log('clicked!!!');
    }




    return(
        <Card className= 'expense-item'>
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title} </h2>
                <h2>{props.locationOfExpenses}</h2>
                <div className='expense-item__price'>{props.amount}</div>
                <button onClick={clickHandler}>change title</button>
            
            
        </div>
       
    </Card>
    
    
)
}
     

export default ExpenseItem;