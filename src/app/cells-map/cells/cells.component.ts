import { Component, OnInit, Input } from '@angular/core';
import { ItemSelectService } from 'src/app/services/item-select.service';
import { MapSettingService } from 'src/app/services/map-settings.service';

@Component({
  selector: 'app-cells',
  templateUrl: './cells.component.html',
  styleUrls: ['./cells.component.scss']
})
export class CellsComponent implements OnInit {
  @Input() indexHeight;
  @Input() indexWidth;
  @Input() indexCell;
  @Input() content;
  @Input() cellIsDisable

  constructor(public mapSettingService: MapSettingService, public itemSelectService: ItemSelectService) {
  }

  getPlantIcon() {
    let icon: any = `../../../assets/img/${this.content}.svg`
    console.log(icon)
    if (this.content !== "content initial") {
      /*let allPlants: Array<any> = this.itemSelectService.plantLists
 
       allPlants.forEach(plant => {
         if (this.content === plant.name) {
           console.log(plant.icon)
           // 'url(' {{+ getPlantIcon() +}} ')'    ${myName}
           console.log(plant.icon)*/
      return icon
    }
    else return null

  }

  getIconStyle() {
    if (this.cellIsDisable === true) {
      return "peru"
    }
    if (this.content === "Tomate") {
      return "tomato"
    }
    if (this.content === "Radis") {
      return "pink"
    }
    if (this.content === "Patate") {
      return "yellow"
    }
    else return null
  }

  disableCell() {
    if (this.cellIsDisable === false) {
      this.cellIsDisable = true
      this.mapSettingService.changeCellData(this)
    }
    else {
      this.cellIsDisable = false
      this.mapSettingService.changeCellData(this)
    }
  }

  clearContentCell() {
    this.content = null
    this.mapSettingService.changeCellData(this)
  }

  returnAdjacentCellContent() {
    let adjacentCells: Array<any> = this.mapSettingService.getAdjacentCells(this.indexHeight, this.indexWidth, this.indexCell)
    let adjacentCellsContent: Array<any> = []

    adjacentCells.forEach(cell => {
      if (adjacentCellsContent.includes(cell.content) === false && cell.cellIsDisable === false) {
        adjacentCellsContent.push(cell.content)
      }
    });
    return adjacentCellsContent
  }

  determinateEnemiesOfAdjacentCells() {
    let adjacentCellsContent: Array<any> = this.returnAdjacentCellContent()
    let consideredEnemiesPlantLists: Array<any> = []
    adjacentCellsContent.forEach(content => {
      this.itemSelectService.plantLists.forEach(plant => {
        if (content === plant.name && plant.enemies.length !== 0) {
          plant.enemies.forEach(enemy => {
            if (consideredEnemiesPlantLists.includes(enemy) === false) {
              consideredEnemiesPlantLists.push(enemy)
            }
          })
        }
      })
    })
    return consideredEnemiesPlantLists
  }
  determinateFriendsOfAdjacentCells() {
    let adjacentCellsContent: Array<any> = this.returnAdjacentCellContent()
    let consideredFriendsPlantLists: Array<any> = []
    adjacentCellsContent.forEach(content => {
      this.itemSelectService.plantLists.forEach(plant => {
        if (content === plant.name && plant.friends.length !== 0) {
          plant.friends.forEach(friend => {
            if (consideredFriendsPlantLists.includes(friend) === false) {
              consideredFriendsPlantLists.push(friend)
            }
          })
        }
      })
    })
    return consideredFriendsPlantLists
  }



  filterByEnemiesSelectOption() {
    let allPlants: Array<any> = this.itemSelectService.plantLists
    let plantOnSelectOption: Array<any> = []
    let adjacentCellsContent: Array<any> = this.returnAdjacentCellContent()
    let enemiesOfAdjacentCells: Array<any> = this.determinateEnemiesOfAdjacentCells()

    allPlants.forEach(elem => {
      const checkAdjacent = (currentValue) => currentValue !== elem.name;
      if (enemiesOfAdjacentCells.every(checkAdjacent) === true && plantOnSelectOption.includes(elem) === false) {
        plantOnSelectOption.push(elem)
      }
    })

    allPlants.forEach(plantItem => {
      plantItem.enemies.forEach(enemy => {
        if (adjacentCellsContent.includes(enemy) === true) {
          let plantItemIndex: number = plantOnSelectOption.indexOf(plantItem)
          if (plantItemIndex !== -1) {
            plantOnSelectOption.splice(plantItemIndex, 1)
          }
        }
      });
    })
    console.log(plantOnSelectOption)
    return plantOnSelectOption
  }

  getFriendship(plant: any) {
    let adjacentCellsContent = this.returnAdjacentCellContent()
    let friendsOfAdjacentCells = this.determinateFriendsOfAdjacentCells()
    let plantLists = this.filterByEnemiesSelectOption()
    console.log(plant.name)
    if (friendsOfAdjacentCells.includes(plant.name)) {
      return "LawnGreen"

      if (plant.friends.length !== 0) {

      }
    }

    else return "white"
  }

  selectChangeHandler(event: any) {
    let plantType: String = this.content
    console.log(this)
    plantType = event.target.value;
    if (plantType !== "content initial" && plantType !== "Choose à vegetable")
      this.content = plantType
    this.mapSettingService.changeCellData(this)
  }

  showDetails() {
    console.log(this)
    console.log(this.mapSettingService.mapSettings.initialMap.value[this.indexHeight][this.indexWidth][this.indexCell])
  }



  ngOnInit() {



  }
}
