import { Component } from '@angular/core';

@Component({
  selector: 'app-akun',
  templateUrl: './akun.component.html',
  styleUrls: ['./akun.component.scss']
})
export class AkunComponent {
  isUsername : boolean = false;
  isPassword : boolean = false;
  selectUsername : string = 'username';
  selectPassword : string = 'password';
  constructor(){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.isUsername = true
  }

  selectNavLink (selected : any){
    if (selected === this.selectUsername){
      this.isUsername = true;
      this.isPassword = false;
    }
    else if ( selected === this.selectPassword){
      this.isUsername = false;
      this.isPassword = true;
    }
  }

}
