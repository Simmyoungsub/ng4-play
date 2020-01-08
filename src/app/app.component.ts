import { Component, Input, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.service.getTitle().subscribe((title: string) => {
      this.title = title;
    });

    this.service.getContent().subscribe((content: string) => {
      this.content = content;
    });
  }
  title: string = '';
  content: string = '';

  constructor(private service: AppService) {

  }

  onClick() {
    
  }
}

@Component({
  selector: 'app-sub',
  template: `
    <h1>{{title}}</h1>
  `
})
export class SubComponent {
  @Input() title: string;

  
}