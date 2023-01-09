import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularpassdata';
  parentMessage : string | undefined;
  show= "blue";
  color="aqua";
  data=['akash','traveller','m3','demo'];
  data2 = [{
    name: 'akash',
    age: 20,
    email: 'abx@gmail.com'
  },
  {
    name: 'demo',
    age:30,
    email: 'sdffh@gmail.com'
  },
  {
    name: 'amn',
    age: 10,
    email: 'sdee@gmail.com'
  },
  {
    name: 'qwe',
    age: 0,
    email: 'qqww@gmail.com'
  }
]
   constructor() { }

  ngOnInit() {
    // this.parentMessage ="Code-Android-example.blogspot.com";
  }

  getValues(val: any) {
    console.log("Hi",val)
  }

}
