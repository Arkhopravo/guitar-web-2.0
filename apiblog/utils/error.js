export const errorHandler = (statusCode, message) => {
    const error = new Error(message); // Provide the message to the Error object
    error.statusCode = statusCode; // Set the status code
    return error;
};
