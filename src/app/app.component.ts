import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare class Pageable {
  constructor(selector: string, options: any);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet],
})
export class AppComponent implements AfterViewInit {
  title = 'space-view-app';

  ngAfterViewInit(): void {
    new Pageable('#container', {
      childSelector: '[data-anchor]', // CSS3 selector string for the pages
      anchors: [], // define the page anchors
      pips: true, // display the pips
      animation: 300, // the duration in ms of the scroll animation
      freeScroll: false, // allow manual scrolling when dragging instead of automatically moving to next page
      events: {
        wheel: true, // enable / disable mousewheel scrolling
        mouse: true, // enable / disable mouse drag scrolling
        touch: true, // enable / disable touch / swipe scrolling
        keydown: true, // enable / disable keyboard navigation
      },
      onInit: function () {
        // do something when the instance is ready
      },
      onUpdate: function () {
        // do something when the instance updates
      },
      onBeforeStart: function () {
        // do something before scrolling begins
      },
      onStart: function () {
        // do something when scrolling begins
      },
    });
  }
}
