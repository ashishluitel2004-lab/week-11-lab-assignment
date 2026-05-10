/**
 * Week 11: DOM and Dynamic Event Handling
 * Objective: Toggle Dark Mode using classList.toggle
 */

// 1. Select the button element by its ID
const themeToggle = document.querySelector('#theme-toggle');

// 2. Add a 'click' event listener to the button
themeToggle.addEventListener('click', function() {
    
    // 3. Toggle the 'dark-mode' class on the <body> tag
    // If the class exists, it removes it. If it doesn't, it adds it.
    document.body.classList.toggle('dark-mode');

    // 4. Verification: Log the current state to the Console
    // This helps you prove the code is running for your screenshot!
    const isDarkMode = document.body.classList.contains('dark-mode');
    console.log("Dark Mode Active: " + isDarkMode);
    
    // Optional: Change the button text dynamically
    if (isDarkMode) {
        themeToggle.textContent = "Switch to Light Mode";
    } else {
        themeToggle.textContent = "Switch Theme";
    }
});
