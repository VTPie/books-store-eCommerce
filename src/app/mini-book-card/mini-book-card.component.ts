import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mini-book-card',
  templateUrl: './mini-book-card.component.html',
  styleUrls: ['./mini-book-card.component.scss']
})
export class MiniBookCardComponent {
  @Input() name = '';
  @Input() author = '';
  @Input() price = '';
  @Input() image = '';
}
