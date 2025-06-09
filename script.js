document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 30; i++) {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    document.body.appendChild(heart);
  }
});

const style = document.createElement("style");
style.innerHTML = `
  .heart {
    position: fixed;
    top: -20px;
    font-size: 20px;
    color: #ff4d6d;
    animation: fall linear infinite;
    z-index: 1000;
  }

  @keyframes fall {
    to {
      transform: translateY(100vh);
    }
  }
`;
document.head.appendChild(style);
