import { Component, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { CarCardComponent } from '../car-card/car-card.component';
import { CarService, Car } from '../servis/car.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, CarCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  user = {
    name: '',
    phone: '',
    email: ''
  };
  cars: Car[] = [];
  formattedPhone = '+7 ';
  phoneInvalid = false;
  submitted = false;

  @ViewChild('logoBlock') logoBlock!: ElementRef;

  logoElement!: HTMLElement;
  isInViewport = false;
  lastScrollY = 0;
  currentTranslateY = 0;
  animationFrameId: number | null = null;

  // Настройки анимации
  scrollSensitivity = 0.5;        // Чувствительность к скроллу
  animationStartOffset = 200;     // Старт анимации за 100px до блока
  maxStep = 10;                    // Максимальный шаг за кадр
  centerThreshold = 100;           // Предельное значение для возврата к центру

  constructor(private carService: CarService, private router: Router) {
    this.cars = this.carService.getCars();
  }

  ngAfterViewInit() {
    this.logoElement = this.logoBlock.nativeElement.querySelector('.logo');

    const observer = new IntersectionObserver((entries) => {
      this.isInViewport = entries[0].isIntersecting;

      if (this.isInViewport) {
      
        this.currentTranslateY = 0;
        this.logoElement.style.transform = `translateY(0)`;
      }
    }, { threshold: 0.1 });

    observer.observe(this.logoBlock.nativeElement);
  }

  @HostListener('window:scroll')
  onScroll() {
    if (!this.logoElement) return;

    const scrollTop = window.scrollY || document.documentElement.scrollTop;

  
    const blockTop = this.logoBlock.nativeElement.getBoundingClientRect().top + window.scrollY;
    if (scrollTop < blockTop - this.animationStartOffset) {
      this.lastScrollY = scrollTop;
      return;
    }

    if (!this.animationFrameId) {
      this.animationFrameId = requestAnimationFrame(() => {
        this.animateLogo(scrollTop);
        this.animationFrameId = null;
      });
    }
  }

  animateLogo(currentScrollTop: number) {
    const deltaY = currentScrollTop - this.lastScrollY;
    this.lastScrollY = currentScrollTop;

    const parentRect = this.logoBlock.nativeElement.getBoundingClientRect();
    const logoRect = this.logoElement.getBoundingClientRect();

    const availableSpace = parentRect.height / 2 + logoRect.height / 2;

 
    const step = Math.max(-this.maxStep, Math.min(deltaY * this.scrollSensitivity, this.maxStep));

    this.currentTranslateY += step;

 
    if (this.currentTranslateY > availableSpace) {
      this.currentTranslateY = availableSpace;
    }

    if (this.currentTranslateY < 0) {
      this.currentTranslateY = 0;
    }

   
    if (Math.abs(this.currentTranslateY) < this.centerThreshold && deltaY < 0) {
      this.currentTranslateY = 0;
    }

    this.logoElement!.style.transform = `translateY(${this.currentTranslateY}px)`;
  }

  onSubmit(form: any) {
    const filters = form.value;
    this.router.navigate(['/catalog'], { queryParams: filters });
  }

  navigateToBrand(brand: string) {
    this.router.navigate(['/catalog'], { queryParams: { brand }, queryParamsHandling: 'merge' });
  }

 
}