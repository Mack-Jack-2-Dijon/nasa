import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'nasa';
  imgUrl: any;
  datePicture: any;
  constructor(public imgOfTheDay: NasaService) {}

  ngOnInit(): void {
    this.imgOfTheDay
      .getImageOfTheDay()
      .subscribe((items) => (this.imgUrl = items.url));
    this.imgOfTheDay
      .getImageOfTheDay()
      .subscribe((items) => (this.datePicture = items.date));
  }
}
