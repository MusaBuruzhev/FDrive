import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  filters: any = {};

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
  
    this.route.queryParams.subscribe(params => {
      this.filters = params;
      console.log('Фильтры:', this.filters);
    });
  }
}