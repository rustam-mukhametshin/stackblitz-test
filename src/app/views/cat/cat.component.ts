import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../../interfaces/image.interface';
import { PreviewAction } from '../../interfaces/preview-action.interface';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  @Input() cats: Image[] = [];
  @Input() actions: readonly PreviewAction[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
