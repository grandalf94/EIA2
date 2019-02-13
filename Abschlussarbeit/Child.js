var A11_Rodelbahn;
(function (A11_Rodelbahn) {
    class Child extends A11_Rodelbahn.DrawObjects {
        constructor() {
            super();
            this.xPos = Math.random() * 100;
            this.yPos = Math.random() * 250 + 400;
            this.mDown = true;
            this.color = this.getRandomColor();
        }
        draw() {
            if (this.mDown == true) {
                this.drawDown();
            }
            else {
                this.drawUp();
            }
        }
        move() {
            if (this.mDown == true) {
                this.moveDown();
            }
            else {
                this.moveUp();
            }
        }
        drawDown() {
            A11_Rodelbahn.crc2.beginPath();
            A11_Rodelbahn.crc2.arc(this.xPos + 25, this.yPos - 50, 10, 0, 2 * Math.PI, false);
            A11_Rodelbahn.crc2.fillStyle = "#FFD8BE";
            A11_Rodelbahn.crc2.fill();
            A11_Rodelbahn.crc2.lineWidth = .2;
            A11_Rodelbahn.crc2.strokeStyle = "#A57658";
            A11_Rodelbahn.crc2.stroke();
            A11_Rodelbahn.crc2.fillStyle = this.color;
            A11_Rodelbahn.crc2.beginPath();
            A11_Rodelbahn.crc2.moveTo(this.xPos + 10, this.yPos - 15);
            A11_Rodelbahn.crc2.lineTo(this.xPos + 45, this.yPos - 15);
            A11_Rodelbahn.crc2.lineTo(this.xPos + 25, this.yPos - 40);
            A11_Rodelbahn.crc2.fill();
            A11_Rodelbahn.crc2.beginPath();
            A11_Rodelbahn.crc2.moveTo(this.xPos, this.yPos);
            A11_Rodelbahn.crc2.lineTo(this.xPos + 55, this.yPos);
            A11_Rodelbahn.crc2.lineWidth = 4;
            A11_Rodelbahn.crc2.strokeStyle = "#683737";
            A11_Rodelbahn.crc2.stroke();
            A11_Rodelbahn.crc2.beginPath();
            A11_Rodelbahn.crc2.moveTo(this.xPos, this.yPos - 15);
            A11_Rodelbahn.crc2.lineTo(this.xPos + 55, this.yPos - 15);
            A11_Rodelbahn.crc2.lineWidth = 4;
            A11_Rodelbahn.crc2.strokeStyle = "#683737";
            A11_Rodelbahn.crc2.stroke();
            A11_Rodelbahn.crc2.beginPath();
            A11_Rodelbahn.crc2.moveTo(this.xPos + 10, this.yPos);
            A11_Rodelbahn.crc2.lineTo(this.xPos + 10, this.yPos - 15);
            A11_Rodelbahn.crc2.lineWidth = 4;
            A11_Rodelbahn.crc2.strokeStyle = "#683737";
            A11_Rodelbahn.crc2.stroke();
            A11_Rodelbahn.crc2.beginPath();
            A11_Rodelbahn.crc2.moveTo(this.xPos + 45, this.yPos);
            A11_Rodelbahn.crc2.lineTo(this.xPos + 45, this.yPos - 15);
            A11_Rodelbahn.crc2.lineWidth = 4;
            A11_Rodelbahn.crc2.strokeStyle = "#683737";
            A11_Rodelbahn.crc2.stroke();
        }
        moveDown() {
            this.yDir = 2;
            this.xDir = 5;
            this.xPos += this.xDir;
            this.yPos += this.yDir;
            if (this.xPos > 600) {
                this.mDown = false;
            }
        }
        getRandomColor() {
            var r = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
            var g = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
            var b = ("0" + Math.floor(Math.random() * 256).toString(16)).substr(-2);
            return "#" + r + g + b;
        }
        //childup
        drawUp() {
            A11_Rodelbahn.crc2.beginPath();
            A11_Rodelbahn.crc2.arc(this.xPos - 45, this.yPos - 45, 10, 0, 2 * Math.PI, false);
            A11_Rodelbahn.crc2.fillStyle = "#FFD8BE";
            A11_Rodelbahn.crc2.fill();
            A11_Rodelbahn.crc2.lineWidth = .2;
            A11_Rodelbahn.crc2.strokeStyle = "#A57658";
            A11_Rodelbahn.crc2.stroke();
            A11_Rodelbahn.crc2.beginPath();
            A11_Rodelbahn.crc2.moveTo(this.xPos - 35, this.yPos);
            A11_Rodelbahn.crc2.lineTo(this.xPos - 55, this.yPos);
            A11_Rodelbahn.crc2.lineTo(this.xPos - 55, this.yPos - 35);
            A11_Rodelbahn.crc2.lineTo(this.xPos - 35, this.yPos - 35);
            A11_Rodelbahn.crc2.fillStyle = this.color;
            A11_Rodelbahn.crc2.fill();
            A11_Rodelbahn.crc2.beginPath();
            A11_Rodelbahn.crc2.moveTo(this.xPos, this.yPos);
            A11_Rodelbahn.crc2.lineTo(this.xPos + 55, this.yPos);
            A11_Rodelbahn.crc2.lineWidth = 4;
            A11_Rodelbahn.crc2.strokeStyle = "#683737";
            A11_Rodelbahn.crc2.stroke();
            A11_Rodelbahn.crc2.beginPath();
            A11_Rodelbahn.crc2.moveTo(this.xPos, this.yPos - 15);
            A11_Rodelbahn.crc2.lineTo(this.xPos + 55, this.yPos - 15);
            A11_Rodelbahn.crc2.lineWidth = 4;
            A11_Rodelbahn.crc2.strokeStyle = "#683737";
            A11_Rodelbahn.crc2.stroke();
            A11_Rodelbahn.crc2.beginPath();
            A11_Rodelbahn.crc2.moveTo(this.xPos + 10, this.yPos);
            A11_Rodelbahn.crc2.lineTo(this.xPos + 10, this.yPos - 15);
            A11_Rodelbahn.crc2.lineWidth = 4;
            A11_Rodelbahn.crc2.strokeStyle = "#683737";
            A11_Rodelbahn.crc2.stroke();
            A11_Rodelbahn.crc2.beginPath();
            A11_Rodelbahn.crc2.moveTo(this.xPos + 45, this.yPos);
            A11_Rodelbahn.crc2.lineTo(this.xPos + 45, this.yPos - 15);
            A11_Rodelbahn.crc2.lineWidth = 4;
            A11_Rodelbahn.crc2.strokeStyle = "#683737";
            A11_Rodelbahn.crc2.stroke();
            A11_Rodelbahn.crc2.beginPath();
            A11_Rodelbahn.crc2.moveTo(this.xPos, this.yPos - 15);
            A11_Rodelbahn.crc2.lineTo(this.xPos - 35, this.yPos - 30);
            A11_Rodelbahn.crc2.lineWidth = 2;
            A11_Rodelbahn.crc2.strokeStyle = "#000000";
            A11_Rodelbahn.crc2.stroke();
        }
        moveUp() {
            this.yDir = Math.random() * (-2);
            this.xDir = Math.random() * (-5);
            this.xPos += this.xDir;
            this.yPos += this.yDir;
            if (this.xPos < 50) {
                this.mDown = true;
            }
        }
    }
    A11_Rodelbahn.Child = Child;
})(A11_Rodelbahn || (A11_Rodelbahn = {}));
//# sourceMappingURL=Child.js.map