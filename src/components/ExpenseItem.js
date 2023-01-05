import "./ExpenseItem.css";
function Expenseitem(props) {
    const time = ['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec'];
  const month = props.date.getMonth();
  const monthName = time[month];
 
  const dateName = props.date.getDate();
  const yearName = props.date.getFullYear();

  return (
    <div className="Expense_Main_Container">
      <div className="mini_container">
        <div className="Expense_date">
          <div>{monthName}</div>
          <div>{dateName}th</div>
          <div>{yearName}</div>
        </div>
        <div className="Expense_items">{props.title}</div>
      </div>
      <div className="btn">
      <button className="Expense_price">{props.amount}</button>
    </div>
    </div>
  );
}
export default Expenseitem;
