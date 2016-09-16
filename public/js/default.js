$(function(){
    $("#typed").typed({
        strings: [
         "I am a full stack developer.",
         "Based in London.",
         "Node.js | Java 8 | Swift",
         "React.js | Vue.js | ES6",
         "Git | Jenkins | CI",
         "I like Node.js.",
         "I am learning Golang.",
         "I make iOS Apps.",
         "I blog.",
         "I now take photos."
         ],
        typeSpeed: 45,
        backDelay: 400,
        loop: true,
        contentType: 'html',
        loopCount: false,
        resetCallback: function() { newTyped(); }
    });
});
