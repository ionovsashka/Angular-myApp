import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfile } from 'firebase/auth';
import { UserService } from 'src/app/shared/services/user.service';
import { MyValidators } from '../shared/my.validation';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-registration-base',
  templateUrl: './registration-base.component.html',
  styleUrls: ['./registration-base.component.scss']
})
export class RegistrationBaseComponent implements OnInit {

  submitted: boolean = false
  registration: FormGroup
  recovery = 'email'

  constructor(private router: Router, private users: UserService, private auth: AuthService) { }

  ngOnInit(): void {
    this.registration = new FormGroup({
      name: new FormControl('', [Validators.required]),
      surname: new FormControl('', [Validators.required]),
      accName: new FormControl('', [Validators.required], MyValidators.LoginMatch(this.auth)),
      password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]),
      passwordConfirmed: new FormControl(null, [Validators.required]),
      phone: new FormControl(null),
      email: new FormControl(null)
    },
    {
      validators: [MyValidators.PasswordConfirmed('password', 'passwordConfirmed')]
    }
    )
  }


  submit(){
    this.submitted = true
    if(this.registration.invalid){
      return
    }

    const user: UserProfile = {
      img: 'https://w7.pngwing.com/pngs/841/727/png-transparent-computer-icons-user-profile-synonyms-and-antonyms-android-android-computer-wallpaper-monochrome-sphere.png',
      name: this.registration.get('name').value,
      surname: this.registration.get('surname').value,
      accName: this.registration.get('accName').value,
      password: this.registration.get('passwordConfirmed').value,
      direction: '',
      technologies: new Array(),
      addInfo: ''
    }

    this.users.create(user).subscribe(() => {
      this.registration.reset()
      this.submitted = false
      this.router.navigate(['/auth', 'login'])
    })
  }

}
