document.addEventListener('DOMContentLoaded', function() { //sert à attacher un gestionnaire d'événement au document HTML 
  const footer = document.querySelector('footer');
  let cliquenum = 0;
  const buttonnav = document.querySelector('.navbar-toggler');
  const navbarHeader = document.getElementById('navbarHeader');
  const cards = document.querySelectorAll('.card');
  const navbar = document.querySelector('.navbar');
  let isNuclearActivated = false;
  const originalLink = document.querySelector('link[href*="bootstrap.min.css"]').cloneNode();
  const viewButtons = document.querySelectorAll('.btn-success');
  const moveButton = document.querySelector('.btn-secondary');
  const cardsContainer = document.querySelectorAll('.row');


  //ajoute a footer la fonction de cliquenum
  footer.addEventListener('click', function() {
    cliquenum++;
    console.log("click num" + cliquenum);
  });


  // Ajout d'un gestionnaire d'événement au clic sur le bouton
  buttonnav.addEventListener('click', function() {
    // Vérification de la présence de la classe 'collapse'
    if (navbarHeader.classList.contains('collapse')) {
      // Si la classe est présente, la supprimer
      navbarHeader.classList.remove('collapse');
    } else {
      // Sinon, la rajouter
      navbarHeader.classList.add('collapse');
    }
  });  


  Array.from(cards).forEach(function(card) {
    // Sélection de l'élément du bouton
    let buttonedit = card.querySelector('.btn-outline-secondary');
    
    // Ajout d'un gestionnaire d'événement au clic sur le bouton
    buttonedit.addEventListener('click', function() {
      //change la couleur du text 
      if (card.style.color === '' || card.style.color === 'initial') {
        card.style.color = '#df2935'; // Mettre en rouge
      } else if (card.style.color === 'green') {
        card.style.color = ''; // Revenir à la couleur par défaut
      } else {
        card.style.color = 'green'; // Mettre en vert
      }
    });

  })
  

  // Ajout d'un gestionnaire d'événement au double-clic sur la navbar
  navbar.addEventListener('dblclick', function() {
    if (isNuclearActivated) {
      // Si le mode "nucléaire" est activé, rétablir l'état normal
      document.querySelector("link[rel='stylesheet']");
      document.head.appendChild(originalLink);
      isNuclearActivated = false;
    } else {
      // Si le mode "nucléaire" n'est pas activé, désactiver Bootstrap
      document.querySelector('link[href*="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]').remove();
      isNuclearActivated = true;
    }
  });

  function toggleCard(card) {

    // Ajustement des styles pour réduire la taille et masquer le texte
    card.querySelector('.card-text').classList.toggle('collapse');

    if (!card.querySelector('.card-text').classList.contains('collapse')) {
      card.querySelector('img').style.transform = 'scale(1)';    
    } else {
      card.querySelector('img').style.transform = 'scale(0.2)';
    }
  }

  // Ajout d'un gestionnaire d'événement pour le passage de la souris (mouseenter)
  Array.from(viewButtons).forEach(function(button) {
    // console.log("button", button);  

    // Sélection de la carte parente (élément avec la classe .card) du bouton
    const cardEl = button.closest('.card');

    button.addEventListener('mouseenter', function() {
      toggleCard(cardEl);
    });
  
  });

  moveButton.addEventListener('click', function() {
    let lastCard = cardsContainer[1].lastElementChild;
      
    cardsContainer[1].insertBefore(lastCard, cardsContainer[1].firstElementChild);
  });

  // moveButton.addEventListener('click', function() {
  //   let firstCard = cardsContainer[1].lastElementChild;
      
  //   cardsContainer[1].insertafter(firstCard, cardsContainer[1].firstElementChild);
  // });
});



