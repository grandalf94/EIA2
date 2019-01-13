var A10_Winter;
(function (A10_Winter) {
    class ChildUp {
        draw() {
            A10_Winter.crc2.beginPath();
            A10_Winter.crc2.arc(this.xPos - 45, this.yPos - 45, 10, 0, 2 * Math.PI, false);
            A10_Winter.crc2.fillStyle = "#FFD8BE";
            A10_Winter.crc2.fill();
            A10_Winter.crc2.lineWidth = .2;
            A10_Winter.crc2.strokeStyle = "#A57658";
            A10_Winter.crc2.stroke();
            A10_Winter.crc2.beginPath();
            A10_Winter.crc2.moveTo(this.xPos - 35, this.yPos);
            A10_Winter.crc2.lineTo(this.xPos - 55, this.yPos);
            A10_Winter.crc2.lineTo(this.xPos - 55, this.yPos - 35);
            A10_Winter.crc2.lineTo(this.xPos - 35, this.yPos - 35);
            A10_Winter.crc2.fillStyle = this.color;
            A10_Winter.crc2.fill();
            A10_Winter.crc2.beginPath();
            A10_Winter.crc2.moveTo(this.xPos, this.yPos);
            A10_Winter.crc2.lineTo(this.xPos + 55, this.yPos);
            A10_Winter.crc2.lineWidth = 4;
            A10_Winter.crc2.strokeStyle = "#683737";
            A10_Winter.crc2.stroke();
            A10_Winter.crc2.beginPath();
            A10_Winter.crc2.moveTo(this.xPos, this.yPos - 15);
            A10_Winter.crc2.lineTo(this.xPos + 55, this.yPos - 15);
            A10_Winter.crc2.lineWidth = 4;
            A10_Winter.crc2.strokeStyle = "#683737";
            A10_Winter.crc2.stroke();
            A10_Winter.crc2.beginPath();
            A10_Winter.crc2.moveTo(this.xPos + 10, this.yPos);
            A10_Winter.crc2.lineTo(this.xPos + 10, this.yPos - 15);
            A10_Winter.crc2.lineWidth = 4;
            A10_Winter.crc2.strokeStyle = "#683737";
            A10_Winter.crc2.stroke();
            A10_Winter.crc2.beginPath();
            A10_Winter.crc2.moveTo(this.xPos + 45, this.yPos);
            A10_Winter.crc2.lineTo(this.xPos + 45, this.yPos - 15);
            A10_Winter.crc2.lineWidth = 4;
            A10_Winter.crc2.strokeStyle = "#683737";
            A10_Winter.crc2.stroke();
            A10_Winter.crc2.beginPath();
            A10_Winter.crc2.moveTo(this.xPos, this.yPos - 15);
            A10_Winter.crc2.lineTo(this.xPos - 35, this.yPos - 30);
            A10_Winter.crc2.lineWidth = 2;
            A10_Winter.crc2.strokeStyle = "#000000";
            A10_Winter.crc2.stroke();
        }
        move() {
            this.yDir = Math.random() * (-2);
            this.xDir = Math.random() * (-5);
            this.xPos += this.xDir;
            this.yPos += this.yDir;
            if (this.xPos < -150) {
                this.xPos = Math.random() * 100 + 750; //random * streubreite + startposition
                this.yPos = 1150;
            }
        }
        getRandomColor() {
            var r = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
            var g = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
            var b = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
            return "#" + r + g + b;
        }
    }
    A10_Winter.ChildUp = ChildUp;
})(A10_Winter || (A10_Winter = {}));
//# sourceMappingURL=ChildWalking.js.map