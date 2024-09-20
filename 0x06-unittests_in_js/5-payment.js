function sendPaymentRequestToAPI(totalAmount, totalShipping) {
    const total = totalAmount + totalShipping;
    console.log(`The total is: ${total}`);
}

module.exports = sendPaymentRequestToAPI;

