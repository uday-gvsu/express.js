const express = require('express');
const app = express();
const port = 3000;


const quotes = [
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "It is never too late to be what you might have been. - George Eliot",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Believe you can and you're halfway there. - Theodore Roosevelt",
  "The only way to do great work is to love what you do. - Steve Jobs",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
  "I attribute my success to this: I never gave or took any excuse. - Florence Nightingale",
  "It does not matter how slowly you go as long as you do not stop. - Confucius",
  "The future depends on what you do today. - Mahatma Gandhi",
  "Change your thoughts and you change your world. - Norman Vincent Peale",
  "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson"
];


const getRandomQuoteString = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};


app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static-pages/index.html');
});


app.get('/getQuote', (req, res) => {
  const quoteOfTheDay = getRandomQuoteString();
  res.render('quote', { quote: quoteOfTheDay });
});

app.listen(port, () => {
  console.log(`Application started successfully... and application is running on http://localhost:${port}`);
});
