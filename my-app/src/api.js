import axios from 'axios';

// Set up the base URL for your backend API
const apiClient = axios.create({
    baseURL: 'http://localhost:5000/api', // Your backend URL
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 5000, // Optional: Set a timeout for requests
});

// Define your API functions
export const getGreeting = async () => {
    try {
        const response = await apiClient.get('/greet');
        return response.data;
    } catch (error) {
        console.error('Error fetching greeting:', error);
        throw error;
    }
};

export const createExpense = async (expenseData) => {
    try {
        const response = await apiClient.post('/expenses', expenseData);
        return response.data;
    } catch (error) {
        console.error('Error creating expense:', error);
        throw error;
    }
};

const fetchUserData = async (userId) => {
    try {
        const response = await axios.get('http://localhost:5000/api/users', {
            params: {
                id: userId
            }
        });
        console.log('User Data:', response.data);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
};

// Add more API functions as needed
