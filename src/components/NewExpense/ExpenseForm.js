import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const inputChangeHandler = (inputType, event) => {
    if (inputType === "title") {
      setEnteredTitle(event.target.value);
    } else if (inputType === "amount") {
      setEnteredAmount(event.target.value);
    } else {
      setEnteredDate(event.target.value);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control"></div>
        <label>Title</label>
        <input
          type="text"
          value={enteredTitle}
          onChange={(event) => inputChangeHandler("title", event)}
          //this is how we can pass args to functions in event handlers
        />

        <div className="new-expense__control"></div>
        <label>Amount</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={enteredAmount}
          onChange={(event) => inputChangeHandler("amount", event)}
        />

        <div className="new-expense__control"></div>
        <label>Date</label>
        <input
          type="date"
          min="2019-01-01"
          max="2022-12-31"
          value={enteredDate}
          onChange={(event) => inputChangeHandler("date", event)}
        />

        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
