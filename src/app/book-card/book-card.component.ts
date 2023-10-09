import { Component, Input, OnInit } from '@angular/core';
import { Popover } from 'bootstrap'

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {
  @Input() name = '';
  @Input() author = '';
  @Input() price = 0;
  @Input() image = '';

  ngOnInit(): void {
    //Action coming soon
    Array.from(document.querySelectorAll('button[data-bs-toggle="popover"]')).forEach(popoverNode => new Popover(popoverNode))
  }
}
