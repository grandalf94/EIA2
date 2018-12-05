namespace Aufgabe07 {


 export interface product {
        name: string;
        price: number;
    }

    export let tree: product[] = [{ name: "", price: 0},{ name: "Nordmantanne (70 Euro)", price: 70 }, { name: "Fichte (60 Euro)", price: 60 }, { name: "Plastiktanne (30 Euro)", price: 30 }];
    export let christmasBall: product[] = [{ name: "Rote Glassgkugel", price: 1 },{ name: "Goldene Glasskugel", price: 1.5 },{ name: "Gruene Glasskugel", price: 1.2}];
    export let lametta: product[] = [{ name: "Lametta Gold 50cm", price: 3 }, { name: "Lametta Silber 50cm", price: 2 },{ name: "Lametta Rot 50cm ", price: 3 }];
    export let holder: product[] = [{ name: "Keine Halterung", price: 0},{ name: "Halterung Rot (20 Euro)", price: 20 }, { name: "Halterung Gruen (22 Euro)", price: 22 }];
    export let shipment: product[] = [{ name: "", price: 0},{ name: "UPS (15 Euro)", price: 15 }, { name: "DHL (12 Euro)", price: 12 }, { name: "Hermes (14 Euro)", price: 14 }];
    export let candle: product[] = [{ name: "Rote Kerzen", price: 0.8 }, { name: "Kerzen elektrisch", price: 1.5 }, { name: "Goldene Kerzen", price: 1 }];
}