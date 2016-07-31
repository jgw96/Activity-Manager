import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';

import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs';

import { ProcessList } from '../process-list/list';
import { OsViewer } from '../os-viewer/os';

@Component({
  selector: 'app',
  template: require('./app.html'),
  styles: [require('./app.css')],
  directives: [ProcessList, OsViewer, MD_TOOLBAR_DIRECTIVES, MD_TABS_DIRECTIVES]
})

export class App {
  constructor() {

  }
}

bootstrap(App);
