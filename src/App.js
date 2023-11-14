import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';
const App= ()=> {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      // locationOfExpenses: 'dmart, delhi'
    },
    { id: 'e2', 
    title: 'New TV', 
    amount: 799.49,
     date: new Date(2021, 2, 12)},
  //  locationOfExpenses:'lg showroom,delhi' },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      // locationOfExpenses:'insurance office, delhi'

    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      // locationOfExpenses:'ikea, delhi'
    },
  ];

  
      const expenseComponent=[];
      for(let i=0;i<expenses.length;i++){
     
        expenseComponent.push(

         <ExpenseItem 
         title={expenses[i].title}
         amount={expenses[i].amount}
         date={expenses[i].date}
        //  locationOfExpenses={expenses[i].locationOfExpenses}
         ></ExpenseItem>
      )};
      
    


  return (
    <div>
      <NewExpense></NewExpense>
      {expenseComponent}
    </div>  
  );    
}

export default App;