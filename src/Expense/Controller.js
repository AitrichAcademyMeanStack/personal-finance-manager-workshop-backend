// import asyncHandler from "../Utils/asyncHandler.js";
// import expenseService from "./Service.js"


// const addExpense = asyncHandler ( async (req , res) => {
//     const expense = req.body;
//     const result = await expenseService.addExpenses(expense)
//     res.status(201).json(result)

// })


// const fetchExpense = asyncHandler (async (req , res) => {
//     const myExpense = await expenseService.getExpenses()
//     res.status(200).json(myExpense)
// })


// const deleteExpense = asyncHandler( async (req , res) => {
//     const id = req.params.expenseId;
//     await expenseService.removeExpense(id)
//     res.status(200).json({message: "Expense Removed Successfully"})
// })

// export default {addExpense , fetchExpense , deleteExpense}

import asyncHandler from "../Utils/asyncHandler.js";
import expenseService from "./Service.js"


const addExpense = asyncHandler(async (req, res) => {
    const userId = req.user.id; // Assuming you have a user object in req after authentication
    const expenseData = req.body;
    try {
        const expense = await expenseService.addExpenses(userId, expenseData);
        res.status(201).json(expense);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


const fetchExpense = asyncHandler (async (req , res) => {
    const myExpense = await expenseService.getExpenses()
    res.status(200).json(myExpense)
})


const deleteExpense = asyncHandler( async (req , res) => {
    const id = req.params.expenseId;
    await expenseService.removeExpense(id)
    res.status(200).json({message: "Expense Removed Successfully"})
})

export default {addExpense , fetchExpense , deleteExpense}