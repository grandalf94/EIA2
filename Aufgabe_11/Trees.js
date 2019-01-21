var A11_Rodelbahn;
(function (A11_Rodelbahn) {
    class Trees extends A11_Rodelbahn.DrawObjects {
        constructor() {
            super();
            this.xPos = 40 + Math.random() * 200;
            this.yPos = 800 + Math.random() * 200;
        }
        draw() {
            A11_Rodelbahn.crc2.beginPath();
            A11_Rodelbahn.crc2.moveTo(this.xPos - 10, this.yPos + 70);
            A11_Rodelbahn.crc2.lineTo(this.xPos + 10, this.yPos + 70);
            A11_Rodelbahn.crc2.lineTo(this.xPos + 7, this.yPos - 0);
            A11_Rodelbahn.crc2.closePath();
            A11_Rodelbahn.crc2.fillStyle = "#612A05";
            A11_Rodelbahn.crc2.fill();
            A11_Rodelbahn.crc2.beginPath();
            A11_Rodelbahn.crc2.moveTo(this.xPos - 30, this.yPos + 50);
            A11_Rodelbahn.crc2.lineTo(this.xPos, this.yPos - 20);
            A11_Rodelbahn.crc2.lineTo(this.xPos + 30, this.yPos + 50);
            A11_Rodelbahn.crc2.closePath();
            A11_Rodelbahn.crc2.fillStyle = "#018A0E";
            A11_Rodelbahn.crc2.fill();
        }
    }
    A11_Rodelbahn.Trees = Trees;
})(A11_Rodelbahn || (A11_Rodelbahn = {}));
//# sourceMappingURL=Trees.js.map