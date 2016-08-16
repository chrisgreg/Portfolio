$(function(){

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
