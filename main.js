let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('move');
    navbar.classList.toggle('open-menu');
};
window.onscroll = () => {
    menu.classList.remove('move');
    navbar.classList.remove('open-menu');
}
window.onload = () => {
    let today = new Date().toISOString().split('T')[0];
    document.getElementById("start-date").value = today;
    document.getElementById("return-date").value = new Date(
    Date.now() + 7 * 8640000
    )
    .toISOString()
    .split("T")[0];
};

const animate = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '1500',
    delay : 400,
})

animate.reveal('.nav,.heading');
animate.reveal('.home-img img', {origin: 'right'});
animate.reveal('.home-buttons', {origin: 'bottom'});
animate.reveal('.trend-box, .rental-box, .team-box,.t-box,.newsletter', {interval: 100});

animate.reveal('.annonce-container, .top-section, .gallery,.gallery-main,.infos', {interval: 100});
animate.reveal('.footer-container', {origin: 'bottom'});

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (searchInput.style.display === "block") {
        searchInput.style.display = "none";
    } else {
        searchInput.style.display = "block";
        searchInput.focus();
    }
});

// filtre en live
searchInput.addEventListener("input", function () {
    let input = searchInput.value.toLowerCase();
    let cars = document.querySelectorAll(".rental-box");

    cars.forEach(car => {
        let carName = car.querySelector("h2").textContent.toLowerCase();
        car.style.display = carName.includes(input) ? "block" : "none";
    });
});


// Fermer la barre de recherche si clic en dehors
document.addEventListener("click", function (e) {
    if (e.target !== searchBtn && e.target !== searchInput) {
        searchInput.style.display = "none";
    }
});

// Fermer la barre de recherche avec la touche Échap
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        searchInput.style.display = "none";
    }       
});
// Empêcher la soumission du formulaire de recherche
searchInput.form.addEventListener("submit", function (e) {
    e.preventDefault();
}

);  
// Redirection vers la page de contact
document.querySelector('.contact-icon').addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'contact.html';
});


   const accordions = document.querySelectorAll('.accordion');

accordions.forEach(acc => {
  const header = acc.querySelector('.accordion-header');
  const content = acc.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    // Fermer tous les autres accordéons
    accordions.forEach(a => {
      const c = a.querySelector('.accordion-content');
      if (a !== acc) {
        a.classList.remove('active');
        c.style.height = 0;
      }
    });

    // Ouvrir ou fermer l’accordéon cliqué
    acc.classList.toggle('active');

    if (acc.classList.contains('active')) {
      content.style.height = content.scrollHeight + "px";
    } else {
      content.style.height = 0;
    }
  });
});


const form = document.getElementById('newsletter-form');
const message = document.getElementById('newsletter-message');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    const email = document.getElementById('email').value.trim();

    if(email) {
        message.textContent = `Merci pour votre inscription, ${email} !`;
        message.style.color = 'green';
        form.reset(); // vide le champ email
    } else {
        message.textContent = "Veuillez entrer un email valide.";
        message.style.color = 'red';
    }
});
