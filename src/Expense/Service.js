import logger from "../Middleware/logger.js"
import Expense from "../Models/ExpenseModel.js"
import moment from "moment";

// Adding Expenses
const addExpenses = async (data) => {
    try {
        data.date = new Date(data.date).toISOString().split('T')[0];
        const expense = await Expense.create(data)
        if (expense) {
            logger.info("Expense Added", expense)
            return expense
        }
    } catch (error) {
        throw error
    }
}

// Fetching Expense
const getExpenses = async() => {
    try {
        const expenses = await Expense.find().sort({created: -1})
        if (expenses) {
            return expenses
        }
    
    } catch (error) {
        throw error
    }
}

// Deleting Expense
const removeExpense = async(expenseId) => {
    try {
        const data = await Expense.findByIdAndDelete(expenseId)
        if (data) {
            return data
        }
    } catch (error) {
        throw error
    }
}

export default  {addExpenses , getExpenses ,removeExpense}