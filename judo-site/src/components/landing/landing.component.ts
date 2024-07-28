import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})

export class LandingComponent {
  isVisible: boolean = false
  visibility: boolean = this.isVisible
  constructor() {
  }
  ngOnInit() {
  }
  showModal() {
    this.isVisible = true
    console.log(this.isVisible)
  }
  onClose(){
    this.isVisible = false
    console.log(this.isVisible)
  }
}