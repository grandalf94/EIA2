namespace Endabgabe {

    export class GameStart {
        xPos: number;
        yPos: number;



        init(): void {

            this.xPos = 0;
            this.yPos = 0;
        }

        draw(): void {

            crc2.beginPath();
            crc2.rect(this.xPos, this.yPos, 700, 1100);
            crc2.fillStyle = "#f2f2f2";
            crc2.fill();
            crc2.strokeStyle = "#bfbfbf";
            crc2.fillStyle = "#bfbfbf";
            crc2.strokeStyle = "#000000";
            crc2.lineWidth = 5;

            crc2.font = "50px Arial"
            crc2.textAlign = "center";
            crc2.fillStyle = "#000000";
            crc2.fillText("Click & Play", 350, 350);
            crc2.fillText("Werfe so viele Kinder", 350, 500);
            crc2.fillText("wie moeglich ab.", 350, 550);
            crc2.fillText("Du hast 45 Sekunden Zeit", 350, 600);




            crc2.stroke();

        }
    }

}
