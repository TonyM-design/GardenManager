import { Component, OnInit, Input } from '@angular/core';
import { ItemSelectService } from '../services/item-select.service';
import { MapSettingService } from '../services/map-settings.service';
@Component({
  selector: 'app-select-plants',
  templateUrl: './select-plants.component.html',
  styleUrls: ['./select-plants.component.scss']
})
export class SelectPlantsComponent implements OnInit {
  constructor(public itemSelectService: ItemSelectService, public mapSettingService : MapSettingService ) {

  }

  ngOnInit() {
    this.plantLists = this.itemSelectService.plantListsToExport.value
  }


  showListChecked: boolean = false;

  plantLists: any = []

  showItemList() {
    if (this.showListChecked === false) {
      this.showListChecked = true;
      console.log(this.plantLists)
    }
    else {
      this.showListChecked = false;
      this.itemSelectService.unselectAll();
      console.log(this.plantLists)

    }
  }

  dispatchPlantButton(){
    console.log(this.mapSettingService.mapSettings.height.getValue() , this.mapSettingService.mapSettings.width.getValue())
  this.mapSettingService.dispatchMap(this.mapSettingService.mapSettings.height.getValue() , this.mapSettingService.mapSettings.width.getValue())
  }
  testEtat(){
    console.log(this.mapSettingService.mapSettings)
  }



  @Input() plantName: string = "";
  @Input() plantIsSelected: boolean = false;


}
