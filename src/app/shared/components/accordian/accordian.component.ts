import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements OnInit {
  isCollapsed : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onHeadingClick(){
    this.isCollapsed = !this.isCollapsed
  }

}
