document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
    // You can add further processing here
});

document.getElementById('studentForm').addEventListener('reset', function() {
    alert('Form reset!');
});
