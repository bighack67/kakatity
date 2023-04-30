function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = Math.random() * window.innerWidth + 'px';
    bubble.style.animationDuration = Math.random() * 3 + 2 + 's';
    bubble.style.opacity = Math.random();
    bubble.style.transform = 'scale(' + (Math.random() + 0.5) + ')';
    document.body.appendChild(bubble);
    setTimeout(() => {
      bubble.remove();
    }, 5000);
  }
  
  function generateBubbles() {
    setInterval(() => {
      createBubble();
    }, Math.random() * 2000);
  }
  
  generateBubbles();
  