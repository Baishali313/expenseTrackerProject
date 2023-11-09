import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'




function ExpenseItem(props){

    // const expenseDate= new Date(2021, 2, 28);
    // const expenseTitle='Car Insurance';
    // const expenseAmount=294.67;
    // const month=props.date.toLocaleString('en-US',{month:'long'});
    // const date=props.date.toLocaleString('en-US',{date:'2-digit'});
    // const year= props.date.getFullYear();




    return(<div className='expense-item'> 
        {/* <div>
            <div>{month}</div>
            <div>{date}</div>
            <div>{year}</div>
        </div>   */}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
            <h2>{props.title} </h2>
            <h2>{props.locationOfExpenses}</h2>
            <div className='expense-item__price'>{props.amount}</div>
            
            
        </div>
       
    </div>
    
)
}
     

export default ExpenseItem;