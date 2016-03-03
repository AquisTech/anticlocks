// inner variables
var canvas24, ctx24;
var clockRadius = 250;
var clockImage24;

// draw functions :
function clear() { // clear canvas function
    ctx24.clearRect(0, 0, ctx24.canvas.width, ctx24.canvas.height);
}

function drawScene24() { // main drawScene function
    clear(); // clear canvas

    // get current time
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var hour = hours + minutes / 60;
    var minute = minutes + seconds / 60;

    // save current context
    ctx24.save();

    // draw clock image (as background)
    ctx24.drawImage(clockImage24, 0, 0, 500, 500);

    ctx24.translate(canvas.width / 2, canvas.height / 2);
    ctx24.beginPath();

    // draw numbers
    ctx24.font = '30px Arial';
    ctx24.fillStyle = '#000';
    ctx24.textAlign = 'center';
    ctx24.textBaseline = 'middle';
    for (var n = 1; n <= 24; n++) {
        var theta = (n - 6) * (Math.PI * 2) / 24;
        var x = clockRadius * 0.7 * Math.cos(theta);
        var y = clockRadius * 0.7 * Math.sin(theta);
//        ctx24.fillText(n, x, y);
    }

    ctx24.fillText('AnAnD', 0, -85);
    ctx24.fillText('24hr-Clock', 0, -60);

    // draw hour
    ctx24.save();
    var theta = (hour - 6) * 2 * Math.PI / 24;
    ctx24.rotate(theta);
    ctx24.beginPath();
    ctx24.moveTo(-15, -8);
    ctx24.lineTo(-15, 8);
    ctx24.lineTo(clockRadius * 0.53, 1);
    ctx24.lineTo(clockRadius * 0.53, -1);
    ctx24.fillStyle = 'green';
    ctx24.fill();
    ctx24.restore();

    // draw minute
    ctx24.save();
    var theta = (minute - 15) * 2 * Math.PI / 60;
    ctx24.rotate(theta);
    ctx24.beginPath();
    ctx24.moveTo(-15, -5);
    ctx24.lineTo(-15, 5);
    ctx24.lineTo(clockRadius * 0.6, 1);
    ctx24.lineTo(clockRadius * 0.6, -1);
    ctx24.fillStyle = '#330066';
    ctx24.fill();
    ctx24.restore();

    // draw second
    ctx24.save();
    var theta = (seconds - 15) * 2 * Math.PI / 60;
    ctx24.rotate(theta);
    ctx24.beginPath();
    ctx24.moveTo(-15, -2);
    ctx24.lineTo(-15, 2);
    ctx24.lineTo(clockRadius * 0.67, 1);
    ctx24.lineTo(clockRadius * 0.67, -1);
    ctx24.fillStyle = 'red';
    ctx24.fill();
    ctx24.restore();

    ctx24.restore();
}

// initialization
$(function(){
    canvas = document.getElementById('canvas24');
    ctx24 = canvas.getContext('2d');

    // var width = canvas.width;
    // var height = canvas.height;

clockImage24 = new Image();
clockImage24.src = 'images/24hrclock.png';

    setInterval(drawScene24, 1000); // loop drawScene
});

//---------------------------------------------------------------

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
    hours = hours > 12 ? hours - 12 : hours;
    var hour = hours + minutes / 60;
    var minute = minutes + seconds / 60;

    // save current context
    ctx.save();

    // draw clock image (as background)
    ctx.drawImage(clockImage, 0, 0, 500, 500);

    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.beginPath();

    // draw numbers
    ctx.font = '36px Arial';
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (var n = 1; n <= 12; n++) {
        var theta = (n + 3) * (Math.PI * -2) / 12;
        var x = clockRadius * 0.7 * Math.cos(theta);
        var y = clockRadius * 0.7 * Math.sin(theta);
        ctx.fillText(n, x, y);
    }

    ctx.fillText('AnAnD', 0, -85);
    ctx.fillText('Anti-Clock', 0, -60);

    // draw hour
    ctx.save();
    var theta = (hour + 3) * -2 * Math.PI / 12;
    ctx.rotate(theta);
    ctx.beginPath();
    ctx.moveTo(-15, -7);
    ctx.lineTo(-15, 7);
    ctx.lineTo(clockRadius * 0.65, 1);
    ctx.lineTo(clockRadius * 0.65, -1);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.restore();

    // draw minute
    ctx.save();
    var theta = (minute + 15) * -2 * Math.PI / 60;
    ctx.rotate(theta);
    ctx.beginPath();
    ctx.moveTo(-15, -5);
    ctx.lineTo(-15, 5);
    ctx.lineTo(clockRadius * 0.8, 1);
    ctx.lineTo(clockRadius * 0.8, -1);
    ctx.fillStyle = '#330066';
    ctx.fill();
    ctx.restore();

    // draw second
    ctx.save();
    var theta = (seconds - 15) * -2 * Math.PI / 60;
    ctx.rotate(theta);
    ctx.beginPath();
    ctx.moveTo(-15, -2);
    ctx.lineTo(-15, 2);
    ctx.lineTo(clockRadius * 0.9, 1);
    ctx.lineTo(clockRadius * 0.9, -1);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.restore();

    ctx.restore();
}

// initialization
$(function(){
    canvas = document.getElementById('canvasanti');
    ctx = canvas.getContext('2d');

    // var width = canvas.width;
    // var height = canvas.height;

clockImage = new Image();
clockImage.src = 'images/cface.png';

    setInterval(drawScene, 1000); // loop drawScene
});

