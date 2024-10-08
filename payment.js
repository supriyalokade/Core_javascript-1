function getProcessingFee(paymentMethod) {
    let fee;

    // Use switch to determine the fee based on payment method
    switch (paymentMethod.toLowerCase()) {
        case "credit":
            fee = "2%";
            break;
        case "debit":
            fee = "1.5%";
            break;
        case "paypal":
            fee = "3%";
            break;
        default:
            fee = "Invalid payment method";
            break;
    }

    return `The processing fee for ${paymentMethod} is ${fee}.`;
}

// Test the getProcessingFee function
const paymentMethod = "credit";  // Input your payment method: "credit", "debit", "paypal"
console.log(getProcessingFee(paymentMethod));
