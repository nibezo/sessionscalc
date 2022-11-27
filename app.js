let sessions = document.querySelector('.value').value;
document.addEventListener('DOMContentLoaded', setSessions());

function setSessions() {
  document.querySelector('.result').innerHTML =
    ((parseInt(localStorage.getItem('value')) * 25) / 60).toFixed(1) +
    ' hour(s)';
  document.querySelector('.value').value = localStorage.getItem('value');
}

function calculate() {
  sessions = document.querySelector('.value').value;
  if (sessions <= 500 && sessions > 0 && sessions.isInteger()) {
    // Save count of sessions to localStorage
    localStorage.setItem('value', sessions.toString());
    document.querySelector('.result').innerHTML = `${(
      (sessions * 25) /
      60
    ).toFixed(1)} hour(s)`;
  }
}
