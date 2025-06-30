// Remove 'no-js' if JavaScript is running
document.documentElement.classList.remove("no-js");


// ====== Splash Screen ======
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.remove("no-js");

  setTimeout(() => {
    const splash = document.getElementById("splash-screen");
    const main = document.getElementById("main-content");

    if (splash && main) {
      splash.classList.add("fade-out");
      setTimeout(() => {
        splash.style.display = "none";
        main.style.display = "block";
      }, 800);
    }
  }, 800);
});

// ====== Hamburger Menu ======
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close menu when any link is clicked
  document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// typing text
  const words = [
    "C Programming (PPS)",
    "OOPs Using C++",
    "Data Structures and Algorithms",
    "Design and Analysis of Algorithms",
    "Python Programming",
    "IT Workshop",
    "Web Designing",
    "Computer Organization and Architecture",
    "Discrete Mathematics",
    "Theory of Computation",
    "Digital Logic Design",
    "Artificial Intelligence",
    "Machine Learning",
    "Algorithms",
    "Operating Systems",
    "Computer Networks",
    "Database Management Systems",
    "Compiler Design",
    "Software Engineering",
    "Aptitude",
    "BEU (Computer Science)",
    "GATE PYQ's"
  ];

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let delay = 100;

  function type() {
    const typingElement = document.getElementById("typing");
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      typingElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentWord.length) {
        isDeleting = true;
        delay = 1500; // Wait before deleting
      } else {
        delay = 100; // Typing speed
      }
    } else {
      typingElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 500; // Pause before next word
      } else {
        delay = 50; // Deleting speed
      }
    }

    setTimeout(type, delay);
  }

  document.addEventListener("DOMContentLoaded", type);



// ====== Back to Top Button ======
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// notes section
//  document.addEventListener('DOMContentLoaded', function() {
//         const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
//         const menu = document.querySelector('.menu');
        
//         mobileMenuBtn.addEventListener('click', function() {
//             menu.classList.toggle('active');
//         });
//     });

document.querySelectorAll(".subject-card").forEach((details) => {
  details.addEventListener("toggle", function () {
    if (details.open) {
      document.querySelectorAll(".subject-card").forEach((other) => {
        if (other !== details) other.open = false;
      });
    }
  });
});




//course index

 function showTab(tabId) {
    const tabs = document.querySelectorAll(".course-tab-content");
    const buttons = document.querySelectorAll(".tab-button");

    tabs.forEach(tab => tab.classList.remove("active"));
    buttons.forEach(btn => btn.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
  }
  


//search bar
    function filterCourseCards() {
    const input = document.getElementById("courseSearchInput").value.toLowerCase();
    const allCourseRows = document.querySelectorAll(".course-index-row");

    allCourseRows.forEach(row => {
      const cards = row.querySelectorAll(".course-index-card");

      let rowHasVisibleCard = false;

      cards.forEach(card => {
        const text = card.querySelector("span").textContent.toLowerCase();

        if (text.includes(input)) {
          card.style.display = "";
          rowHasVisibleCard = true;
        } else {
          card.style.display = "none";
        }
      });

      // hide the entire subject row if no cards match
      const subjectRow = row.closest(".course-subject-row");
      subjectRow.style.display = rowHasVisibleCard ? "" : "none";
    });
  }
  