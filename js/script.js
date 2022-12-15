window.addEventListener('load', function () {
	const canvas = document.getElementById('canvas1');
	const ctx = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	ctx.strokeStyle = 'red';
	ctx.beginPath();
	ctx.moveTo(100, 100);
	ctx.lineTo(200,300);
	ctx.stroke()


	const text = 'Hello!';
	const textX = canvas.width / 2;
	const textY = canvas.height / 2;
	ctx.fillStyle = 'white';
	ctx.strokeStyle = 'orangered';
	ctx.lineWidth = 3;
	ctx.font = '80px Helvetica';
	// ctx.letterSpacing = '10px';
	ctx.fillText(text, textX, textY);
	ctx.strokeText(text, textX, textY);
});