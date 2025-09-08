document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");

  document.getElementById('menuToggle').onclick = function() {
    document.getElementById('sidebar').classList.toggle('active');
  };

  // Optional: close sidebar when clicking outside
  document.addEventListener("click", (e) => {
    if (
      sidebar.classList.contains("active") &&
      !sidebar.contains(e.target) &&
      e.target !== menuToggle
    ) {
      sidebar.classList.remove("active");
    }
  });
});
