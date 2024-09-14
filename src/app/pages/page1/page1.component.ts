import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styles: [
  ]
})
export class Page1Component implements OnInit, AfterViewInit, OnDestroy {
  seconds = 0;
  timerSubscription!: Subscription;
  constructor() { 
    console.log("constructor");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy")
    this.timerSubscription.unsubscribe();
  }

  ngOnInit(): void {
    console.log("ngOnInit");
    this.timerSubscription = interval(1000).subscribe(value => {
      this.seconds = value;
    })
  }

}
