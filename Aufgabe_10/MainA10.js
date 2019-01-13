var A10_Winter;
(function (A10_Winter) {
    window.addEventListener("load", init);
    let snowflakes = [];
    let childsDown = [];
    let childsUp = [];
    let fps = 25;
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        A10_Winter.crc2 = canvas.getContext("2d");
        drawSky();
        drawSun();
        gernerateTrees();
        gernerateTrees2();
        drawCloud1();
        drawCloud2();
        imgData = A10_Winter.crc2.getImageData(0, 0, 700, 1100);
        generateSnow();
        generateChildDown();
        generateChildUp();
        update();
    }
    function update() {
        A10_Winter.crc2.putImageData(imgData, 0, 0);
        window.setTimeout(update, 1000 / fps);
        for (let i = 0; i < snowflakes.length; i++) {
            let snowflake = snowflakes[i];
            snowflake.move();
            snowflake.draw();
        }
        for (let i = 0; i < childsDown.length; i++) {
            let childd = childsDown[i];
            childd.move();
            childd.draw();
        }
        for (let i = 0; i < childsUp.length; i++) {
            let childu = childsUp[i];
            childu.move();
            childu.draw();
        }
    }
    function drawSun() {
        var gradient = A10_Winter.crc2.createRadialGradient(300, 80, 10, 238, 5, 300);
        gradient.addColorStop(0, "#f6d531");
        gradient.addColorStop(0.5, "#f6e731");
        gradient.addColorStop(1, "#f6bd31");
        let centerX = 170;
        let centerY = 75;
        let radius = 80;
        A10_Winter.crc2.beginPath();
        A10_Winter.crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
        A10_Winter.crc2.fillStyle = gradient;
        A10_Winter.crc2.fill();
    }
    function drawSky() {
        A10_Winter.crc2.moveTo(0, 350);
        A10_Winter.crc2.beginPath();
        A10_Winter.crc2.lineTo(700, 700);
        A10_Winter.crc2.lineTo(700, 0);
        A10_Winter.crc2.lineTo(0, 0);
        A10_Winter.crc2.lineTo(0, 350);
        A10_Winter.crc2.closePath();
        var grd = A10_Winter.crc2.createLinearGradient(0, 0, 700, 1110);
        // light blue
        grd.addColorStop(0, "#c0ebea");
        // dark blue
        grd.addColorStop(1, "#6de6f5");
        A10_Winter.crc2.fillStyle = grd;
        A10_Winter.crc2.fill();
    }
    function drawCloud1() {
        A10_Winter.crc2.beginPath();
        A10_Winter.crc2.arc(50, 220, 45, 0, 2 * Math.PI);
        A10_Winter.crc2.arc(120, 220, 70, 0, 2 * Math.PI);
        A10_Winter.crc2.arc(190, 220, 45, 0, 2 * Math.PI);
        A10_Winter.crc2.fillStyle = "#e6f0ef";
        A10_Winter.crc2.fill();
    }
    function drawCloud2() {
        A10_Winter.crc2.beginPath();
        A10_Winter.crc2.arc(470, 180, 20, 0, 2 * Math.PI);
        A10_Winter.crc2.arc(510, 180, 40, 0, 2 * Math.PI);
        A10_Winter.crc2.arc(570, 180, 70, 0, 2 * Math.PI);
        A10_Winter.crc2.arc(630, 180, 40, 0, 2 * Math.PI);
        A10_Winter.crc2.arc(670, 180, 20, 0, 2 * Math.PI);
        A10_Winter.crc2.fillStyle = "#FFFFFF";
        A10_Winter.crc2.fill();
    }
    function gernerateTrees() {
        for (let i = 0; i < 8; i++) {
            let x = 40 + Math.random() * 200;
            let y = 800 + Math.random() * 200;
            drawTrees(x, y);
        }
    }
    function drawTrees(_x, _y) {
        A10_Winter.crc2.beginPath();
        A10_Winter.crc2.moveTo(_x - 10, _y + 70);
        A10_Winter.crc2.lineTo(_x + 10, _y + 70);
        A10_Winter.crc2.lineTo(_x + 7, _y - 0);
        A10_Winter.crc2.closePath();
        A10_Winter.crc2.fillStyle = "#612A05";
        A10_Winter.crc2.fill();
        A10_Winter.crc2.beginPath();
        A10_Winter.crc2.moveTo(_x - 30, _y + 50);
        A10_Winter.crc2.lineTo(_x, _y - 20);
        A10_Winter.crc2.lineTo(_x + 30, _y + 50);
        A10_Winter.crc2.closePath();
        A10_Winter.crc2.fillStyle = "#74a741";
        A10_Winter.crc2.fill();
    }
    function gernerateTrees2() {
        for (let i = 0; i < 4; i++) {
            let x = 550 + Math.random() * 150;
            let y = 600 + Math.random() * 150;
            drawTrees2(x, y);
        }
    }
    function drawTrees2(_x, _y) {
        A10_Winter.crc2.beginPath();
        A10_Winter.crc2.moveTo(_x - 10, _y + 70);
        A10_Winter.crc2.lineTo(_x + 10, _y + 70);
        A10_Winter.crc2.lineTo(_x + 7, _y - 0);
        A10_Winter.crc2.closePath();
        A10_Winter.crc2.fillStyle = "#612A05";
        A10_Winter.crc2.fill();
        A10_Winter.crc2.beginPath();
        A10_Winter.crc2.moveTo(_x - 30, _y + 50);
        A10_Winter.crc2.lineTo(_x, _y - 20);
        A10_Winter.crc2.lineTo(_x + 30, _y + 50);
        A10_Winter.crc2.closePath();
        A10_Winter.crc2.fillStyle = "#018A0E";
        A10_Winter.crc2.fill();
    }
    function generateSnow() {
        for (let i = 0; i < 500; i++) {
            let snowflake = new A10_Winter.Snow();
            snowflake.xPos = Math.random() * 700;
            snowflake.yPos = Math.random() * 1100;
            snowflake.draw();
            snowflakes.push(snowflake);
        }
    }
    function generateChildDown() {
        for (let i = 0; i < 5; i++) {
            let childd = new A10_Winter.ChildDown();
            childd.xPos = Math.random() * 100;
            childd.yPos = Math.random() * 250 + 400;
            childd.color = childd.getRandomColor();
            childd.draw();
            childsDown.push(childd);
        }
    }
    function generateChildUp() {
        for (let i = 0; i < 5; i++) {
            let childu = new A10_Winter.ChildUp();
            childu.xPos = Math.random() * 100 + 500;
            childu.yPos = Math.random() * 100 + 900;
            childu.color = childu.getRandomColor();
            childu.draw();
            childsUp.push(childu);
        }
    }
})(A10_Winter || (A10_Winter = {}));
//# sourceMappingURL=MainA10.js.map