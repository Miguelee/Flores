const roseContainer = document.querySelector('.rose-container');

for (let i = 0; i < 10; i++) {
    const rose = document.createElement('div');
    rose.classList.add('rose');

    // Set random position and rotation
    rose.style.left = `${Math.random() * 100}%`;
    rose.style.transform = `rotate(${Math.random() * 360}deg)`;

    roseContainer.appendChild(rose);
}
