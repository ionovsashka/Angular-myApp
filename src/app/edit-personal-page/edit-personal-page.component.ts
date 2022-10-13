import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-edit-personal-page',
  templateUrl: './edit-personal-page.component.html',
  styleUrls: ['./edit-personal-page.component.scss']
})
export class EditPersonalPageComponent implements OnInit {

  form: FormGroup
  name: string
  surname: string
  direction: string
  technologies: string[] = []
  technology: string
  addInfo: string

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getUsers().subscribe((response) => {
      let user = response.find((user) => {
        return user.accName == localStorage.getItem('login')
      })
      this.name = user.name
      this.surname = user.surname
      this.direction = user.direction
      this.technologies = user.technologies
      this.addInfo = user.addInfo

      this.form = new FormGroup({
        name: new FormControl(this.name, Validators.required),
        surname: new FormControl(this.surname, Validators.required),
        direction: new FormControl(this.direction)
      })
    })
  }

  addTechnology(){
    this.technologies.push(this.technology)
    this.technology = ''
  }

  deleteTechnology(){
    this.technologies.pop()
  }

}
