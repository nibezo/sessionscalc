function calculate() {
  let sessions = document.querySelector('.value').value;
  document.querySelector('.result').innerHTML = `${((sessions * 25) / 60).toFixed(1)} hour(s)`;
}
