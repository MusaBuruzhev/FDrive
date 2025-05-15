import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './servis/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fdrivi';

  constructor(public auth: AuthService) {
  
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