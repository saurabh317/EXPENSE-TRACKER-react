import Expenseitem from "./components/ExpenseItem";
function App() {
  const expenses = [
    {
      id: "1",
      title: "books",
      amount: "$040",
      date: new Date(2022, 4, 19)
    },
    {
      id: "2",
      title: "laundry",
      amount: "$032",
      date: new Date(2022, 5, 11)
    },
    {
      id: "3",
      title: "dinner",
      amount: "$048",
      date: new Date(2022, 7, 26)
    },
    {
      id: "4",
      title: "movies",
      amount: "$980",
      date: new Date(2022, 8, 16)
    },
    {
      id: "5",
      title: "shopping",
      amount: "$400",
      date: new Date(2022, 12, 12)
    },
  ];
 
  console.log(expenses[0].date);
  return (
    <div>
      <h2>lets get started</h2>
      <Expenseitem title={expenses[0].title} amount ={expenses[0].amount} date = {expenses[0].date}></Expenseitem>
      <Expenseitem title={expenses[1].title} amount ={expenses[1].amount} date = {expenses[1].date}></Expenseitem>
      <Expenseitem title={expenses[2].title} amount ={expenses[2].amount} date = {expenses[3].date}></Expenseitem>
      <Expenseitem title={expenses[3].title} amount ={expenses[3].amount} date = {expenses[3].date}></Expenseitem>
      <Expenseitem title={expenses[4].title} amount ={expenses[4].amount} date = {expenses[4].date}></Expenseitem>
    </div>
  );
}

export default App;
