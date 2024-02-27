import { Component, OnInit } from '@angular/core';
import { fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  ngOnInit(): void {

  const clicks = fromEvent<PointerEvent>(document, 'click');
  const positions = clicks.pipe(map(ev => ev.clientX));

  positions.subscribe(x => console.log(x));
  }

}
