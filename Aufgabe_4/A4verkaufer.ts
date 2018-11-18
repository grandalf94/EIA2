namespace Aufgabe04 {

    export interface products {
        name: string,
        price: number,
    }

    export let treeSpecies: products[] = [{ name: "Nordmanntanne", price: 50 }, { name: "Blaufichte", price: 60 }, { name: "Kiefer", price: 30 }];
    export let holderType: products[] = [{ name: "Nichts ausgewählt", price: 0 }, { name: "Topf", price: 10 }, { name: "Halterung", price: 30 },];
    export let christmasBall: products[] = [{ name: "NIchts ausgewählt", price: 0 }, { name: "Rot", price: 2 }, { name: "Gold", price: 6 }, { name: "Glas", price: 1 }];
    export let lametta: products[] = [{ name: "Nichts ausgewählt", price: 0 }, { name: "Gold", price: 10 }, { name: "Grün", price: 10 }, { name: "Rot", price: 10 }, { name: "Silber", price: 10 }];
    export let candleType: products[] = [{ name: "Nichts ausgewählt", price: 0 }, { name: "Wachs", price: 3 }, { name: "LED", price: 5 }];
    export let shipment: products[] = [{ name: "DPD", price: 20 }, { name: "DHL", price: 25 }, { name: "UPS", price: 30 }];

}