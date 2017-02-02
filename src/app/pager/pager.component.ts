import {Component, OnInit, EventEmitter, OnChanges} from '@angular/core';
import {Input, Output} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

  @Input() totalPages: number = 0;
  @Input() page: number = 0;
  @Output() changePage: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
  }

  next() {
    if ((this.page + 1) < this.totalPages) {
      this.page += 1;
      this.changePage.emit(this.page);
    }
  }

  prev() {
    if (this.page > 0) {
      this.page -= 1;
      this.changePage.emit(this.page);
    }
  }

  // ngOnChanges() {
  //   if (this.totalItems > 0 && this.pageSize > 0) {
  //     this.pages = [];
  //     let itemsLeft = this.totalItems;
  //     let p = 0;
  //     while (itemsLeft > 0) {
  //       this.pages.push(p);
  //       p++;
  //       itemsLeft -= this.pageSize;
  //     }
  //   }
  //   debugger;
  // }

  ngOnInit() {
  }

}
