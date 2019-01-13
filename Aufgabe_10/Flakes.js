var A10_Winter;
(function (A10_Winter) {
    class Snow {
        draw() {
            A10_Winter.crc2.beginPath();
            A10_Winter.crc2.arc(this.xPos, this.yPos, 3, 0, 2 * Math.PI, false);
            A10_Winter.crc2.fillStyle = "#F5FEFF";
            A10_Winter.crc2.fill();
            A10_Winter.crc2.lineWidth = .2;
            A10_Winter.crc2.strokeStyle = "#D2EEF2";
            A10_Winter.crc2.stroke();
        }
        move() {
            this.yDir = 2;
            this.xDir = Math.random() * 4 - 2;
            this.xPos += this.xDir;
            this.yPos += this.yDir;
            if (this.yPos > 1100) {
                this.yPos = 0;
            }
            this.draw();
        }
    }
    A10_Winter.Snow = Snow;
})(A10_Winter || (A10_Winter = {}));
//# sourceMappingURL=Flakes.js.map