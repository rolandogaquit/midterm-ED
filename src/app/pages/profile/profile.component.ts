import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentNav: string = '';
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navClick(current:string) {
    this.currentNav = current;
  }

}
