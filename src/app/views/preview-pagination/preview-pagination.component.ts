import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-pagination',
  templateUrl: './preview-pagination.component.html',
  styleUrls: ['./preview-pagination.component.css']
})
export class PreviewPaginationComponent implements OnInit {
  lastIndex?: number;

  constructor() {
  }

  ngOnInit(): void {
  }

}
