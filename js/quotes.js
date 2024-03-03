const quotes = [
  {
    quote: "Gotta catch 'em all!",
    author: "Ash Ketchum",
  },
  {
    quote: "Pokemon around the world wait for you!",
    author: "Professor Oak",
  },
  {
    quote:
      "To protect the world from devastation, to unite all peoples within our nation, to denounce the evils of truth and love, to extend our reach to the stars above!",
    author: "Team Rocket Jessi, James & Meowth",
  },
  {
    quote:
      "A caterpie may change into a buterfree, but the heart that beats inside remains the same",
    author: "Brock",
  },
  {
    quote:
      "There's no sense in going out of your way to get somebody to like you.",
    author: "Ash Ketchum",
  },
  {
    quote:
      "Give us your pokemon or prepare for a fight, we're sneaky and sly, day or night!",
    author: "Team Rocket Meowth",
  },
  {
    quote:
      "Hello there! Welcome to the world of Pokémon! My name is Oak! People call me the Pokémon Prof! First, what is your name?",
    author: "Professor Oak",
  },
  {
    quote: "Pikachu, thunderbolt attack!",
    author: "Ash Ketchum",
  },
  {
    quote: "Pika pika!",
    author: "Pikachu",
  },
  {
    quote:
      "Do you see that ball on the table? It's called a Poké Ball. It holds a Pokémon inside. You may have it! Go on, take it!",
    author: "Professor Oak",
  },
  {
    quote: "My name is...Tom Ato!",
    author: "Ash Ketchum",
  },
  {
    quote: "If I want your opinion I'LL ASK FOR IT!",
    author: "Misty",
  },
  {
    quote: "Sometimes I look at that Psyduck's face and I get a headache.",
    author: "Misty",
  },
  {
    quote:
      "When you have lemons, you make lemonade; and when you have rice, you make rice balls.",
    author: "Brock",
  },
  {
    quote:
      "Well, Ash, ya snooze ya lose, and you're behind right from the start!",
    author: "Gary Oak",
  },
  {
    quote: "Gary, Gary, he's our man! If he can't do it no one can!",
    author: "Gary's Cheerleaders",
  },
  {
    quote: "We're blasting off again!",
    author: "Team Rocket Jessi, James & Meowth",
  },
]; //9개

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// search for nth quote in array 'quotes'
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `"${todaysQuote.quote}"`;
author.innerText = `- ${todaysQuote.author}`;
