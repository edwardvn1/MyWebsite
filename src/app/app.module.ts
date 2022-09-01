import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TilesComponent } from './tiles/tiles.component';
import { SidePanelComponent } from './tiles/side-panel/side-panel.component';
import { TileComponent } from './tiles/tile/tile.component';
import { PanelComponent } from './tiles/panel/panel.component';
import { PanelService } from './panel.service';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';

@NgModule({
  declarations: [
    AppComponent,
    TilesComponent,
    SidePanelComponent,
    TileComponent,
    PanelComponent
  ],
  providers:  [ PanelService ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgImageFullscreenViewModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
