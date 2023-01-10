import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularpassdata';
  
   constructor() { }

  ngOnInit() {
    // this.parentMessage ="Code-Android-example.blogspot.com";
  }

  getValues(val: any) {
    console.log("Hi",val)
  }

}
