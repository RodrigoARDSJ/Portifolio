import { Component, OnInit, Sanitizer, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const svg1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
<path d="M12,2.247A10,10,0,0,0,8.837,21.735c.5.094.684-.215.684-.481,0-.237-.009-.867-.013-1.7-2.781.6-3.368-1.342-3.368-1.342A2.648,2.648,0,0,0,5.027,16.75c-.905-.62.071-.608.071-.608a2.1,2.1,0,0,1,1.531,1.03A2.131,2.131,0,0,0,9.542,18a2.129,2.129,0,0,1,.633-1.337c-2.221-.25-4.555-1.11-4.555-4.942A3.859,3.859,0,0,1,6.649,9.042,3.558,3.558,0,0,1,6.737,6.4s.837-.268,2.75,1.025a9.415,9.415,0,0,1,5,0c1.9-1.293,2.737-1.025,2.737-1.025a3.652,3.652,0,0,1,.1,2.647,3.87,3.87,0,0,1,1.025,2.683c0,3.842-2.337,4.687-4.562,4.933a2.4,2.4,0,0,1,.675,1.85c0,1.339-.013,2.414-.013,2.739,0,.262.175.575.688.475A9.988,9.988,0,0,0,12,2.247" />
</svg>`;

const svg2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.039,19.043H16.078V14.4c0-1.106-.023-2.53-1.544-2.53-1.544,0-1.78,1.2-1.78,2.449v4.722H9.792V9.5h2.845v1.3h.039a3.12,3.12,0,0,1,2.808-1.542c3,0,3.556,1.975,3.556,4.546v5.238ZM6.447,8.194A1.72,1.72,0,1,1,8.168,6.473,1.719,1.719,0,0,1,6.447,8.194ZM7.932,19.043H4.963V9.5H7.932ZM20.521,2H3.476A1.458,1.458,0,0,0,2,3.441V20.559A1.458,1.458,0,0,0,3.476,22H20.518A1.463,1.463,0,0,0,22,20.559V3.441A1.464,1.464,0,0,0,20.518,2Z"/></svg>`;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(
    private observer: BreakpointObserver,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIconLiteral(
      'github',
      this.sanitizer.bypassSecurityTrustHtml(svg1)
    );
    this.iconRegistry.addSvgIconLiteral(
      'linkedin',
      this.sanitizer.bypassSecurityTrustHtml(svg2)
    );
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe((resposta) => {
      if (resposta.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
}
