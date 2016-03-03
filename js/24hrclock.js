// inner variables
var canvas, ctx;
var clockRadius = 250;
var clockImage;

// draw functions :
function clear() { // clear canvas function
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function drawScene() { // main drawScene function
    clear(); // clear canvas

    // get current time
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var hour = hours + minutes / 60;
    var minute = minutes + seconds / 60;

    // save current context
    ctx.save();

    // draw clock image (as background)
    ctx.drawImage(clockImage, 0, 0, 500, 500);

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.beginPath();

    // draw numbers
    ctx.font = '30px Arial';
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (var n = 1; n <= 24; n++) {
        var theta = (n - 6) * (Math.PI * 2) / 24;
        var x = clockRadius * 0.7 * Math.cos(theta);
        var y = clockRadius * 0.7 * Math.sin(theta);
//        ctx.fillText(n, x, y);
    }

    // draw hour
    ctx.save();
    var theta = (hour - 6) * 2 * Math.PI / 24;
    ctx.rotate(theta);
    ctx.beginPath();
    ctx.moveTo(-15, -8);
    ctx.lineTo(-15, 8);
    ctx.lineTo(clockRadius * 0.53, 1);
    ctx.lineTo(clockRadius * 0.53, -1);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.restore();

    // draw minute
    ctx.save();
    var theta = (minute - 15) * 2 * Math.PI / 60;
    ctx.rotate(theta);
    ctx.beginPath();
    ctx.moveTo(-15, -5);
    ctx.lineTo(-15, 5);
    ctx.lineTo(clockRadius * 0.6, 1);
    ctx.lineTo(clockRadius * 0.6, -1);
    ctx.fillStyle = '#330066';
    ctx.fill();
    ctx.restore();

    // draw second
    ctx.save();
    var theta = (seconds - 15) * 2 * Math.PI / 60;
    ctx.rotate(theta);
    ctx.beginPath();
    ctx.moveTo(-15, -2);
    ctx.lineTo(-15, 2);
    ctx.lineTo(clockRadius * 0.67, 1);
    ctx.lineTo(clockRadius * 0.67, -1);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.restore();

    ctx.restore();
}

// initialization
$(function(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    // var width = canvas.width;
    // var height = canvas.height;

clockImage = new Image();
clockImage.src = 'images/24hrclock.png';

    setInterval(drawScene, 1000); // loop drawScene
});

