import { Component } from '@angular/core';

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent {
  inputValue: string ='';

  onKeyUp(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.saveValue();
    }
  }

  saveValue(): void {
    if (this.inputValue) {
      localStorage.setItem('storedValue', this.inputValue);
      sessionStorage.setItem('sessionValue', this.inputValue);
      this.inputValue = '';
    }
  }
}
