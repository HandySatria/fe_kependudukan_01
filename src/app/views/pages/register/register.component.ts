import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private http: HttpClient,private builder: FormBuilder, private toastr: ToastrService, private service: AuthService,
    private router: Router) { }

  loginForm = this.builder.group({
    username: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.required)
  });

  isMasuk : boolean = true;
  isDaftar : boolean = false;
  reqObj : any;
  result : any;
  login(){
      this.reqObj = {
        username : this.loginForm.controls.username.value,
        password : this.loginForm.controls.password.value
      }
      this.service.login(this.reqObj).subscribe(
        (item) => {
          this.result = item;

          if (this.result.data != null) {
            localStorage.setItem('username', this.result.data.username);
            localStorage.setItem('role_code', this.result.data.role_code);
            localStorage.setItem('token', this.result.data.token);
            this.router.navigate(['']);
            this.toastr.success('Login Success');
          } else {
            // Check for 401 Unauthorized status
            if (this.result.status === 401) {
              this.toastr.warning('Invalid username or password');
            } else {
              this.toastr.warning('An error occurred during login');
            }
          }
        },
        (error) => {
          // Handle HTTP error
          if (error.status === 401) {
            this.toastr.warning('Invalid username or password');
          } else {
            this.toastr.warning('An error occurred during login');
          }
        }
      );
    }

    daftar(){
      this.isMasuk = false;
      this.isDaftar  = true;
    }
    masuk(){
      this.isMasuk = true;
      this.isDaftar  = false;

    }


}
