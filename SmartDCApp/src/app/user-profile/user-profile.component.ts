import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  title: string = "My first AGM project";
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
