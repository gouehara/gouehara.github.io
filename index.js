let i = 0;
const speed = 400;
const txt = `  Hello world :-)`;
const video = document.getElementById("myVideo");

const typeWriter = () => {
  if (i < txt.length) {
    document.getElementById("demo").textContent += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      video.pause();
    }, 8000);
  }
};

typeWriter();

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Naha&appid=1fb11a8e3963b0a76a4000e12209fecc&lang=ja&units=metric";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const iconCode = data.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
    const txt2 = `那覇市の天気は`;
    let j = 0;

    const typeWriter2 = () => {
      if (j < txt2.length) {
        document.getElementById("demo2").textContent += txt2.charAt(j);
        j++;
        setTimeout(typeWriter2, speed);
      }
    };
    setTimeout(typeWriter2, 7200);
    setTimeout(() => {
      document.getElementById("wicon").src = iconUrl;
    }, 10000);
  });
