import { Component } from '@angular/core';
import { ModalDismissReasons, NgbDatepickerModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  closeResult = '';
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
   constructor(private modalService: NgbModal) { }

  ngOnInit() {
    // this.parentMessage ="Code-Android-example.blogspot.com";
  }

  getValues(val: any) {
    console.log("Hi",val)
  }

  open(content: any) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

	private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

}
