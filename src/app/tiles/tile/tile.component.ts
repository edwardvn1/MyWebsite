import { Component, Input, OnInit, Output } from '@angular/core';
import { PanelService } from 'src/app/panel.service';
import { Tile } from '../tile.model';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
})

export class TileComponent implements OnInit {

  @Input() newTile: Tile = new Tile("", "", 0, false);
  @Input() screenSize = '';

  newTiles: Tile[] = [];

  @Output() tile = new Tile("", "", 0, false);

  constructor(private panelService: PanelService) { }

  ngOnInit(): void {
    this.newTiles = this.panelService.panels;
  }
  
  setActiveTile(activeTileNumber: number) {
    this.panelService.setActivePanel(activeTileNumber);
  }
 
  getColor(activeTile: boolean){
    return activeTile ? "rgb(254, 155, 61)" : "rgba(0,0,0,0.1)";
  }

}
