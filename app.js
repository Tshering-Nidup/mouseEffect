const circle = document.getElementById('circle');
    let mouseX = 0;
    let mouseY = 0;
    let circleX = window.innerWidth / 2; // Start from the center
    let circleY = window.innerHeight / 2;

    // Event listener to track mouse position
    document.addEventListener('mousemove', (event) => {
      mouseX = event.clientX - circle.offsetWidth / 2;
      mouseY = event.clientY - circle.offsetHeight / 2;
    });

    // Animation loop using requestAnimationFrame
    function animate() {
      // Smoothly interpolate the circle's position towards the mouse
      circleX += (mouseX - circleX) * 0.1;
      circleY += (mouseY - circleY) * 0.1;

      // Update the circle's position
      circle.style.left = circleX + 'px';
      circle.style.top = circleY + 'px';

      requestAnimationFrame(animate);
    }

    animate();