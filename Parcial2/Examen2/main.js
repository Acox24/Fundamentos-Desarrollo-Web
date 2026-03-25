function buscarElemento(params) {
  const texto = document.getElementById("texto").value.toLowerCase();

  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const contenido = card.textContent.toLowerCase();

    if (contenido.includes(texto)) {
      card.style.display = "block"; 
    } else {
      card.style.display = "none"; 
    }
  });
}
