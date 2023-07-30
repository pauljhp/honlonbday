function checkPassword() {
  // Replace the following variables with your own puzzle and password
  const puzzle = "What has a head and a tail but no body?";
  const password = "8132025";

  const userInput = document.getElementById("password-input").value.toLowerCase();

  if (userInput === password) {
    const choice = prompt(`Congratulations! You have guessed the password. Please choose between option 1 or option 2 by typing the corresponding number:\n\n1. Collect Coupon A\n2. Collect Coupon B. Goode luck!`);

    if (choice === "1") {
      window.location.href = "https://pauljhp.github.io/honlon_coupon1/";
    } else if (choice === "2") {
      window.location.href = "https://pauljhp.github.io/honlon_coupon2/";
    } else {
      alert("Invalid choice. Please choose either option 1 or option 2.");
    }
  } else {
    alert("Wrong password. Please try again.");
  }
}