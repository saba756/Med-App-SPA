import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../accounts.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  errors: string[];
  constructor(private fb: FormBuilder,
              private accountService: AccountService,
              private router: Router
             ) { }

             get email () {
              return this.registerForm.get('email')
            }
            get password () {
              return this.registerForm.get('password')
            }
            get firstName () {
              return this.registerForm.get('firstName');
            }
            get lastName () {
              return this.registerForm.get('lastName');
            }
            get address () {
              return this.registerForm.get('adress');
            }
            get city () {
              return this.registerForm.get('city');
            }
            get zipCode () {
              return this.registerForm.get('zipcode');
            }
            get phoneno () {
              return this.registerForm.get('phoneno');
            }
  ngOnInit(): void {
                this.createRegisterForm();
                console.log("hey", this.createRegisterForm());
              }

  createRegisterForm() {
  this.registerForm = this.fb.group({
                 displayName: [null , [Validators.required]],
                 email: [null,
                  [Validators.required,Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[0\\w-]{2,4}$')]
                  ],
                  password: [null, [Validators.required]],
                  firstName:[null, [Validators.required]],
                  lastName:[null, [Validators.required]],
                  address:[null, [Validators.required]],
                  city:[null, [Validators.required]],
                  zipCode:[null, [Validators.required]],
                  phoneno:[null, [Validators.required]]
               });
             }
             onSubmit(){
               console.log(" naviagting ....")
              this.accountService.register(this.registerForm.value).subscribe(
                response =>{
                  console.log(response);
                 this.router.navigateByUrl('');
                }, error =>{
                  console.log(error);
                  this.errors = error.errors;
                }
              );
              }

}
