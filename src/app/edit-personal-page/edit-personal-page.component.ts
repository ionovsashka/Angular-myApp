import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfile } from 'firebase/auth';
import { AuthService } from '../shared/services/auth.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-edit-personal-page',
  templateUrl: './edit-personal-page.component.html',
  styleUrls: ['./edit-personal-page.component.scss']
})
export class EditPersonalPageComponent implements OnInit {


  form: FormGroup
  id: string
  oldUser: UserProfile

  constructor(private auth: AuthService, private user: UserService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.auth.getUsers().subscribe((responseObj) => {
      for(let key in responseObj){
        if(responseObj[key].accName === localStorage.getItem('login')){
          this.id = key
          break
        }
      }
      let response = (Object.values(responseObj))
      let user = response.find((user) => {
        return user.accName == localStorage.getItem('login')
      })
      this.oldUser = user
      this.form = this.formBuilder.group({
        name: this.formBuilder.control(user.name ? user.name : '', Validators.required),
        surname: this.formBuilder.control(user.surname ? user.surname : '', Validators.required),
        direction: this.formBuilder.control(user.direction ? user.direction : ''),
        technologies: this.formBuilder.array(user.technologies ? [...user.technologies] : []),
        technology: this.formBuilder.control('', Validators.required),
        addInfo: this.formBuilder.control(user.addInfo ? user.addInfo : '')
      })
    })
  }

  addTechnology(){
    (this.form.get('technologies') as FormArray).push(new FormControl((this.form.get('technology').value)))
    this.form.get('technology').setValue('')
  }

  deleteTechnology(){
    this.form.get('technologies')['value'].pop();
    this.form.get('technologies')['controls'].pop();
    console.log(this.form.get('technologies'));
  }

  triggerClick(){

  }

  submit(){
      const updatingUser = {
        ...this.oldUser,
        name: this.form.get('name').value,
        surname: this.form.get('surname').value,
        direction: this.form.get('direction').value,
        technologies: this.form.get('technologies').value,
        addInfo: this.form.get('addInfo').value
      }
      this.user.updateUsers(updatingUser, this.id).subscribe(() => {
        this.router.navigate(['account', localStorage.getItem('login')])
        console.log(updatingUser);
      })
  }

}
