const messages = [
    "Hello!",
    "Hi!",
    "Good morning!!",
    "Good Afternoon!",
    "Hey, Heya or Hey there!",
    "How are things?",
    "What’s new?",
    "It’s good to see you",
    "G’day!",
    "Howdy!",
    "How’s it going?",
    "What’s happening?",
    "What’s the story?",
  ];
  
  const funnyCommit = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`\x1b[34m${message}\x1b[89m`);
  }
  
  module.exports = {
    funnyCommit
  };