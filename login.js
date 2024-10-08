function login(username, password) {
    // Check if both username and password are correct
    return (username === "admin" && password === "12345") 
        ? "Login successful" 
        : "Invalid credentials";
}

// Test the login function
const username = "admin";  // Input your username
const password = "12345";  // Input your password

console.log(login(username, password));
