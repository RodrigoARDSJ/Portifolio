import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private observer: BreakpointObserver) { }
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((resposta) =>{
      if(resposta.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    })
  }

}
