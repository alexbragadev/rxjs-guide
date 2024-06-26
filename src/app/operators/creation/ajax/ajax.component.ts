import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';
import { map, catchError, of } from 'rxjs';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {
  ngOnInit(): void {
    const obs$ = ajax.getJSON('https://api.github.com/users?per_page=5').pipe(
      map(userResponse => console.log('users: ', userResponse)),
      catchError(error => {
        console.log('error: ', error);
        return of(error);
      })
    );
     
    obs$.subscribe({
      next: value => console.log(value),
      error: err => console.log(err)
    });
  }
  
}
