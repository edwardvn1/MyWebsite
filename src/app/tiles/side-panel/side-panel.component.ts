import { Component, OnInit } from '@angular/core';
import { PanelService } from 'src/app/panel.service';
import { Tile } from '../tile.model';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css'],
  animations: [
  ]
})
export class SidePanelComponent implements OnInit {
  showDefaultPanel = true;
  newTiles: Tile[] = [];


  constructor(private panelService: PanelService) {

  }

  ngOnInit(): void {
    this.newTiles = this.panelService.panels;
   
  }

  setPanels() {
    this.showDefaultPanel = false;
  }



}
