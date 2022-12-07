import { ChildComponent } from './child.component';
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
  ViewChild,
  ElementRef,
} from '@angular/core';
import { TestComponent } from './test/test.component';

@Component({
  selector: 'app-root',
  template: `
    <h2>Angular Lifecycle Hooks</h2>
    <button (click)="toggle()">Hide/Show Child</button>
    <br />
    <br />
    <div #viewref>This is for viewchild</div>
    <br />
    <input type="text" [(ngModel)]="messageVal" />
    <br />
    <child-component *ngIf="displayChild" [message]="messageVal">
    </child-component>
  `,
})
export class AppComponent
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
  @ViewChild('viewref') viewRef: ElementRef;

  @ViewChild(ChildComponent) childref: ChildComponent;

  displayChild: boolean = true;
  messageVal!: string;
  constructor() {
    console.log('AppComponent: Constructor');
    console.log(this.viewRef);
  }

  toggle() {
    this.displayChild = !this.displayChild;
  }

  ngOnChanges() {
    console.log('AppComponent: OnChanges');
  }

  ngOnInit() {
    console.log('AppComponent: OnInit');
    console.log(this.viewRef);
  }

  ngDoCheck() {
    console.log('AppComponent: DoCheck');
    console.log(this.viewRef);
  }

  ngAfterContentInit() {
    console.log('AppComponent: AfterContentInit');
    console.log(this.viewRef);
  }

  ngAfterContentChecked() {
    console.log('AppComponent:AfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('AppComponent:AfterViewInit');
    console.log('childref', this.childref.str);
    console.log(this.viewRef.nativeElement.innerHTML);
    this.viewRef.nativeElement.innerHTML = 'This is replace content';
  }

  ngAfterViewChecked() {
    console.log('AppComponent:AfterViewChecked');
  }

  ngOnDestroy() {
    console.log('AppComponent:OnDestroy');
  }
}
