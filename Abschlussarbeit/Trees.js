var A12_Rodelbahn;
(function (A12_Rodelbahn) {
    class Trees extends A12_Rodelbahn.DrawObjects {
        constructor() {
            super();
            this.xPos = 40 + Math.random() * 200;
            this.yPos = 800 + Math.random() * 200;
        }
        draw() {
            A12_Rodelbahn.crc2.beginPath();
            A12_Rodelbahn.crc2.moveTo(this.xPos - 10, this.yPos + 70);
            A12_Rodelbahn.crc2.lineTo(this.xPos + 10, this.yPos + 70);
            A12_Rodelbahn.crc2.lineTo(this.xPos + 7, this.yPos - 0);
            A12_Rodelbahn.crc2.closePath();
            A12_Rodelbahn.crc2.fillStyle = "#612A05";
            A12_Rodelbahn.crc2.fill();
            A12_Rodelbahn.crc2.beginPath();
            A12_Rodelbahn.crc2.moveTo(this.xPos - 30, this.yPos + 50);
            A12_Rodelbahn.crc2.lineTo(this.xPos, this.yPos - 20);
            A12_Rodelbahn.crc2.lineTo(this.xPos + 30, this.yPos + 50);
            A12_Rodelbahn.crc2.closePath();
            A12_Rodelbahn.crc2.fillStyle = "#018A0E";
            A12_Rodelbahn.crc2.fill();
        }
    }
    A12_Rodelbahn.Trees = Trees;
})(A12_Rodelbahn || (A12_Rodelbahn = {}));
//# sourceMappingURL=Trees.js.map