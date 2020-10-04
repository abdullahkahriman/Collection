function circleBar(elemId, percent) {
  let elem = document.getElementById(elemId);
  let circles = elem.querySelectorAll("circle");
  let r = circles[0].getAttribute("r");
  let circum = 2 * Math.PI * r;
  let offset = circum - (circum * percent) / 100;
  circles[1].style.setProperty("--circum", circum);
  circles[1].style.setProperty("--offset", offset);
  circles[1].style.setProperty("--color", getRandomColor());
}

circleBar("circle1", 60);
circleBar("circle2", 45);
circleBar("circle3", 80);

function getRandomColor() {
  return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
}
