// Array of quotes and authors
const quotes = [
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney"
    },
    {
      quote: "If life were predictable it would cease to be life, and be without flavor.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    }
  ];
  
  // Function to get a random quote
  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  
  // Function to display the quote on the page
  function displayQuote() {
    const { quote, author } = getRandomQuote();
    document.getElementById('quote').textContent = quote;
    document.getElementById('author').textContent = `- ${author}`;
  }
  
  // Event listener for the "New Quote" button
  document.getElementById('new-quote-btn').addEventListener('click', displayQuote);
  
  // Display initial quote
  displayQuote();
  