import { Component, Input } from '@angular/core';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  faTools = faTools;
  @Input() items: any[] | undefined;

  constructor(private library: FaIconLibrary){
    library.addIcons(faTools);
  }
}
