namespace Endabgabe {

    export class Snow {
        xPos: number;
        yPos: number;
        xDir: number;
        yDir: number;



        draw(): void {

            crc2.beginPath();
            crc2.arc(this.xPos, this.yPos, 1, 0, 2 * Math.PI, false);

            crc2.fillStyle = "#F5FEFF";
            crc2.fill();
            crc2.lineWidth = .2;
            crc2.strokeStyle = "#D2EEF2";
            crc2.stroke();


        }

        move(): void {

            this.yDir = 1,5;
            this.xDir = Math.random() * 4 - 2;

            this.xPos += this.xDir;
            this.yPos += this.yDir;

            if (this.yPos > 1100) {
                this.yPos = 0;
            }
            this.draw();
        }


    }

}
