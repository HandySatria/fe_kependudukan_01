import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private builder: FormBuilder, private service: AuthService, private router: Router,
    private toastr: ToastrService,private http: HttpClient) {

  }

  registerform = this.builder.group({
    username: this.builder.control('', Validators.compose([Validators.required, Validators.minLength(5)])),
    name: this.builder.control('', Validators.required),
    password: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    // email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
    gender: this.builder.control('male'),
    role: this.builder.control(''),
    isactive: this.builder.control(false)
  });
  proceedregister() {
    if (this.registerform.valid) {
      this.service.RegisterUser(this.registerform.value).subscribe(
      (response : any) => {
          if (!response.errors) { // Ubah kondisi di sini
            this.toastr.success('Registered successfully. Please contact admin for enable access.');
            this.router.navigate(['login']);
          } else {
            this.toastr.warning(response.errors, 'Warning');
          }
          console.log(response);
      },
      (error: any) => {
        // Handle error jika terjadi kesalahan dalam permintaan HTTP
        console.error('Error occurred:', error);
        this.toastr.error(error.error.errors, 'Error');
      });
    } else {
      this.toastr.warning('Please enter valid data.')
    }
  }

}
