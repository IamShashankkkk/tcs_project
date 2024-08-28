// function updateTotalAmount() {
//     let total = 0;
//     const rows = document.querySelectorAll('tbody tr');

//     rows.forEach(row => {
//         const checkbox = row.querySelector('.payable-checkbox');
//         const payableAmount = parseFloat(row.querySelector('.payable-amount').textContent.replace(/,/g, ''));

//         if (checkbox.checked && !isNaN(payableAmount)) {
//             total += payableAmount;
//         }
//     });

//     document.getElementById('total-amount').textContent = total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// }

// // Attach event listeners to checkboxes and `payable-amount` cells
// document.querySelectorAll('.payable-checkbox').forEach(checkbox => {
//     checkbox.addEventListener('change', updateTotalAmount);
// });

// // If you are updating the payable amounts dynamically, make sure to call updateTotalAmount after the update
// document.querySelectorAll('.payable-amount').forEach(cell => {
//     cell.addEventListener('input', updateTotalAmount);
// });

// // Call updateTotalAmount initially to set the correct total
// updateTotalAmount();


function updateTotalAmount() {
    let total = 0;
    const rows = document.querySelectorAll('tbody tr');

    rows.forEach(row => {
        const checkbox = row.querySelector('.payable-checkbox');
        const payableAmount = parseFloat(row.querySelector('.payable-amount').textContent.replace(/,/g, ''));

        if (checkbox.checked && !isNaN(payableAmount)) {
            total += payableAmount;
        }
    });

    document.getElementById('total-amount').textContent = total.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function redirectToPayment() {
    const totalAmount = document.getElementById('total-amount').textContent;
    const selectedConsumers = Array.from(document.querySelectorAll('.payable-checkbox:checked'))
        .map(checkbox => checkbox.closest('tr').querySelector('td:first-child').textContent);
    
    if (selectedConsumers.length === 0) {
        alert('Please select at least one bill to pay.');
        return;
    }

    const paymentUrl = `bill_payment.html?amount=${encodeURIComponent(totalAmount)}&consumers=${encodeURIComponent(selectedConsumers.join(','))}`;
    window.location.href = paymentUrl;
}

document.addEventListener('DOMContentLoaded', function() {
    // Attach event listeners to checkboxes and `payable-amount` cells
    document.querySelectorAll('.payable-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', updateTotalAmount);
    });

    // If you are updating the payable amounts dynamically, make sure to call updateTotalAmount after the update
    document.querySelectorAll('.payable-amount').forEach(cell => {
        cell.addEventListener('input', updateTotalAmount);
    });

    // Add event listener for the "Proceed to Pay" button
    const proceedButton = document.querySelector('.proceed-btn');
    if (proceedButton) {
        proceedButton.addEventListener('click', redirectToPayment);
    }

    // Call updateTotalAmount initially to set the correct total
    updateTotalAmount();
});