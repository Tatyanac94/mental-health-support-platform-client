// src/utils/errorHandling.js

export const handleError = (error) => {
    const { response } = error;
    if (response) {
        // Server responded with a status other than 200
        console.error('Error response:', response);
        return response.data.message || 'An error occurred. Please try again.';
    } else {
        // Network error or something else
        console.error('Error:', error.message);
        return 'Network error. Please check your connection.';
    }
};
