const greetings = [
  "蛇拿九稳",
  "蛇分美满",
  "蛇蛇如意",
  "蛇么攏贺",
  "蛇來福到",
  "蛇全大補",
  "蛇事顺心",
  "蛇寿安康",
  "蛇全大补",
];

let currentIndex = 0;

function updateGreeting() {
  const greetingElement = document.getElementById("rotating-greeting");
  greetingElement.textContent = greetings[currentIndex];
  currentIndex = (currentIndex + 1) % greetings.length;
}

window.addEventListener("load", () => {
  updateGreeting();
  setInterval(updateGreeting, 2000);
});

AFRAME.registerComponent("video-controller", {
  init: function () {
    const target = document.getElementById("target");
    const btn = document.querySelector("button");
    const video = document.getElementById("video");

    target.addEventListener("targetFound", (event) => {
      console.log("target found");
      this.found = true;
      video.play();
    });

    target.addEventListener("targetLost", (event) => {
      console.log("target lost");
      this.found = false;
      video.pause();
    });

    btn.addEventListener("click", (event) => {
      console.log("btn click");
      if (this.found) video.play();
    });
  },
});
