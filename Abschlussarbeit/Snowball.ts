namespace A12_Rodelbahn {

    export class Snowball extends DrawObjects {
  
            xDir: number;
            yDir: number;

        constructor() {
            super();
            this.xPos = Math.random() * 700;
            this.yPos = Math.random() * 1100;
        }
        


        draw(): void {
            
            var gradient = crc2.createRadialGradient(300, 80, 10, 238, 5, 300);


            gradient.addColorStop(0, "#f7f7f7");
            gradient.addColorStop(0.5, "#fbfbfb");
            gradient.addColorStop(1, "#ffffff");

            
            let radius: number = 20;


            crc2.beginPath();
            crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

            crc2.fillStyle = gradient;
            crc2.fill();


        }




    }

}    
        
        
    
/* ---------------       
            var gradient = crc2.createRadialGradient(300, 80, 10, 238, 5, 300);


            gradient.addColorStop(0, "#f7f7f7");
            gradient.addColorStop(0.5, "#fbfbfb");
            gradient.addColorStop(1, "#ffffff");

            let centerX: number = 170;
            let centerY: number = 75;
            let radius: number = 20;

            crc2.beginPath();
            crc2.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);

            crc2.fillStyle = gradient;
            crc2.fill();