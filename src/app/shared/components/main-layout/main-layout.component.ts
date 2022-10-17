import { AfterContentInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  host: {
    "(window:click)": "onClick()"
  }
})
export class MainLayoutComponent implements OnInit, AfterContentInit {

  @ViewChild('menuButton') menuButton: ElementRef;
  @ViewChild('subMenuList') menu: ElementRef;

  loading = false
  accName = localStorage.getItem('login')
  openSubMenu = false
  img:string

  constructor(private auth: AuthService, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.loading = true
    this.auth.getUsers().subscribe((responseObj) => {
      let response = (Object.values(responseObj))
      let user = response.find((user) => {
        return user.accName == localStorage.getItem('login')
      })
      this.img = user.img
    })
  }

  ngAfterContentInit(): void {
    this.loading = false
  }

  logout(){
    this.auth.logout()
  }

  openSubMenuList($event){
    $event.stopPropagation();
    this.openSubMenu = !this.openSubMenu;
  }

  onClick() {
    this.openSubMenu = false
  }

}
