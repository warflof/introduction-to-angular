import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  @Input() locationList: HousingLocation[] = [];
  results: HousingLocation[] = [];

  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();

  constructor() { }

  ngOnInit(): void {
  }

  searchHousingLocations(searchText: string) {
    if (!searchText) {
      this.results = [];
    };
    this.results = this.locationList.filter(
      (location: HousingLocation) => location.city.toLowerCase().includes(searchText.toLowerCase())
    )
  }  

  selectLocation(location: HousingLocation) {
    this.locationSelectedEvent.emit(location);
  }

}