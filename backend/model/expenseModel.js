import mongoose from "mongoose";


// Define the Payment Request Schema
const RequestSchema = new mongoose.Schema({
    receiver: { type: String, required: true },
    amount: { type: Number, required: true }
});
  
// Define the Payment Data Schema
const ExpenseSchema = new mongoose.Schema({
sender: { type: String, required: true },
requests: [RequestSchema]
});
  
// Create the Payment Data Model
export const Expense = mongoose.model('PaymentData', ExpenseSchema);