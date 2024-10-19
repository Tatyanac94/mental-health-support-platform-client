export const handleError = (error) => {
    const { response } = error;
    if (response) {
        console.error('Error response:', response);
        return response.data.message || 'An error occurred. Please try again.';
    } else {
        console.error('Error:', error.message);
        return 'Network error. Please check your connection.';
    }
};
