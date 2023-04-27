import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [ 
  ]
})
export class HomeComponent {
  data: any[] = [];

  constructor(private apiService: ApiService) {};

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.apiService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    })
  }
}
