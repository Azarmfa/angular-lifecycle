import {
  Component,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  Input,
  SimpleChanges,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'child-component',
  template: ` <h2>Child Component</h2> `,
})
export class ChildComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() message: any;
  str: string = '';

  constructor() {
    console.log('ChildComponent:Constructor');
  }

  ngOnChanges(simple: SimpleChanges) {
    console.log('ChildComponent:OnChanges', simple);
  }

  ngOnInit() {
    console.log('ChildComponent:OnInit');
    this.str = 'this is child string';
  }

  ngDoCheck() {
    console.log('ChildComponent:DoCheck');
  }

  ngAfterContentInit() {
    console.log('ChildComponent:AfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ChildComponent:AfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ChildComponent:AfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ChildComponent:AfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ChildComponent:OnDestroy');
  }
}
