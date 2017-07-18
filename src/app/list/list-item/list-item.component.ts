import { Component, OnInit, Input } from '@angular/core';

import {Church} from './list-item.model'

@Component({
  selector: 'mt-list-item',
  templateUrl: './list-item.component.html'
})
export class ListItemComponent implements OnInit {

  @Input() churchPass: Church

  constructor() { }

  ngOnInit() {
  }

}
