import { Component, Input } from '@angular/core';
import { MapSettingService } from '../services/map-settings.service';


@Component({
  selector: 'app-dimension-garden-field',
  templateUrl: './dimension-garden-field.component.html',
})
export class DimensionGardenField {

  width: number = 0;
  height: number = 0;

  constructor(public mapSettingService: MapSettingService) {
    this.width = this.mapSettingService.mapSettings.width.getValue();
    this.height = this.mapSettingService.mapSettings.height.getValue();


  }
  onChangeBehaviorSubjectHeight (event : number) {
    this.mapSettingService.mapSettings.height.next(event)
    console.log( "height",this.mapSettingService.mapSettings.height.getValue(), "width:", this.mapSettingService.mapSettings.width.getValue())
  }
  onChangeBehaviorSubjectWidth (event : number) {
    this.mapSettingService.mapSettings.width.next(event) 
    console.log( "height",this.mapSettingService.mapSettings.height.getValue(), "width:", this.mapSettingService.mapSettings.width.getValue())
  }
 
}