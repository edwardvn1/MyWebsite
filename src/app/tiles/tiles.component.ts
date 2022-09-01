import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PanelService } from '../panel.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css'],
})
export class TilesComponent implements OnInit {

  @Input() screenSize = '';
  newTiles = this.panelService.panels;

  constructor(private panelService: PanelService, private breakpointObserver: BreakpointObserver) {
  }

  ngOnInit(): void {
    this.newTiles = this.panelService.panels;
  }


}
