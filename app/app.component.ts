import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Storage';
  SetSession(){
    sessionStorage.setItem('userid',"adminuser");
    sessionStorage.setItem('abcdef',"adminuser");
  }
  GetSession(){
    console.log(sessionStorage.getItem('userid'));
  }
  SetSessions(){
    localStorage.setItem('userid',"adminuser");
    localStorage.setItem('pqrstuv',"adminuser");
  }
  GetSessions(){
    console.log(localStorage.getItem('userid'));
  }
  Remove(){
    localStorage.clear();
  }
  localStorageValue: string | null = localStorage.getItem('storedValue');
  sessionStorageValue: string | null = sessionStorage.getItem('sessionValue');
}
