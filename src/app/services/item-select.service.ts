import { BehaviorSubject } from "rxjs";

export class ItemSelectService {

    plantLists = [
        {
            name: "Ail",
            friends: [
                "Laitue",
                "Epinard",
                "Carotte",
                "Betterave",
                "Fraise"

            ],
            enemies: [
                "Haricot",
                "Pois",
                "Choux"
            ],
            quantity: 0,
            isSelected: false,
            icon: 'Ail.svg'

        },

        {
            name: "Aubergine",
            friends: [

            ],
            enemies: [
            ],
            quantity: 0,
            isSelected: false,
            icon: 'Aubergine.svg'

        },
        {
            name: "Betterave",
            friends: [
                "Ail",
                "Oignon",
                "Carotte",
                "Choux",
                "Haricot",
                "Laitue"

            ],
            enemies: [
                "Tomate",
                "Epinard"
            ],
            quantity: 0,
            isSelected: false,
            icon: 'Betterave.svg'

        },
        {
            name: "Carotte",
            friends: [
                "Poivron",
                "Haricot",
                "Betterave",
                "Pois",
                "Laitue",
                "Choux"
            ],
            enemies: [
            ],
            quantity: 0,
            isSelected: false,
            icon: 'Carotte.svg'

        },
        {
            name: "Choux",
            friends: [
                "Laitue",
                "Epinard",
                "Betterave",
                "Concombre",
                "Oignon",
                "Patate",
                "Ail"

            ],
            enemies: [
                "Fraise",
                "Tomate"
            ],
            quantity: 0,
            isSelected: false,
            icon: 'Choux.svg'

        },
        {
            name: "Courge",
            friends: [
                "Epinard",
                "Laitue",
                "Radis",
                "Haricot",
                "Pois"
            ],
            enemies: [
                "Patate",
                "Choux",
            ],
            quantity: 0,
            isSelected: false,
            icon: 'Courge.svg'

        },

        {
            name: "Epinard",
            friends: [
                "Aubergine",
                "Choux",
                "Oignon",
                "Pois",
                "Fraise"
            ],
            enemies: [
            ],
            quantity: 0,
            isSelected: false,
            icon: 'Epinard.svg'

        },

        {
            name: "Haricot",
            friends: [
                "Choux",
                "Carotte",
                "Fraise",
                "Tomate",
                "Courge",
                "Betterave"

            ],
            enemies: [
                "Ail",
                "Poireau",

            ],
            quantity: 0,
            isSelected: false,
            icon: 'Haricot.svg'

        },
        {
            name: "Laitue",
            friends: [
                "Betterave",
                "Choux",
                "Pois",
                "Radis",
                "Fraise"
            ],
            enemies: [
            ],
            quantity: 0,
            isSelected: false,
            icon: 'Laitue.svg'

        },
        {
            name: "Oignon",
            friends: [
                "Betterave",
                "Choux",
                "Carotte",
                "Laitue",
                "Patate",
                "Fraise",
                "Tomate"
            ],
            enemies: [
                "Haricot",
                "Pois"
            ],
            quantity: 0,
            isSelected: false,
            icon: 'Oignon.svg'

        },
        {
            name: "Piment",
            friends: [
                "Carotte",
                "Oignon"

            ],
            enemies: [
            ],
            quantity: 0,
            isSelected: false,
            icon: 'Piment.svg'

        }, {
            name: "Poireau",
            friends: [
                "Carotte",

            ],
            enemies: [
                "Betterave",
                "Choux",
                "Haricot"
            ],
            quantity: 0,
            isSelected: false,
            icon: 'Poireau.svg'

        },
        {
            name: "Pois",
            friends: [
                "Carotte",
                "Concombre",
                "Laitue",
                "Epinard",
                "Tomate",
                "Haricot"

            ],
            enemies: [
            ],
            quantity: 0,
            isSelected: false,
            icon: 'Pois.svg'

        },
        {
            name: "Radis",
            friends: [
                "Tomate",
                "Courge",
                "Choux",
                "Concombre",
                "Laitue"
            ],
            enemies: [
            ],
            quantity: 0,
            isSelected: false,
            icon: 'Radis.svg'

        },
        {
            name: "Tomate",
            friends: [
                "Carotte",
                "Oignon",
                "Pois",
                "Poireau",
                "Radis"

            ],
            enemies: [
                "Choux",

            ],
            quantity: 0,
            isSelected: false,
            icon: 'Tomate.svg'


        },

        {
            name: "Patate",
            friends: [
                "Courge",
                "Ail",
                "Haricot",
                "Pois",
                "Choux",
                "Laitue",
                "Oignon",
                "Radis"

            ],
            enemies: [

            ],
            quantity: 0,
            isSelected: false,
            icon: '../img/Patate'
        }
    ]


    plantListsToExport = new BehaviorSubject(this.plantLists)

    switchOnOne(i: number) {
        this.plantLists[i].isSelected = true;
        this.plantListsToExport.next(this.plantLists)

    }

    switchOffOne(i: number) {
        this.plantLists[i].isSelected = false;
        this.plantListsToExport.next(this.plantLists)

    }

    selectAll() {

        for (let plantList of this.plantLists) {
            plantList.isSelected = true;
        }
        this.plantListsToExport.next(this.plantLists)
    }

    unselectAll() {
        for (let plantList of this.plantLists) {
            plantList.isSelected = false;
        }
        this.plantListsToExport.next(this.plantLists)

    }

    showNumberInput(i: number) {
        if (this.plantLists[i].isSelected === false) {
            this.switchOnOne(i)

        }
        else {
            this.switchOffOne(i);
        }
        this.plantListsToExport.next(this.plantLists)


    }

    modifyItemQuantity(i: number, newValue: number) {
        this.plantLists[i].quantity = newValue;
        this.plantListsToExport.next(this.plantLists)

    }

    itIsSelected(i: number) {
        if (this.plantLists[i].isSelected === false) {
            return 'grey';
        }
        else return 'LawnGreen';
    }

    getSelectedPlantsList() {
        let selectedPlantLists: any = []
        this.plantLists.forEach(plantList => {
            if (plantList.isSelected === true) {
                selectedPlantLists.push(plantList)
            }
        })
        return selectedPlantLists
    }

}