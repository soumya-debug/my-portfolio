import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.addSmoothScrolling();
  }

  addSmoothScrolling(): void {
    const links = this.el.nativeElement.querySelectorAll('.nav-link');

    links.forEach((link: any) => {
      link.addEventListener('click', (event: Event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          this.renderer.setProperty(
            document.scrollingElement || document.documentElement,
            'scrollTop',
            targetElement.offsetTop
          );
        }
      });
    });
  }
}
