import { Component } from '@angular/core';

import { navItems } from './_nav';
import { ClassToggleService } from '@coreui/angular';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {

  public navItems = navItems;

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };

  constructor(private classToggler: ClassToggleService,private toastr: ToastrService, private service: AuthService) {}
userName : string = '';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userName = localStorage.getItem('fullName') || '';
  }
  isSubMenuVisible: boolean = false;

  showSubMenu() {
    this.isSubMenuVisible = true;
  }

  hideSubMenu() {
    this.isSubMenuVisible = false;
  }

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
