import { Component, OnInit, Input } from '@angular/core';
import { ItemSelectService } from '../services/item-select.service';

@Component({
  selector: 'app-item-select-plants',
  templateUrl: './item-select-plants.component.html',
  styleUrls: ['./item-select-plants.component.scss']
})
export class ItemSelectPlantsComponent  {

  constructor(public itemSelectService: ItemSelectService) {
   }



  getNewColor() {
    if(this.itemSelectService.plantLists[this.index].isSelected === true) {
      return 'LawnGreen';
    } else  {
      return 'GhostWhite';
    }
  }

  @Input() plantName: string ="";
  @Input() plantIsSelected!: boolean;

  // A REVOIR, POURQUOI LE !
  @Input() index!: number;
  @Input() quantity!:number;

  ngOnInit(): void {
    
  }

}
