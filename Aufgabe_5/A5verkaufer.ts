namespace Aufgabe05 {


    export interface products {
        typ: string,
        name: string,
        price: number,
    }

    export interface assoArray {
        [key: string]: products[];
    }

    export let assoProducts: assoArray = {
        "treeSpecies": [{ typ: "Baum", name: "Tanne", price: 55 }, { typ: "Baum", name: "Kiefer", price: 60 }, { typ: "Baum", name: "Plastik Tanne", price: 30 }],
        "holder": [{ typ: "Halterung", name: "Keine", price: 0 }, { typ: "Halterung", name: "Topf", price: 10 }, { typ: "Halterung", name: "Halterung", price: 30 }],
        "christmasBalls": [{ typ: "Kugeln", name: "Handgranaten", price: 150 }, { typ: "Kugeln", name: "Pferdeäpfel", price: 5 }, { typ: "Kugeln", name: "Fidget Spinner", price: 1 }],
        "lametta": [{ typ: "Lametta", name: "Luftschlangen", price: 5 }, { typ: "Lametta", name: "Klopapier", price: 3 }, { typ: "Lametta", name: "Stacheldraht", price: 30 }, { typ: "Lametta", name: "Lose Kabel", price: 10 }],
        "candleType": [{ typ: "Kerzen", name: "Laternen", price: 3 }, { typ: "Kerzen", name: "Fackeln", price: 5 }],
        "shipment": [{ typ: "Lieferoptionen", name: "DPD", price: 20 }, { typ: "Lieferoptionen", name: "DHL", price: 25 }, { typ: "Lieferoptionen", name: "Helikopter", price: 7000 }]
    }

}