import { Component } from '@angular/core';

interface Developer {
  picture: string;
  name: string;
  country: string;
  position: string;
  introduction: string;
}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  developers: Developer[] = [
    {
      picture: 'developer0.jpg',
      name: 'Egor Nesterov',
      country: 'Russia',
      position: 'Frontend Developer',
      introduction: 'Egor was working as frontend developer using Angular (working with Typscript, HTML, and CSS).'
    },
    {
      picture: 'developer1.jpg',
      name: 'Kirill Verendeev',
      country: 'Russia',
      position: 'Backend Developer',
      introduction: 'Kirill was working as a backend developer using Laravel (working with PHP).'
    },
    {
      picture: 'developer2.jpg',
      name: 'Anna Tolmacheva',
      country: 'Russia',
      position: 'Project Manager',
      introduction: 'Anna was working on task creation, the task decomposition, and the design.'
    },
    {
      picture: 'developer3.jpg',
      name: 'Demirhan Hasirciki',
      country: 'Turkey',
      position: 'Database administrator',
      introduction: 'Demirhan was creating database and tables, their relations'
    }
  ];
}
