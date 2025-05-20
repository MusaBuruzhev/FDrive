import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fdrivi';

  constructor() {
  
    window.addEventListener('scroll', this.handleScroll);
  }

 
  handleScroll = () => {
    const header = document.querySelector('.site-header');
    if (header) {
      if (window.scrollY > 400) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }
}