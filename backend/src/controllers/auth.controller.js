// Signup 
const signup = (req, res) => {
    res.send("Signup route");
}

// Login
const login = (req, res) => {
    res.send("Login route");
}

// Logout
const logout = (req, res) => {
    res.send("Logout route");
}

module.exports = {
    signup,
    login,
    logout
}