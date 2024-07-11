import { auth } from '../firebase.js';
import { Expense } from '../model/expenseModel.js';

export const addexpense = async(req,res) => {
    try {
        const paymentRequests = req.body;
    
        if (typeof paymentRequests !== 'object' || Array.isArray(paymentRequests)) {
        return res.status(400).json({ error: 'Invalid data format' });
        }
    
        const currentUser = auth.currentUser;
        if (!currentUser) {
            res.status(401).json({
                status: "error",
                message: "No user is currently logged in"
            });
            return;
        }
        
    
        const paymentData = {
            sender: currentUser.email,
            requests: Object.keys(paymentRequests).map(receiver => ({
              receiver: receiver,
              amount: paymentRequests[receiver]
            }))
          };
    
        // Here, you would typically save these payment requests to your database
        console.log('Payment Requests:', paymentData);
        try {
            const newExpense = new Expense(paymentData);
            await newExpense.save();
            res.status(200).json({ message: 'Payment requests processed and saved successfully', data: newExpense });
          } catch (error) {
            res.status(500).json({ error: 'Failed to save payment requests' });
          }

    } catch (error) {
        console.error(error);
        res.status(401).json({
            status: "error",
            message: "Failed to store data"
        });
    }
}