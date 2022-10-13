import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
  host: {
    "(window:click)": "onClick()"
  }
})
export class MainLayoutComponent implements OnInit {

  @ViewChild('menuButton') menuButton: ElementRef;
  @ViewChild('subMenuList') menu: ElementRef;

  accName = localStorage.getItem('login')
  openSubMenu = false

  constructor(private auth: AuthService, private renderer: Renderer2) {
  }

  ngOnInit(): void {
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
