



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
   window.addEventListener('offline', () => {
    document.getElementById('offline-warning').style.display = 'flex';
  });

  window.addEventListener('online', () => {
    document.getElementById('offline-warning').style.display = 'none';
  });





  
//   // Set dynamic year
// document.addEventListener("DOMContentLoaded", () => {
//   document.getElementById("year").textContent = new Date().getFullYear();
// });



  