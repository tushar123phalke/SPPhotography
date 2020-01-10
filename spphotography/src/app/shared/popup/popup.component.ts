import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'sp-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  @Input() imageUrl: string;
  @Output() closePopup: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  hidePopup() {
    this.closePopup.emit(true);
  }

}
