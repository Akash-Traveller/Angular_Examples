import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-childcom',
  templateUrl: './childcom.component.html',
  styleUrls: ['./childcom.component.scss']
})
export class ChildcomComponent implements OnInit {

  constructor() { }

  message : string | undefined;
   @Input() childMessage: string | undefined;

  ngOnInit() {
   
  }

}
