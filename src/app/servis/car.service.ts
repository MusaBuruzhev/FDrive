import { Injectable } from '@angular/core';

export interface Car {
  name: string;
  imageUrl: string;
  details: string;
  pricePerDay: number;

  phone: string;
  whatsapp: string;
  link: string;
}

@Injectable({ providedIn: 'root' })
export class CarService {
  getCars(): Car[] {
    return [
      {
        name: 'Lamborghini Urus',
        imageUrl: 'https://storage.googleapis.com/trinityrental-e51d5.appspot.com/medium_0_lambo_urus_7e99c2f6b1/medium_0_lambo_urus_7e99c2f6b1.jpeg',
        details: '5 мест, 650 л.с, 4л, 0-100: 3.6сек',
        pricePerDay: 2280,
        phone: '+971502100702',
        whatsapp: '971502100702',
        link: '/ru/rent-lamborghini/urus'
      },
      {
        name: 'Lamborghini Urus',
        imageUrl: 'https://storage.googleapis.com/trinityrental-e51d5.appspot.com/medium_0_lambo_urus_7e99c2f6b1/medium_0_lambo_urus_7e99c2f6b1.jpeg',
        details: '5 мест, 650 л.с, 4л, 0-100: 3.6сек',
        pricePerDay: 2280,
        phone: '+971502100702',
        whatsapp: '971502100702',
        link: '/ru/rent-lamborghini/urus'
      },
      {
        name: 'Lamborghini Urus',
        imageUrl: 'https://storage.googleapis.com/trinityrental-e51d5.appspot.com/medium_0_lambo_urus_7e99c2f6b1/medium_0_lambo_urus_7e99c2f6b1.jpeg',
        details: '5 мест, 650 л.с, 4л, 0-100: 3.6сек',
        pricePerDay: 2280,

        phone: '+971502100702',
        whatsapp: '971502100702',
        link: '/ru/rent-lamborghini/urus'
      },
      {
        name: 'Lamborghini Urus',
        imageUrl: 'https://storage.googleapis.com/trinityrental-e51d5.appspot.com/medium_0_lambo_urus_7e99c2f6b1/medium_0_lambo_urus_7e99c2f6b1.jpeg',
        details: '5 мест, 650 л.с, 4л, 0-100: 3.6сек',
        pricePerDay: 2280,
        phone: '+971502100702',
        whatsapp: '971502100702',
        link: '/ru/rent-lamborghini/urus'
      },
      {
        name: 'Lamborghini Urus',
        imageUrl: 'https://storage.googleapis.com/trinityrental-e51d5.appspot.com/medium_0_lambo_urus_7e99c2f6b1/medium_0_lambo_urus_7e99c2f6b1.jpeg',
        details: '5 мест, 650 л.с, 4л, 0-100: 3.6сек',
        pricePerDay: 2280,
        phone: '+971502100702',
        whatsapp: '971502100702',
        link: '/ru/rent-lamborghini/urus'
      },
      {
        name: 'Lamborghini Urus',
        imageUrl: 'https://storage.googleapis.com/trinityrental-e51d5.appspot.com/medium_0_lambo_urus_7e99c2f6b1/medium_0_lambo_urus_7e99c2f6b1.jpeg',
        details: '5 мест, 650 л.с, 4л, 0-100: 3.6сек',
        pricePerDay: 2280,
        phone: '+971502100702',
        whatsapp: '971502100702',
        link: '/ru/rent-lamborghini/urus'
      },
      {
        name: 'Lamborghini Urus',
        imageUrl: 'https://storage.googleapis.com/trinityrental-e51d5.appspot.com/medium_0_lambo_urus_7e99c2f6b1/medium_0_lambo_urus_7e99c2f6b1.jpeg',
        details: '5 мест, 650 л.с, 4л, 0-100: 3.6сек',
        pricePerDay: 2280,
        phone: '+971502100702',
        whatsapp: '971502100702',
        link: '/ru/rent-lamborghini/urus'
      },
      {
        name: 'Lamborghini Urus',
        imageUrl: 'https://storage.googleapis.com/trinityrental-e51d5.appspot.com/medium_0_lambo_urus_7e99c2f6b1/medium_0_lambo_urus_7e99c2f6b1.jpeg',
        details: '5 мест, 650 л.с, 4л, 0-100: 3.6сек',
        pricePerDay: 2280,
        phone: '+971502100702',
        whatsapp: '971502100702',
        link: '/ru/rent-lamborghini/urus'
      },
      {
        name: 'Lamborghini Urus',
        imageUrl: 'https://storage.googleapis.com/trinityrental-e51d5.appspot.com/medium_0_lambo_urus_7e99c2f6b1/medium_0_lambo_urus_7e99c2f6b1.jpeg',
        details: '5 мест, 650 л.с, 4л, 0-100: 3.6сек',
        pricePerDay: 2280,
        phone: '+971502100702',
        whatsapp: '971502100702',
        link: '/ru/rent-lamborghini/urus'
      },
      {
        name: 'Lamborghini Urus',
        imageUrl: 'https://storage.googleapis.com/trinityrental-e51d5.appspot.com/medium_0_lambo_urus_7e99c2f6b1/medium_0_lambo_urus_7e99c2f6b1.jpeg',
        details: '5 мест, 650 л.с, 4л, 0-100: 3.6сек',
        pricePerDay: 2280,
        phone: '+971502100702',
        whatsapp: '971502100702',
        link: '/ru/rent-lamborghini/urus'
      },
      {
        name: 'Lamborghini Urus',
        imageUrl: 'https://storage.googleapis.com/trinityrental-e51d5.appspot.com/medium_0_lambo_urus_7e99c2f6b1/medium_0_lambo_urus_7e99c2f6b1.jpeg',
        details: '5 мест, 650 л.с, 4л, 0-100: 3.6сек',
        pricePerDay: 2280,
        phone: '+971502100702',
        whatsapp: '971502100702',
        link: '/ru/rent-lamborghini/urus'
      },
      {
        name: 'Lamborghini Urus',
        imageUrl: 'https://storage.googleapis.com/trinityrental-e51d5.appspot.com/medium_0_lambo_urus_7e99c2f6b1/medium_0_lambo_urus_7e99c2f6b1.jpeg',
        details: '5 мест, 650 л.с, 4л, 0-100: 3.6сек',
        pricePerDay: 2280,
        phone: '+971502100702',
        whatsapp: '971502100702',
        link: '/ru/rent-lamborghini/urus'
      },
      

    ];
  }
}
