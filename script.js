document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.container');

  // Generate the 800 boxes
  for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    container.appendChild(square);
  }

  // Reset the color after 1 second on each square
  const squares = document.querySelectorAll('.square');
  squares.forEach(function(square) {
    square.addEventListener('mouseover', function() {
      const randomColor = generateRandomColor(); // Generate a random color
      square.style.transition = 'none'; // Disable the transition temporarily
      square.style.backgroundColor = randomColor; // Change the background color on hover
      setTimeout(function() {
        square.style.transition = ''; // Re-enable the transition
        square.style.backgroundColor = '#ccc'; // Reset the background color
      }, 1000); // Reset after 1 second
    });
  });

  // Generate a random color
  function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
