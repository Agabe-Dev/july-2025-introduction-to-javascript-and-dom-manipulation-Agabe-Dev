/***********************
 * PART 1: Variables & Conditionals
 ***********************/
// User information variables
const user = {
    name: "Alice Smith",
    age: 28,
    isSubscribed: true,
    preferences: ["coding", "reading", "hiking"]
};

// Conditional check for subscription status
let subscriptionStatus;
if (user.isSubscribed && user.age >= 18) {
    subscriptionStatus = "Active (Adult)";
} else if (user.isSubscribed) {
    subscriptionStatus = "Active (Minor)";
} else {
    subscriptionStatus = "Inactive";
}

/***********************
 * PART 2: Custom Functions
 ***********************/
// Function to format user information
function formatUserInfo(userObj) {
    return `
        <p>Name: ${userObj.name}</p>
        <p>Age: ${userObj.age}</p>
        <p>Status: ${subscriptionStatus}</p>
    `;
}

// Function to calculate square with validation
function calculateSquare(number) {
    if (typeof number !== "number") {
        return "Invalid input";
    }
    return number * number;
}

/***********************
 * PART 3: Loop Examples
 ***********************/
// For loop to create color boxes
const colors = ["#e74c3c", "#2ecc71", "#9b59b6", "#f1c40f", "#34495e"];
const colorContainer = document.getElementById("colorContainer");

for (let i = 0; i < colors.length; i++) {
    const colorBox = document.createElement("div");
    colorBox.style.backgroundColor = colors[i];
    colorBox.style.width = "50px";
    colorBox.style.height = "50px";
    colorContainer.appendChild(colorBox);
}

// While loop for countdown
let count = 5;
console.log("Countdown starting:");
while (count > 0) {
    console.log(count);
    count--;
}

/***********************
 * PART 4: DOM Interactions
 ***********************/
// 1. Update user display section
document.getElementById("userDisplay").innerHTML = formatUserInfo(user);

// 2. Toggle button functionality
document.getElementById("toggleButton").addEventListener("click", () => {
    const userSection = document.getElementById("userSection");
    userSection.style.opacity = userSection.style.opacity === "0.5" ? "1" : "0.5";
});

// 3. Calculate button with input
document.getElementById("calculateButton").addEventListener("click", () => {
    const inputValue = parseFloat(document.getElementById("numberInput").value);
    const result = calculateSquare(inputValue);
    document.getElementById("resultDisplay").textContent = 
        isNaN(result) ? "Please enter a valid number" : `Square: ${result}`;
});

// Additional interaction: Update heading color
document.getElementById("mainHeading").addEventListener("mouseover", function() {
    this.style.color = "#e67e22";
});
document.getElementById("mainHeading").addEventListener("mouseout", function() {
    this.style.color = "";
});
