  function toggleSidebar(show) {
    const sidebar = document.getElementById("mobileSidebar");
    const overlay = document.getElementById("overlay");

    if (show) {
      sidebar.classList.add("open");
      overlay.classList.add("show");
       document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
      
    } else {
      sidebar.classList.remove("open");
      overlay.classList.remove("show");
        // document.body.style.overflow = ''; // unlock scroll
        
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    }
  }



  document.addEventListener('DOMContentLoaded', () => {
 
  document.querySelectorAll("#mobileSidebar a").forEach(link => {
    link.addEventListener("click", () => {
      toggleSidebar(false);
    });
  });
});


  // Auto-close sidebar if resized to desktop
window.addEventListener("resize", () => {
  if (window.innerWidth >= 992) {  // Bootstrap lg breakpoint
    toggleSidebar(false);
  }
});


   const btn1 = document.getElementById('menubar-button-1');
  const btn2 = document.getElementById('menubar-button-2');

  function addHover() {
    btn1.classList.add('hovered');
    btn2.classList.add('hovered');
  }

  function removeHover() {
    btn1.classList.remove('hovered');
    btn2.classList.remove('hovered');
  }

  btn1.addEventListener('mouseenter', addHover);
  btn2.addEventListener('mouseenter', addHover);
  btn1.addEventListener('mouseleave', removeHover);
  btn2.addEventListener('mouseleave', removeHover);