import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/shared/models/user';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;
  user: IUser;
  constructor(
    private accountService: AccountService,
    private toastrService: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  get email () {
    return this.loginForm.get('email');
  }
  get password () {
    return this.loginForm.get('password');
  }


  ngOnInit() {
    this.createLoginForm();
  }
  createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[0\\w-]{2,4}$'),
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    const reqObj = this.loginForm.value;
    this.accountService.login(reqObj).subscribe(
      (res:any) => {
          if (res) {
            this.toastrService.success('Login successfully')
            this.user = res;
            setTimeout(() => {
              this.router.navigateByUrl('')
            }, 1000);

          } else {
            this.toastrService.error('Login Failed!')
          }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
