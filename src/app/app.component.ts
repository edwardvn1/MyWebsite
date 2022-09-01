import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, state, style, query, stagger } from '@angular/animations';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { bufferToggle, distinctUntilChanged, tap } from 'rxjs/operators';
import { Tile } from './tiles/tile.model';
import { PanelService } from './panel.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  
  ]
})
export class AppComponent implements OnInit {

  hovering = false;
  title = 'Edward\'s site';
  Breakpoints = Breakpoints;
  screenSize: string = '';
  temp = this.breakpointObserver;
  newTiles: Tile[] = [];
  showFlag: boolean = false;
  selectedImageIndex: number = -1;

  readonly breakpoint$ = this.breakpointObserver
    .observe([Breakpoints.Large, Breakpoints.Medium, Breakpoints.Small, '(min-width: 500px)'])
    .pipe(
      tap(value => console.log(value)),
      distinctUntilChanged()
    );

  constructor(private breakpointObserver: BreakpointObserver, private panelService: PanelService) { }

  ngOnInit(): void {
    this.breakpoint$.subscribe(() =>
      this.breakpointChanged()
    );
    this.newTiles = this.panelService.panels;
  }

  setHovering() {
    this.hovering = !this.hovering;
  }

  private breakpointChanged() {
    if (this.breakpointObserver.isMatched(Breakpoints.Handset)) {
      this.screenSize = 'other';
    }
    if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
      this.screenSize = 'large';
    } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      this.screenSize = 'medium';
    } else if (this.breakpointObserver.isMatched(Breakpoints.Small)) {
      this.screenSize = 'small';
    } else if (this.breakpointObserver.isMatched(Breakpoints.HandsetPortrait) || this.breakpointObserver.isMatched(Breakpoints.WebPortrait)) {
      this.screenSize = 'other';
    } else { this.screenSize = 'other'; }
  }

  showLightbox(index: number) {
    this.selectedImageIndex = index;
    this.showFlag = true;
  }

  closeEventHandler() {
    this.showFlag = false;
    this.selectedImageIndex = -1;
  }

  imageObject: Array<object> = [{
    image: '../../../assets/images/slider/1.jpg',
    title: 'A mathematics presentation on number systems'
  }, {
    image: '../../../assets/images/slider/2.jpg',
    title: 'A presentation on database fundamentals'
  }, {
    image: '../../../assets/images/slider/3.jpg',
    title: 'Explaining computational thinking'
  }, {
    image: '../../../assets/images/slider/4.jpg',
    title: 'A presentation teaching the basics of the POST startup test'
  }, {
    image: '../../../assets/images/slider/5.jpg',
    title: 'Part of the academic writing course I created - performing research at an undergrad level'
  }, {
    image: '../../../assets/images/slider/6.jpg',
    title: 'Part of the academic writing course I created - writing formally'
  }, {
    image: '../../../assets/images/slider/7.jpg',
    title: 'A presentation on teaching methods and including technology'
  }, {
    image: '../../../assets/images/slider/8.jpg',
    title: 'Teaching the basics of hardware'
  }
  ];

}
