import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup
  submitted: boolean
  error: string = ''
  token: string = '-'
  tokenTime: any

  constructor(public router: Router, public authService: AuthService) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      accountName: new FormControl('',[
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required
      ])
    })
  }

  login(){
    if(this.form.invalid){
      return
    }

    this.authService.getUsers().subscribe((responseObj) => {
      let response = (Object.values(responseObj))
      let userWithThisName = response.find((user) => {
        return user.accName == this.form.get('accountName').value
      })
      if(userWithThisName && userWithThisName.password == this.form.get('password').value){
        this.submitted = false
        this.router.navigate(['/'])
        let index = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm0123456789-"
        while(this.token.length < 30){
          this.token += index[Math.floor(Math.random() * index.length)]
        }
        this.tokenTime = new Date(new Date().getTime() + 3600000)
        localStorage.setItem('fb-token', this.token)
        localStorage.setItem('fb-token-time', this.tokenTime)
        localStorage.setItem('login', this.form.get('accountName').value)
        this.form.reset()
      } else{
        return this.error = 'Неверный логин или пароль'
      }
    })
  }
}
