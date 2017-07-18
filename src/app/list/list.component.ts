import { Component, OnInit } from '@angular/core'
import {ListService} from './list.service'
import {Church, Result} from './list-item/list-item.model'
import {SamplePipe} from 'disciplojsk'
@Component({
  selector: 'mt-list',
  templateUrl: './list.component.html'
})


export class ListComponent implements OnInit {

  churchList: Church[]

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listService.churchMethodList()
      .subscribe(churchListLocal => this.churchList = churchListLocal.result)
  }

}
