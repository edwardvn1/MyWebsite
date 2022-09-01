import { Component, Input, OnInit } from '@angular/core';
import { PanelService } from 'src/app/panel.service';
import { Tile } from '../tile.model';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  isVisible: boolean = false;
  newTiles: Tile[] = [];

  constructor(private panelService: PanelService) { }

  ngOnInit(): void {
    this.newTiles = this.panelService.panels;
  }



}
