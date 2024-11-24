document.addEventListener("DOMContentLoaded", () => {
  const changeColorBtn = document.getElementById("changeColorBtn");
  const newFactBtn = document.getElementById("newFactBtn");
  const content = document.querySelector(".content");
  const factDisplay = document.getElementById("factDisplay");

  // Array of colors for random selection
  const colors = ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEEAD"];

  // Array of fun facts
  const facts = [
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly good to eat.",
    "A day on Venus is longer than its year. Venus takes 243 Earth days to rotate on its axis but only 225 Earth days to orbit the Sun.",
    "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after just 38 minutes.",
    "The first oranges weren't orange! The original oranges from Southeast Asia were actually green.",
    "A group of flamingos is called a 'flamboyance'.",
    "Bananas are berries, but strawberries aren't.",
    "The average person spends 6 months of their lifetime waiting for red lights to turn green.",
  ];

  // Function to get random color from array
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  // Function to get random fact from array
  const getRandomFact = () => {
    return facts[Math.floor(Math.random() * facts.length)];
  };

  // Add click event listener to color button
  changeColorBtn.addEventListener("click", () => {
    content.style.backgroundColor = getRandomColor();
  });

  // Add click event listener to fact button
  newFactBtn.addEventListener("click", () => {
    factDisplay.textContent = getRandomFact();
  });

  // Display initial random fact
  factDisplay.textContent = getRandomFact();

  // Initial greeting in console
  console.log("Fun Fact Application loaded successfully!");
});
