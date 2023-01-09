import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// NGxs 


import { ScrollMenuComponent } from './scroll-menu/scroll-menu.component';
import { GlobalSettingsComponent } from './global-settings/global-settings.component';
import { DimensionGardenComponent } from './dimension-garden/dimension-garden.component';
import { DimensionGardenField } from './dimension-garden/dimension-garden-field.component';
import { SelectPlantsComponent } from './select-plants/select-plants.component';
import { ItemSelectPlantsComponent } from './item-select-plants/item-select-plants.component';
import { ItemSelectService } from './services/item-select.service';
import { MapSettingService } from './services/map-settings.service';
import { MapComponent } from './map/map.component';
import { CellsComponent } from './cells-map/cells/cells.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AcceuilTestComponent } from './acceuil-test/acceuil-test.component';
import { AcceuilTest2Component } from './acceuil-test2/acceuil-test2.component';


@NgModule({
  declarations: [
    AppComponent,
    ScrollMenuComponent,
    GlobalSettingsComponent,
    DimensionGardenComponent,
    DimensionGardenField,
    SelectPlantsComponent,
    ItemSelectPlantsComponent,
    MapComponent,
    CellsComponent,
    AcceuilTestComponent,
    AcceuilTest2Component,

  ],

  imports: [

    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,

    NgbModule

  ],
  providers: [
    ItemSelectService,
    MapSettingService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
