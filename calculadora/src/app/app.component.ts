
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calculadora';
  name = 'Angular';

  appendToResult(val: number | string): void {
    const resultElement = document.getElementById("result") as HTMLInputElement;
    resultElement.value += val;
  }

  clearResult(): void {
    const resultElement = document.getElementById('result') as HTMLInputElement;
    resultElement.value = '';
  }

  solve(): void {
    const x = document.getElementById('result') as HTMLInputElement;
    let y = eval(x.value);
    const resultInput = document.getElementById('result') as HTMLInputElement;
    resultInput.value = y;
  }
}
