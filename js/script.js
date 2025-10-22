// You can add interactivity here later (lightbox, animations, etc.)
console.log("Portfolio loaded!");

document.addEventListener("DOMContentLoaded", function() {
  const artPieces = document.querySelectorAll(".art-piece");
  const modal = document.getElementById("artModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalMaterials = document.getElementById("modalMaterials");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close");

  artPieces.forEach(piece => {
    piece.addEventListener("click", () => {
      const title = piece.dataset.title;
      const materials = piece.dataset.materials;
      const imgSrc = piece.querySelector("img").src;

      modalTitle.textContent = title;
      modalMaterials.textContent = `Materials Used: ${materials}`;
      modalImage.src = imgSrc;
      modal.style.display = "block";
    });
  });

  // Close modal
  closeBtn.addEventListener("click", () => (modal.style.display = "none"));
  window.addEventListener("click", e => {
    if (e.target === modal) modal.style.display = "none";
  });
});
