import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent, filter, debounceTime } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.css']
})
export class DebounceTimeComponent implements OnInit{
  
  searchControl = new FormControl();

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(1000) // Aguarda 300ms após a última mudança de valor
      )
      .subscribe(newValue => {
        // Realize a ação desejada aqui, por exemplo, realizar uma pesquisa
        console.log('Nova pesquisa:', newValue);
      });
  }

}
