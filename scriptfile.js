document.getElementById('tossButton').addEventListener('click', function() {
    // Simulate a coin toss
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    
    // Display the result
    document.getElementById('result').textContent = result;
});
