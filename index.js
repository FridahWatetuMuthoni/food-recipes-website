window.onload = function () {
  alert(
    "🔥 Welcome to Savory Kitchen! Get ready to master the art of the perfect Peri-Peri char.",
  );
};

function calculateSpice() {
  const name = document.getElementById("user-name").value;
  const level = parseInt(document.getElementById("heat-level").value);
  const resultDiv = document.getElementById("spice-result");

  if (!name || isNaN(level)) {
    resultDiv.innerHTML =
      "<span style='color: #ff4500;'>Please enter both a name and a level!</span>";
    return;
  }

  let sauce = "";
  if (level <= 3) sauce = "Lemon & Herb (The Beginner)";
  else if (level <= 6) sauce = "Medium Peri-Peri (The Socialite)";
  else if (level <= 8) sauce = "Hot Peri-Peri (The Daredevil)";
  else sauce = "Extra Hot Bird's Eye (The Legend)";

  resultDiv.innerHTML = `
        <div class="result-box">
            <strong>Hey ${name}!</strong><br>
            Your perfect match is: <br>
            <span class="sauce-name">${sauce}</span>
        </div>
    `;
}
