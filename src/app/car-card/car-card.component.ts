import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Car } from '../servis/car.service';

@Component({
  selector: 'app-car-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent {
  @Input() car!: Car;
}
