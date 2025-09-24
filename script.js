// Show alert when form is submitted
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});
 <script>
    function flipCard(card) {
      card.classList.toggle("flipped");
    }
  </script>