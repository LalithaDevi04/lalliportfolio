function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
  const words = ["Lalitha","a web Developer",  "a Learner"];
let wordIndex = 0;
let charIndex = 0;
const textEl = document.getElementById("changing-text");
const cursorEl = document.querySelector(".cursor");

function type() {
  if (charIndex < words[wordIndex].length) {
    textEl.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    textEl.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, 1000);
});


  