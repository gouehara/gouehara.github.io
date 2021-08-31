let i = 0;
const speed = 400;
const txt = `  Hello world :-)`;
const video = document.getElementById("myVideo");

  
const typeWriter = () => {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      video.pause();
    }, 8000);
  }
};

typeWriter();
