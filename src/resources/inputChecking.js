export function isValidPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const isValid = regex.test(password);
    const message = isValid ? "Valid password" : "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one number";
    return { isValid, message };
  }
  

export function isValidInput(input) {
    let isValid = false

    if (input.length > 3 && input.length < 1000) {
        isValid = true
    }
    const message = isValid ? "Valid input" : "Name is empty or too long";
    return { isValid, message };
}

export function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = regex.test(email);
    const message = isValid ? "Valid email" : "Invalid email format";
    return { isValid, message };
  }
  
  