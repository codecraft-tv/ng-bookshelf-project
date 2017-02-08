import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

  @Input()
  private page: number = 1;

  @Input()
  private totalPages: number = 0;

  @Output()
  private changePage: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  next() {
    this.changePage.emit(this.page + 1)
  }

  prev() {
    this.changePage.emit(this.page - 1)
  }


  ngOnInit() {
  }

}
