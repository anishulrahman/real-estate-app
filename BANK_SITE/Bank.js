// Load stored balances or start fresh
let userBalances = JSON.parse(localStorage.getItem('userBalances') || '{}');

// Save updated balances to localStorage
function saveBalances() {
  localStorage.setItem('userBalances', JSON.stringify(userBalances));
}

// Get username input
function getUsername() {
  return document.getElementById("UsernameInput").value.trim();
}

// Show balance message
function showMessageFor(username) {
  const display = document.getElementById("BalanceDisplay");
  const user = userBalances[username];
  const balance = user ? user.balance : 0;
  display.innerHTML = "Balance: $" + balance.toFixed(2);
}

// Parse and validate amount from prompt
function parseAmountFromPrompt(message) {
  const raw = prompt(message);
  if (raw === null) return null; // Cancelled
  const cleaned = raw.replace(/,/g, '').trim();
  if (cleaned === '') return NaN;
  return parseFloat(cleaned);
}

// Check Balance function
function CheckBal() {
  const username = getUsername();
  showMessageFor(username);
}

// Deposit function
function Deposit() {
  const username = getUsername();
  if (!username) {
    alert("Please enter a username first.");
    return;
  }

  const amount = parseAmountFromPrompt("Enter amount to deposit:");
  if (amount === null) return; // Cancelled
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid positive number for deposit.");
    return;
  }

  if (!userBalances[username]) {
    userBalances[username] = { balance: 0 };
  }

  userBalances[username].balance += amount;
  saveBalances();
  CheckBal();
}

// Withdraw function
function Withdraw() {
  const username = getUsername();
  if (!username) {
    alert("Please enter a username first.");
    return;
  }

  const amount = parseAmountFromPrompt("Enter amount to withdraw:");
  if (amount === null) return; // Cancelled
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid positive number for withdrawal.");
    return;
  }

  if (!userBalances[username]) {
    alert("User does not exist or has zero balance.");
    return;
  }

  if (userBalances[username].balance < amount) {
    alert("Insufficient funds.");
    return;
  }

  userBalances[username].balance -= amount;
  saveBalances();
  CheckBal();
}

// Attach button listeners
document.getElementById("checkBalance").addEventListener("click", CheckBal);
document.getElementById("Deposit").addEventListener("click", Deposit);
document.getElementById("Withdraw").addEventListener("click", Withdraw);

// Display balance on load (if username field already filled)
window.addEventListener('load', () => {
  const username = getUsername();
  showMessageFor(username);
});
