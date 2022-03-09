import { Component } from '@angular/core';
import { Image } from './interfaces/image.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgUrls: string[] = [
    'https://images.pexels.com/photos/96938/pexels-photo-96938.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/209037/pexels-photo-209037.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  ];

  activeCat?: boolean;

  cats: Image[] = this.imgUrls.map((src, id) => {
    const active = id === 0;
    return {
      src,
      id,
      active,
      description: 'Description of ' + id,
      title: 'Title of ' + id,
    }
  })

  setCat(id: any) {

  }
}
