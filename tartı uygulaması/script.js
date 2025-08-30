const agirlikInput = document.getElementById("agirlikInput");
const birimSelect = document.getElementById("birimSelect");
const donusturBtn = document.getElementById("donusturBtn");
const sonucDiv = document.getElementById("sonuc");

donusturBtn.addEventListener("click", () => {
  const agirlik = parseFloat(agirlikInput.value);
  const birim = birimSelect.value;

  if (isNaN(agirlik) || agirlik < 0) {
    sonucDiv.textContent = "Lütfen geçerli bir ağırlık girin.";
    return;
  }

  let kg, g, lb, oz;

  switch (birim) {
    case "kg":
      kg = agirlik;
      g = kg * 1000;
      lb = kg * 2.20462;
      oz = kg * 35.274;
      break;
    case "g":
      g = agirlik;
      kg = g / 1000;
      lb = kg * 2.20462;
      oz = kg * 35.274;
      break;
    case "lb":
      lb = agirlik;
      kg = lb / 2.20462;
      g = kg * 1000;
      oz = kg * 35.274;
      break;
    case "oz":
      oz = agirlik;
      kg = oz / 35.274;
      g = kg * 1000;
      lb = kg * 2.20462;
      break;
  }

  sonucDiv.innerHTML = `
    <p>Kilogram: ${kg.toFixed(2)} kg</p>
    <p>Gram: ${g.toFixed(2)} g</p>
    <p>Pound: ${lb.toFixed(2)} lb</p>
    <p>Ons: ${oz.toFixed(2)} oz</p>
  `;
});
