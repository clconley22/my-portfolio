var . = document.getElementById('typed');

var typewriter = new Typewriter(typed, {
    loop: true
});

typewriter.typeString('Christina Conley')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Strings can be removed')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>altered!</strong>')
    .pauseFor(2500)
    .start();
