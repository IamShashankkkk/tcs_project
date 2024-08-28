document.addEventListener('DOMContentLoaded', function() {
    // Parse query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const amount = urlParams.get('amount');
    const consumers = urlParams.get('consumers').split(',');

    // Populate bill details
    document.getElementById('billAmount').textContent = `₹ ${amount}`;
    document.getElementById('totalPayable').textContent = `₹ ${amount}`;
    document.getElementById('cn').textContent = `₹ ${amount}`;

    // Populate consumer details
    const consumerDetails = document.getElementById('consumerDetails');
    consumers.forEach((consumer, index) => {
        const row = consumerDetails.insertRow();
        row.insertCell(0).textContent = consumer;
        row.insertCell(1).textContent = `345234${index + 1}`; // Example bill number
        row.insertCell(2).textContent = `₹ ${amount}`;
    });

    // Handle Pay Now button
    document.getElementById('payNow').addEventListener('click', function() {
        const selectedMode = document.querySelector('input[name="paymentMode"]:checked');
        if (selectedMode) {
            alert(`Processing payment of ₹${amount} via ${selectedMode.value} card`);
            // Here you would typically integrate with a payment gateway
        } else {
            alert('Please select a payment mode');
        }
    });

    // Handle Back to Home button
    document.getElementById('backToHome').addEventListener('click', function() {
        window.location.href = 'home.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // ... (previous code remains the same)

    // Handle Pay Now button
    document.getElementById('payNow').addEventListener('click', function() {
        const selectedMode = document.querySelector('input[name="paymentMode"]:checked');
        if (selectedMode) {
            // Redirect to card_details.html with the payment amount
            window.location.href = `card_details.html?amount=${encodeURIComponent(amount)}`;
        } else {
            alert('Please select a payment mode');
        }
    });

    // ... (rest of the code remains the same)
});