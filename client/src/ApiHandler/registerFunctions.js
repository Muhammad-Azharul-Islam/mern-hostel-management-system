import Axios from "axios";
import { toast } from 'react-toastify';

const API_URL = process.env.REACT_APP_API_URL;

export const handleRegistration = async (e, studentDetails) => {
    e.preventDefault();
    
    // Check if all required fields are filled
    const requiredFields = ['name', 'dob', 'father', 'phone', 'gender', 'email', 'id', 'enrollno', 'faculty', 'department', 'issuedate', 'expirydate', 'addresstype', 'nationality', 'state', 'district', 'blockno', 'wardno'];
    
    const missingFields = requiredFields.filter(field => {
        const value = studentDetails[field];
        return !value || (typeof value === 'string' && value.trim() === '');
    });
    
    if (missingFields.length > 0) {
        toast.error(`Please fill in all required fields: ${missingFields.join(', ')}`, {
            position: "top-center"
        });
        return;
    }
    
    try {
        const response = await Axios.post(`http://localhost:5000/register/register`, studentDetails);
        
        if (response.data.status === "success") {
            toast.success(response.data.message, {
                position: "top-center"
            });
            // Clear form or redirect
            window.location.reload(false);
        } else {
            toast.error(response.data.message, {
                position: "top-center"
            });
        }
    } catch (error) {
        console.error('Registration error:', error);
        toast.error('Registration failed. Please try again.', {
            position: "top-center"
        });
    }
}