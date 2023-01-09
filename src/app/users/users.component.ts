import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input() hero: any;
  constructor() { }

  ngOnInit(): void {
  }

}
