$(function(){

    initMenu();

    $("#typed").typed({
        strings: [
         "I am a full stack developer.",
         "Java 8 | Node.js | Swift",
         "React.js | Vue.js | ES6",
         "Git | Jenkins | CI",
         "I like Node.js.",
         "I like Spring Boot.",
         "I am learning Golang.",
         "I make iOS Apps.",
         "I blog."
         ],
        typeSpeed: 45,
        backDelay: 400,
        loop: true,
        contentType: 'html',
        loopCount: false,
        resetCallback: function() { newTyped(); }
    });
});
//
// /* Set the width of the side navigation to 250px */
// function openNav() {
//     var openButton = document.getElementById("open-side-nav");
//     document.getElementsByClassName("sidenav")[0].style.width = "250px";
//     // Set button to X
//     openButton.textContent = "Close Menu";
// }
//
// /* Set the width of the side navigation to 0 */
// function closeNav() {
//     var closeButton = document.getElementById("open-side-nav");
//     document.getElementsByClassName("sidenav")[0].style.width = "0";
//     closeButton.textContent = "Open Menu";
// }




function initMenu() {
  var menuClosed = true;
  var menuToggleButton = document.getElementById("side-nav-toggle-button");
  var menu = document.getElementById("side-nav");
  var main = document.getElementById("main");
  var openImage = "images/hamburger.svg";
  var closeImage = "images/close.svg";

  menuToggleButton.addEventListener('click', function() {
    if (menuClosed) {
      open();
    } else {
      close();
    }
  });

  function open() {
    menu.style.width = "250px";
    main.style.marginLeft = "-250px";
    menuClosed = false;
    menuToggleButton.src = closeImage;
  }

  function close() {
    menu.style.width = "0px";
    main.style.marginLeft = "0px";
    menuClosed = true;
    menuToggleButton.src = openImage;
  }

}
