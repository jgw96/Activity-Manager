import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';

import { ProcessList } from '../process-list/list';
import { OsViewer } from '../os-viewer/os';

@Component({
  selector: 'app',
  template: require('./app.html'),
  styles: [require('./app.css')],
  directives: [ProcessList, OsViewer]
})

export class App {
  constructor() {

  }
}

bootstrap(App);
