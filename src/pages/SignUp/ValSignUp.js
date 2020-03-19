export default function validateSignUp(password){
    const errors =[]
    if(password.length <8 || password.length > 50){
        errors.push('Password must be between 8 and 50 characters')
    }
    if (password.search(/[a-z]/g) < 0) {
        errors.push("Your password must contain at least one LOWERCASE letter."); 
    }
    if (password.search(/[A-Z]/g) < 0) {
        errors.push("Your password must contain at least one UPPERCASE letter."); 
    }
    if (password.search(/[0-9]/g) < 0) {
        errors.push("Your password must contain at least one digit.");
    }
    if (password.search(/[!@#$%^&*]/g) < 0) {
        errors.push("Your password must contain at least one SPECIAL character.");
    }
    return errors;
}
