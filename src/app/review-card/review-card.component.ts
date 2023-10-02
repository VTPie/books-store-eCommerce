import { Component, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['./review-card.component.scss']
})
export class ReviewCardComponent {
  @Input() name = '';
  @Input() date = '';
  @Input() comment = '';
  @Input() image = '';
  @Input() national = '';

  //Icon
  faStar = faStar;
}
