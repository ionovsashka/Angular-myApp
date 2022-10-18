import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {

  loading = false
  el: ElementRef

  constructor(private auth: AuthService, private router: Router, private elem: ElementRef) {
    this.el = elem
   }


  ngOnInit(): void {
    this.loading = true
    console.log('Страница загружена');
    this.loading = false
  }

  ngAfterViewInit(): void {
    console.log(this.el.nativeElement.parentNode)
  }

  logout(){
    this.auth.logout()
    this.router.navigate(['/auth', 'welcome'])
  }
}
