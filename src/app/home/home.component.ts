import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { CarCardComponent } from '../car-card/car-card.component';
import { CarService, Car } from '../servis/car.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule,CarCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user = {
    name: '',
    phone: '',
    email: ''
  };
  cars: Car[] = [];
   constructor(private carService: CarService, private router: Router) {
    this.cars = this.carService.getCars();
  }
  formattedPhone = '+7 ';
  phoneInvalid = false;
  submitted = false;
   onSubmit(form: any) {
    const filters = form.value;

    // Передаем параметры в URL через роутер
    this.router.navigate(['/catalog'], { queryParams: filters });
  }
  navigateToBrand(brand: string) {
  this.router.navigate(['/catalog'], { queryParams: { brand }, queryParamsHandling: 'merge' });
}
  onPhoneInput(event: Event) {
    const input = (event.target as HTMLInputElement);
    let value = input.value.replace(/\D/g, ''); // убираем всё кроме цифр
    value = value.replace(/^7/, ''); // убираем лишнюю 7, если пользователь её вводит

    // Формируем формат: +7 XXX-XX-XX
    let formatted = '+7 ';
    if (value.length > 0) formatted += value.substring(0, 3);
    if (value.length >= 4) formatted += '-' + value.substring(3, 5);
    if (value.length >= 6) formatted += '-' + value.substring(5, 7);

    this.formattedPhone = formatted;
    this.user.phone = '+7' + value;

    this.validatePhone(value);
  }

  validatePhone(raw: string) {
    this.phoneInvalid = raw.length !== 7;
  }

  submitForm() {
    if (this.phoneInvalid || !this.user.name.trim()) return;

    this.submitted = true;
    setTimeout(() => (this.submitted = false), 5000);
    this.user = { name: '', phone: '', email: '' };
    this.formattedPhone = '+7 ';
  }
}
