import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularpassdata';
  pokemon: string = "";
   constructor() { }

  ngOnInit() {
  }

  handleClick(value: any) {
    console.log(value);
  }
}
