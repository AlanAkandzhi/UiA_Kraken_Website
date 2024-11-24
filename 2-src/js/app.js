document.addEventListener("DOMContentLoaded", function () {

const typedTextElement = document.querySelector(".typed-text");
const textToType = "WE ARE UIA KRAKEN";

if (typedTextElement) {
let index = 0;

function typeText() {
if (index < textToType.length) {
    typedTextElement.textContent += textToType.charAt(index);
    index++;
    setTimeout(typeText, 100); 
    } else {
              
    typedTextElement.classList.remove('typing-cursor');
          }
      }
typedTextElement.textContent = '';
    typeText();
  }
});

window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
      navbar.style.background = "rgba(0, 0, 0, 0.9)"; 
  } else {
      navbar.style.background = "rgba(0, 0, 0, 0.6)";
  }
});
 

window.addEventListener("scroll", function() {
    const backToTopButton = document.getElementById("backToTop");
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

document.getElementById("backToTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
    
    function showTeam(teamId) {
        document.querySelectorAll('.team-section').forEach(section => {
            section.classList.add('hidden');
        });
        const teamSection = document.getElementById(`${teamId}-gallery`);
        if (teamSection) {
            teamSection.classList.remove('hidden');
        }
    }

    document.querySelectorAll('.teams-buttons button').forEach(button => {
    button.addEventListener('click', (event) => {
            const teamId = event.target.id.replace('-button', '');
            showTeam(teamId);
        });
    });
});


function showUpcoming()
 {
document.getElementById('upcoming-section').classList.remove('hidden');
document.getElementById('past-section').classList.add('hidden');
document.getElementById('upcoming-button').classList.add('active');
document.getElementById('past-button').classList.remove('active');
}

function showPast() 
{
document.getElementById('past-section').classList.remove('hidden');
document.getElementById('upcoming-section').classList.add('hidden');
document.getElementById('past-button').classList.add('active');
document.getElementById('upcoming-button').classList.remove('active');
}

function openModal(imageElement) {
    const modal = document.getElementById("imageModal");
    const fullImage = document.getElementById("fullImage");

    fullImage.src = imageElement.src;

    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("imageModal");

    modal.style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById("imageModal");
    if (event.target === modal) {
        closeModal();
    }
};









