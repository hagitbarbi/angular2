import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  selectedCategory : string = "";
  selectedSortBy: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
