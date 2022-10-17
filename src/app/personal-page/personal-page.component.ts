import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.scss']
})
export class PersonalPageComponent implements OnInit {

  loading = false
  img: string
  name:string
  surname: string
  direction: string
  technologies: string[]
  addInfo: string

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getUsers().subscribe((responseObj) => {
      let response = (Object.values(responseObj))
      let user = response.find((user) => {
        return user.accName == localStorage.getItem('login')
      })
      this.img = user.img
      this.name = user.name
      this.surname = user.surname
      this.direction = user.direction
      this.technologies = user.technologies
      this.addInfo = user.addInfo
    })
  }


}
