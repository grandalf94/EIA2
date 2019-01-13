var A10_Winter;
(function (A10_Winter) {
    window.addEventListener("load", init);
    let fps = 25;
    let imgData;
    let flakes = [];
    function init(_event) {
        console.log("Canvas started");
        let canvas = document.getElementsByTagName("canvas")[0];
        A10_Winter.crc2 = canvas.getContext("2d");
        console.log(A10_Winter.crc2);
        createSky();
        createCloud();
        createSun();
        gernerateTrees();
        gernerateTrees2();
        imgData = A10_Winter.crc2.getImageData(0, 0, 700, 1100);
        generateSnow();
        createSleigh();
        createPeople();
        update();
    }
    function update() {
        A10_Winter.crc2.putImageData(imgData, 0, 0);
        window.setTimeout(update, 1000 / fps);
        for (let i = 0; i < flakes.length; i++) {
            let flake = flakes[i];
            flake.move();
            flake.draw();
        }
    }
    // Himmel
    function createSky() {
        A10_Winter.crc2.beginPath();
        A10_Winter.crc2.lineTo(0, 670);
        A10_Winter.crc2.lineTo(1300, 0);
        A10_Winter.crc2.lineTo(0, 0);
        A10_Winter.crc2.lineTo(0, 0);
        A10_Winter.crc2.closePath();
        A10_Winter.crc2.fillStyle = "#A9BCF5";
        A10_Winter.crc2.fill();
    }
    //Wolken
    function createCloud() {
        A10_Winter.crc2.beginPath();
        A10_Winter.crc2.arc(560, 125, 18, 0, 2 * Math.PI);
        A10_Winter.crc2.arc(575, 130, 15, 0, 2 * Math.PI);
        A10_Winter.crc2.arc(545, 130, 15, 0, 2 * Math.PI);
        A10_Winter.crc2.fillStyle = "#ffffff";
        A10_Winter.crc2.fill();
        A10_Winter.crc2.beginPath();
        A10_Winter.crc2.arc(300, 80, 18, 0, 2 * Math.PI);
        A10_Winter.crc2.arc(315, 85, 15, 0, 2 * Math.PI);
        A10_Winter.crc2.arc(285, 85, 15, 0, 2 * Math.PI);
        A10_Winter.crc2.fillStyle = "#FAFAFA";
        A10_Winter.crc2.fill();
        A10_Winter.crc2.beginPath();
        A10_Winter.crc2.arc(120, 150, 18, 0, 2 * Math.PI);
        A10_Winter.crc2.arc(135, 155, 17, 0, 2 * Math.PI);
        A10_Winter.crc2.arc(105, 155, 17, 0, 2 * Math.PI);
        A10_Winter.crc2.fillStyle = "#ffffff";
        A10_Winter.crc2.fill();
    }
    // B�ume
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
        A10_Winter.crc2.fillStyle = "#018A0E";
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
    //Sonne
    function createSun() {
        A10_Winter.crc2.beginPath();
        A10_Winter.crc2.arc(65, 70, 50, 0, 2 * Math.PI);
        A10_Winter.crc2.fillStyle = "#F3F781";
        A10_Winter.crc2.fill();
    }
    function generateSnow() {
        for (let i = 0; i < 100; i++) {
            let flake = new A10_Winter.Snowflake();
            flake.x = Math.random() * A10_Winter.crc2.canvas.width;
            flake.y = Math.random() * A10_Winter.crc2.canvas.height;
            flake.dx = Math.random() * 700;
            flake.dy = Math.random() * 1100;
            flake.size = Math.random() * 5 + 2;
            flakes.push(flake);
        }
    }
    //Schlitten
    function createSleigh() {
        A10_Winter.crc2.beginPath();
        A10_Winter.crc2.moveTo(400, 570);
        A10_Winter.crc2.lineTo(300, 620);
        A10_Winter.crc2.lineWidth = 10;
        A10_Winter.crc2.strokeStyle = "#8b5a2b";
        A10_Winter.crc2.arc(280, 615, 13, 1, 1.6 * Math.PI);
        A10_Winter.crc2.stroke();
        A10_Winter.crc2.beginPath();
        A10_Winter.crc2.moveTo(300, 620);
        A10_Winter.crc2.lineTo(280, 590);
        A10_Winter.crc2.lineWidth = 8;
        A10_Winter.crc2.strokeStyle = "#8b5a2b";
        A10_Winter.crc2.stroke();
        A10_Winter.crc2.beginPath();
        A10_Winter.crc2.moveTo(380, 540);
        A10_Winter.crc2.lineTo(280, 590);
        A10_Winter.crc2.lineWidth = 10;
        A10_Winter.crc2.strokeStyle = "#8b5a2b";
        A10_Winter.crc2.arc(250, 585, 13, 1, 1.6 * Math.PI);
        A10_Winter.crc2.stroke();
    }
    function createPeople() {
        //Schlittenfahrer 
        A10_Winter.crc2.beginPath();
        A10_Winter.crc2.arc(348, 457, 25, 0, 2 * Math.PI, false);
        A10_Winter.crc2.fillStyle = "#F7BE81";
        A10_Winter.crc2.fill();
        A10_Winter.crc2.lineWidth = 1.2;
        A10_Winter.crc2.strokeStyle = "#A57658";
        A10_Winter.crc2.stroke();
        A10_Winter.crc2.fillStyle = "#8A0808";
        A10_Winter.crc2.fillRect(338, 480, 20, 30);
        A10_Winter.crc2.fillRect(328, 495, 40, 65);
        A10_Winter.crc2.fillRect(300, 520, 60, 15);
        A10_Winter.crc2.beginPath();
        A10_Winter.crc2.arc(297, 527, 6, 0, 2 * Math.PI, false);
        A10_Winter.crc2.fillStyle = "#F7BE81";
        A10_Winter.crc2.fill();
        A10_Winter.crc2.beginPath();
        A10_Winter.crc2.moveTo(370, 550);
        A10_Winter.crc2.lineTo(250, 620);
        A10_Winter.crc2.lineWidth = 20;
        A10_Winter.crc2.strokeStyle = "#0B243B";
        A10_Winter.crc2.stroke();
        // Person stehend
        A10_Winter.crc2.beginPath();
        A10_Winter.crc2.arc(548, 257, 25, 0, 2 * Math.PI, false);
        A10_Winter.crc2.fillStyle = "#F7BE81";
        A10_Winter.crc2.fill();
        A10_Winter.crc2.lineWidth = 1.2;
        A10_Winter.crc2.strokeStyle = "#A57658";
        A10_Winter.crc2.stroke();
        A10_Winter.crc2.fillStyle = "#FA5858";
        A10_Winter.crc2.fillRect(538, 280, 20, 30);
        A10_Winter.crc2.fillRect(528, 295, 40, 65);
        A10_Winter.crc2.fillRect(500, 310, 60, 15);
        A10_Winter.crc2.fillRect(540, 310, 60, 15);
        A10_Winter.crc2.beginPath();
        A10_Winter.crc2.arc(497, 317, 6, 0, 2 * Math.PI, false);
        A10_Winter.crc2.fillStyle = "#F7BE81";
        A10_Winter.crc2.fill();
        A10_Winter.crc2.beginPath();
        A10_Winter.crc2.arc(603, 317, 6, 0, 2 * Math.PI, false);
        A10_Winter.crc2.fillStyle = "#F7BE81";
        A10_Winter.crc2.fill();
        A10_Winter.crc2.fillStyle = "#6E6E6E";
        A10_Winter.crc2.fillRect(528, 350, 17, 75);
        A10_Winter.crc2.fillRect(552, 350, 17, 75);
        A10_Winter.crc2.fillRect(528, 350, 41, 12);
    }
    for (let i = 0; i < 20; i++) {
        let flake = flakes[i];
        flake.move();
        flake.draw(); // keine Parameter erforderlich, denn der Stern weiß über sich Bescheid
    }
})(A10_Winter || (A10_Winter = {}));
//# sourceMappingURL=MainA10.js.map