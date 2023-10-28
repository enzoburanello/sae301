
const svgElements = document.querySelectorAll('.CardIngredients__svg');

svgElements.forEach(element => {
    
  element.addEventListener('mouseover', function() {
    if (!this.classList.contains('active')) {
      this.src = 'images/etoile-hover.svg'; 
    }
  });

  element.addEventListener('mouseout', function() {
    if (!this.classList.contains('active')) {
      this.src = 'images/etoile.svg'; 
    }
  });

  element.addEventListener('click', function() {
    if (this.classList.contains('active')) {
      this.src = 'images/etoile.svg';
      this.classList.remove('active');
    } else {
      this.src = 'images/etoile-hover.svg';
      this.classList.add('active');
    }
  });
});
