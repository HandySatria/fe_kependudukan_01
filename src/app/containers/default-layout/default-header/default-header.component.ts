import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

   userName : string = localStorage.getItem('username') || '';

   constructor(private classToggler: ClassToggleService,private toastr: ToastrService, private service: AuthService) {
     super();
    }
    ngOnInit(): void {
      this.userName = localStorage.getItem('username') || '';
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  rsult : any;
  logout(){

    this.service.logout().subscribe(
      (item) => {
        localStorage.clear();
        this.toastr.success('Logout Berhasil');
      },
      (error) => {
        // Handle HTTP error
          this.toastr.warning('logout gagal');
      }
    );

  }


}
