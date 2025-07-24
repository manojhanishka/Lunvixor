



  //Preloader

  // Hide preloader after window is fully loaded
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.opacity = '0';
    setTimeout(() => preloader.style.display = 'none', 300);
  }
});





// Offline Detection
  const offlineWarning = document.getElementById("offline-warning");

  function updateOnlineStatus() {
    if (navigator.onLine) {
      offlineWarning.style.display = "none";
    } else {
      offlineWarning.style.display = "block";
    }
  }

  window.addEventListener("online", updateOnlineStatus);
  window.addEventListener("offline", updateOnlineStatus);

  // Initial check
  updateOnlineStatus();





  
  // Set dynamic year
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
});



  