import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styles: [],
})
export class ViewChildComponent implements OnInit {
  public mostraVC: string = '';
  constructor() {}

  ngOnInit(): void {}

  @ViewChild('IndatoVC') IndatoVC!: ElementRef;

  mostraViewChild() {
    this.mostraVC = this.IndatoVC.nativeElement.value;
  }
}
