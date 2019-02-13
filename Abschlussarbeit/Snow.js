var A12_Rodelbahn;
(function (A12_Rodelbahn) {
    class Snow extends A12_Rodelbahn.DrawObjects {
        constructor() {
            super();
            this.xPos = Math.random() * 700;
            this.yPos = Math.random() * 1100;
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
        draw() {
            A12_Rodelbahn.crc2.beginPath();
            A12_Rodelbahn.crc2.arc(this.xPos, this.yPos, 3, 0, 2 * Math.PI, false);
            A12_Rodelbahn.crc2.fillStyle = "#F5FEFF";
            A12_Rodelbahn.crc2.fill();
            A12_Rodelbahn.crc2.lineWidth = .2;
            A12_Rodelbahn.crc2.strokeStyle = "#D2EEF2";
            A12_Rodelbahn.crc2.stroke();
        }
    }
    A12_Rodelbahn.Snow = Snow;
})(A12_Rodelbahn || (A12_Rodelbahn = {}));
//# sourceMappingURL=Snow.js.map