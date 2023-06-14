// Array of quotes and authors
const quotes = [
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela",
      category: "Inspiration"
    },
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
      category: "Motivation"
    },
    // Add more quotes with respective categories...
  ];
  
  
  // Function to get a random quote
  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  
  // Function to display the quote on the page
  function displayQuote() {
    const selectedCategory = document.getElementById('category').value;
    let filteredQuotes = quotes;
  
    if (selectedCategory !== 'All') {
      filteredQuotes = quotes.filter(quote => quote.category === selectedCategory);
    }
  
    if (filteredQuotes.length === 0) {
      document.getElementById('quote').textContent = 'No quotes found in this category.';
      document.getElementById('author').textContent = '';
    } else {
      const { quote, author } = getRandomQuote(filteredQuotes);
      document.getElementById('quote').textContent = quote;
      document.getElementById('author').textContent = `- ${author}`;
    }
  }
  
  // Event listener for the "New Quote" button
  document.getElementById('new-quote-btn').addEventListener('click', displayQuote);
  document.getElementById('submit-btn').addEventListener('click', submitQuote);

  function submitQuote() {
    const newQuote = document.getElementById('new-quote').value;
    const newAuthor = document.getElementById('new-author').value;
  
    // Validate inputs
    if (newQuote.trim() === '' || newAuthor.trim() === '') {
      alert('Please enter both a quote and an author name.');
      return;
    }
  
    // Add the new quote to the quotes array
    quotes.push({
      quote: newQuote,
      author: newAuthor,
      category: 'User Contribution'
    });
  
    // Clear the form inputs
    document.getElementById('new-quote').value = '';
    document.getElementById('new-author').value = '';
  
    alert('Thank you for your contribution! Your quote will be added.');
  
    // Display the newly added quote
    displayQuote();
  }
  
  // Display initial quote
  displayQuote();
  