document.getElementById("scrollUp").addEventListener("click", () => {
    window.scrollBy({ top: -window.innerHeight, behavior: "smooth" });
  });
  
  document.getElementById("scrollDown").addEventListener("click", () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  });