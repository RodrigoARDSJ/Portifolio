import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private icons: MatIconRegistry) {  
    this.icons.addSvgIcon("github", "assets/github.svg"); 
    this.icons.addSvgIcon("linkedin", "assets/linkedin.svg"); }
  title = 'portifolio';
}
