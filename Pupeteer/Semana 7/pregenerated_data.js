// config.js
// Define your list of elements
const list = ['es', 'en', 'pt', 'fr', 'it'];

// Function to get a random element from the list
function getRandomElement() {
  const randomIndex = Math.floor(Math.random() * list.length);
  return arr[randomIndex];
}

// Export the getRandomElement function
module.exports = {
    empty_space: '', //could be ' '
    random: getRandomElement,
};