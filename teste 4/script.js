document.getElementById('no').addEventListener('click', function(e) {
    const container = document.body;
    const buttonNo = e.target;
    const maxX = container.clientWidth - buttonNo.clientWidth;
    const maxY = container.clientHeight - buttonNo.clientHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    buttonNo.style.position = 'absolute';
    buttonNo.style.left = `${newX}px`;
    buttonNo.style.top = `${newY}px`;
});

document.getElementById('yes').addEventListener('click', function() {
    document.getElementById('first-screen').style.display = 'none';
    document.getElementById('second-screen').style.display = 'block';
});
