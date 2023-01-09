import { Component, OnInit, Input } from '@angular/core';
import { MapSettingService } from '../services/map-settings.service';
import { ItemSelectService } from '../services/item-select.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(public mapSettingService: MapSettingService, public itemSelectService: ItemSelectService) {

    this.arrayCells = []
  }

  arrayCells: any = []
  private heightSubscription: Subscription = new Subscription;

  private widthSubscription: Subscription = new Subscription;

  ngOnInit() {
    this.heightSubscription = this.mapSettingService.mapSettings.height.subscribe((value) => {
      this.mapSettingService.dispatchMap(value, this.mapSettingService.mapSettings.width.getValue())
    }
    )
    this.widthSubscription = this.mapSettingService.mapSettings.width.subscribe((value) => {
      this.mapSettingService.dispatchMap(this.mapSettingService.mapSettings.height.getValue(), value)
    })

    this.mapSettingService.mapSettings.initialMap.subscribe(() => {
      this.arrayCells = this.mapSettingService.mapSettings.initialMap.getValue()
    })

  }
  ngOnDestroy() {
    console.log("MAP DESTROYED");
  }
}
