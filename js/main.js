let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2000)
  .typeString('Málaga la mejor ciudad')
  .pauseFor(200)
  .deleteChars(10)
  .start();