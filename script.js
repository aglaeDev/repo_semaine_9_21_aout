document.addEventListener('DOMContentLoaded', function() { //sert à attacher un gestionnaire d'événement au document HTML 
  //section console
  //selectionne le footer
  let footer = document.querySelector('footer');
  //cree la variable cliquenum et la met a 0
  let cliquenum = 0;
 //ajoute a footer la fonction de cliquenum
  footer.addEventListener('click', function() {
    cliquenum++;
    console.log("click num" + cliquenum);
  });

  //section collapse

  // Sélection de l'élément du bouton
  let buttonnav = document.querySelector('.navbar-toggler');

  // Sélection de l'élément à modifier
  let navbarHeader = document.getElementById('navbarHeader');

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

  //card rouge section 

  //pointer la card en entier
  let card = document.querySelector('.card');

  console.log('card')

  // Sélection de l'élément du bouton
  let buttonedit = document.querySelector('.btn-outline-secondary');

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

  //section nucléaire
  
  // Sélection de la navbar en haut
  let navbar = document.querySelector('.navbar');

  // Variables pour suivre l'état
  let isNuclearActivated = false;
  let originalLink = document.querySelector('link[href*="bootstrap.min.css"]').cloneNode();

  // Ajout d'un gestionnaire d'événement au double-clic sur la navbar
  navbar.addEventListener('dblclick', function() {
    if (isNuclearActivated) {
      // Si le mode "nucléaire" est activé, rétablir l'état normal
      document.querySelector('link[href*="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]').remove();
      document.head.appendChild(originalLink);
      isNuclearActivated = false;
    } else {
      // Si le mode "nucléaire" n'est pas activé, désactiver Bootstrap
      document.querySelector('link[href*="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"]').remove();
      isNuclearActivated = true;
    }
  });


  //section view
  // Sélection de tous les boutons "View"
   let viewButtons = document.querySelectorAll('.btn-success');

   // Ajout d'un gestionnaire d'événement pour le passage de la souris (mouseenter)
   viewButtons.forEach(function(button) {
     button.addEventListener('mouseenter', function() {
       // Sélection de la carte parente (élément avec la classe .card) du bouton
       let card = button.closest('.card');
 
       // Ajustement des styles pour réduire la taille et masquer le texte
       card.style.transform = 'scale(0.8)';
       card.querySelector('.card-text').style.display = 'none';
       card.querySelector('img').style.transform = 'scale(0.2)';
     });
 
     // Ajout d'un gestionnaire d'événement pour la sortie de la souris (mouseleave)
     button.addEventListener('mouseleave', function() {
       // Sélection de la carte parente (élément avec la classe .card) du bouton
       let card = button.closest('.card');
 
       // Rétablir les styles d'origine
       card.style.transform = '';
       card.querySelector('.card-text').style.display = '';
       card.querySelector('img').style.transform = '';
     });
   });
});



