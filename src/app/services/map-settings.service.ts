import { ItemSelectService } from "./item-select.service"
import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: 'root'
})

export class MapSettingService {

    constructor(public itemSelectService: ItemSelectService) {

    }

    mapSettings =
        {
            height: new BehaviorSubject(0),
            width: new BehaviorSubject(0),
            groundType: "null",
            initialMap: new BehaviorSubject(Array()),
            deadCells: [],
            selectedPlantLists: this.itemSelectService.plantListsToExport.subscribe((value) => { return (value) })

        }


    dispatchDataOnMap(addCells) {
        console.log("DECLENCHEMENT DISPATCHDATAONMAP() ")
        const currentValue = this.mapSettings.initialMap.getValue();
        const updatedValue = currentValue.concat(addCells)
        this.mapSettings.initialMap.next(updatedValue);
    }

    deleteDataOnMap() {
        console.log("DECLENCHEMENT DELETEONMAP() ")
        const currentValue = this.mapSettings.initialMap.getValue();
        const updatedValue = currentValue.pop()
        // this.mapSettings.initialMap.next(updatedValue);
    }

    generateMap(height: any, width: any) {
        let addCells: object[] = []

        for (let i = 0; i < height; i++) {
            addCells[i] = new Array(width)
            for (let j = 0; j < width; j++) {
                addCells[i][j] = new Array()
                for (let k = 0; k < 4; k++) {
                    addCells[i][j][k] = new Object(
                        {
                            indexHeight: i,
                            indexWidth: j,
                            indexCell: k,
                            content: "content initial",
                            cellIsDisable: false

                        }
                    )

                }
            }
        }
        return this.mapSettings.initialMap.next(addCells)
    }

    changeCellData(newData: any) {
        let addCell = this.mapSettings.initialMap.getValue()

        addCell[newData.indexHeight][newData.indexWidth][newData.indexCell].indexHeight = newData.indexHeight
        addCell[newData.indexHeight][newData.indexWidth][newData.indexCell].indexWidth = newData.indexWidth
        addCell[newData.indexHeight][newData.indexWidth][newData.indexCell].indexCell = newData.indexCell
        addCell[newData.indexHeight][newData.indexWidth][newData.indexCell].content = newData.content
        addCell[newData.indexHeight][newData.indexWidth][newData.indexCell].cellIsDisable = newData.cellIsDisable

        this.mapSettings.initialMap.next(addCell)

    }



    importOldData(oldData: any) {
        // old data from dispatchMap() contain map's datas before map's reloading
        // current map contains map's datas after reloading
        const currentMap = this.mapSettings.initialMap.getValue()
        // for each cells on map
        // if they was on new map => apply old data's cells 
        for (let i = 0; i < oldData.length; i++) {
            for (let j = 0; j < oldData[i].length; j++) {
                for (let k = 0; k < 4; k++) {
                    if (currentMap[i] !== undefined && currentMap[i][j] !== undefined) {

                        currentMap[i][j][k].indexHeight = oldData[i][j][k]
                        currentMap[i][j][k].indexWidth = oldData[i][j][k]
                        currentMap[i][j][k].indexCell = oldData[i][j][k]
                        currentMap[i][j][k].content = oldData[i][j][k]
                        currentMap[i][j][k].cellIsDisable = oldData[i][j][k]
                        currentMap[i][j][k] = oldData[i][j][k]
                    }
                    else { console.log("CELLULE N'EXISTE PLUS ") }
                }
            }
        }
        return this.mapSettings.initialMap.next(currentMap)
    }

    dispatchMap(height: any, width: any) {
        let addCells: object[] = []
        // NO MAP ? -> GENERATE MAP
        if (this.mapSettings.initialMap.value.length === 0) {
            this.generateMap(height, width)
        }
        // MAP IS EXIST ? GENERATE MAP WITH OLD + NEW DATA
        else if (this.mapSettings.initialMap.value.length !== 0) {
            //SAVE OLD DATA
            const currentData = this.mapSettings.initialMap.getValue();
            //GENERATE MAP
            this.generateMap(height, width)
            // IMPORT OLD DATA
            this.importOldData(currentData)
            // DISPATCH DATA (old + new current data)
            //  this.dispatchData(currentData)

        }
    }

    // FIN DISPATCHMAP

    getAdjacentCells(i: number, j: number, k: number) {
        let adjacentCells: object[] = []
        let currentMap = this.mapSettings.initialMap.getValue()

        switch (currentMap[i][j][k].indexCell) {
            //ok
            case 0:
                currentMap[i][j][1] === undefined ? null : adjacentCells.push(currentMap[i][j][1])
                currentMap[i][j][2] === undefined ? null : adjacentCells.push(currentMap[i][j][2])
                currentMap[i][j][3] === undefined ? null : adjacentCells.push(currentMap[i][j][3])
                currentMap[i][j - 1] === undefined ? null : currentMap[i][j - 1][1] === undefined ? null : adjacentCells.push(currentMap[i][j - 1][1])
                currentMap[i][j - 1] === undefined ? null : currentMap[i][j - 1][3] === undefined ? null : adjacentCells.push(currentMap[i][j - 1][3])
                currentMap[i - 1] === undefined ? null : currentMap[i][j - 1] === undefined ? null : currentMap[i - 1][j - 1][3] === undefined ? null : adjacentCells.push(currentMap[i - 1][j - 1][3])
                currentMap[i - 1] === undefined ? null : currentMap[i - 1][j][2] === undefined ? null : adjacentCells.push(currentMap[i - 1][j][2])
                currentMap[i - 1] === undefined ? null : currentMap[i - 1][j][3] === undefined ? null : adjacentCells.push(currentMap[i - 1][j][3])

                break;

            //ok
            case 1:
                currentMap[i][j][0] === undefined ? null : adjacentCells.push(currentMap[i][j][0])
                currentMap[i][j][2] === undefined ? null : adjacentCells.push(currentMap[i][j][2])
                currentMap[i][j][3] === undefined ? null : adjacentCells.push(currentMap[i][j][3])
                currentMap[i - 1] === undefined ? null : adjacentCells.push(currentMap[i - 1][j][2])
                currentMap[i - 1] === undefined ? null : adjacentCells.push(currentMap[i - 1][j][3])
                currentMap[i - 1] === undefined ? null : currentMap[i - 1][j + 1] === undefined ? null : currentMap[i - 1][j + 1][2] === undefined ? null : adjacentCells.push(currentMap[i - 1][j + 1][2])
                currentMap[i][j + 1] === undefined ? null : currentMap[i][j + 1][0] === undefined ? null : adjacentCells.push(currentMap[i][j + 1][0])
                currentMap[i][j + 1] === undefined ? null : currentMap[i][j + 1][2] === undefined ? null : adjacentCells.push(currentMap[i][j + 1][2])
                break;


            //ok
            case 2:

                currentMap[i][j][0] === undefined ? null : adjacentCells.push(currentMap[i][j][0])
                currentMap[i][j][1] === undefined ? null : adjacentCells.push(currentMap[i][j][1])
                currentMap[i][j][3] === undefined ? null : adjacentCells.push(currentMap[i][j][3])
                currentMap[i][j - 1] === undefined ? null : currentMap[i][j - 1][1] === undefined ? null : adjacentCells.push(currentMap[i][j - 1][1])
                currentMap[i][j - 1] === undefined ? null : currentMap[i][j - 1][3] === undefined ? null : adjacentCells.push(currentMap[i][j - 1][3])
                currentMap[i + 1] === undefined ? null : currentMap[i + 1][j - 1] === undefined ? null : currentMap[i + 1][j - 1][1] === undefined ? null : adjacentCells.push(currentMap[i + 1][j - 1][1])
                currentMap[i + 1] === undefined ? null : adjacentCells.push(currentMap[i + 1][j][0])
                currentMap[i + 1] === undefined ? null : adjacentCells.push(currentMap[i + 1][j][1])
                break;

            //ok
            case 3:

                currentMap[i][j][0] === undefined ? null : adjacentCells.push(currentMap[i][j][0])
                currentMap[i][j][1] === undefined ? null : adjacentCells.push(currentMap[i][j][1])
                currentMap[i][j][2] === undefined ? null : adjacentCells.push(currentMap[i][j][2])
                currentMap[i + 1] === undefined ? null : currentMap[i + 1][j][0] === undefined ? null : adjacentCells.push(currentMap[i + 1][j][0])
                currentMap[i + 1] === undefined ? null : currentMap[i + 1][j][1] === undefined ? null : adjacentCells.push(currentMap[i + 1][j][1])
                currentMap[i][j + 1] === undefined ? null : currentMap[i][j + 1][0] === undefined ? null : adjacentCells.push(currentMap[i][j + 1][0])
                currentMap[i][j + 1] === undefined ? null : currentMap[i][j + 1][2] === undefined ? null : adjacentCells.push(currentMap[i][j + 1][2])
                currentMap[i + 1] === undefined ? null : currentMap[i + 1][j + 1] === undefined ? null : currentMap[i + 1][j + 1][0] === undefined ? null : adjacentCells.push(currentMap[i + 1][j + 1][0])

                break;
        }
        return (adjacentCells)
    }







}
