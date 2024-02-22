// Add event listener to all buttons with class 'button'
document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
      // Toggle button background color between gray and green
      button.classList.toggle('bg-gray-300');
      button.classList.toggle('bg-green-500');
    });
  });
  