  const els = document.getElementsByClassName("el")


  window.addEventListener("scroll", function() {

  const vh = window.innerHeight

    for (let i=0; i<els.length; i++) {

      const y = els[i].getBoundingClientRect().y

      if (y < vh * 0.9) {
        els[i].classList.remove("opacity-0")
      }
    }
  })

  document.addEventListener("DOMContentLoaded", function() {
    const text = document.querySelector('.backimage');
    
    setTimeout(() => {
      text.style.opacity = 1;
    }, 1000);
  });


  

document.addEventListener("DOMContentLoaded", function() {
  const textElements = document.querySelectorAll('.hidden-text');
  
  setTimeout(() => {
    textElements.forEach(text => {
      text.style.opacity = 1;
    });
  }, 100); 
});



function toggleSubcategory(subcatId) {
  const subcategoryList = document.getElementById(subcatId);
  if (subcategoryList.style.display === 'none') {
    subcategoryList.style.display = 'block';
  } else {
    subcategoryList.style.display = 'none';
  }
}



