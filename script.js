// Open modal
function openModal(name) {
  document.getElementById(name + 'Modal').style.display = 'block';
}

// Close modal
function closeModal(name) {
  document.getElementById(name + 'Modal').style.display = 'none';
}

// Close modal on outside click
window.onclick = function(event) {
  document.querySelectorAll('.modal').forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
}

// Contact form alert
document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message sent successfully!");
});