import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { pipe } from 'rxjs';
import { TokenStorageService } from 'src/app/core/services/auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  isSuccess!: boolean;
  isFail!: boolean;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private tokenService: TokenStorageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if(this.tokenService.getUser() !== null){
      this.router.navigate(['/user/panel']);
    }

    this.form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.max(30)])),
      password: new FormControl('', Validators.compose([Validators.required, Validators.max(30)]))
    });
  }

  submit(): void {
    this.auth.login(this.form.get('email')?.value, this.form.get('password')?.value).subscribe(
      data => {
        if(data && data.token) {
          this.tokenService.saveToken(data.token);
          this.tokenService.saveUser(this.tokenService.decodeToken(data.token).firstName);
          this.isSuccess = true;
          this.isFail = false;
          this.tokenService.setEmail(this.form.get('email')?.value);
          this.router.navigate(['/user/panel']);
        }
    }, err => {
      if(err.error.error == 'Unauthorized'){
        console.log('Usuário ou senha incorretos');
        this.errorMessage = 'Usuário ou senha incorretos';
        this.isSuccess = false;
        this.isFail = true;
      }
    })
  }

}
