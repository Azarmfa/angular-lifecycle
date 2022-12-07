import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: ` <p #testref>test works!</p> `,
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  str: string = 'test component';
}
