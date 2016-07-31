import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';

import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { ByteToMb } from '../pipes/byteToMb';

const os = require('os');

@Component({
  selector: 'os-viewer',
  template: require('./os.html'),
  styles: [require('./os.css')],
  pipes: [ByteToMb],
  directives: [MD_CARD_DIRECTIVES, MD_LIST_DIRECTIVES]
})

export class OsViewer {

  archName: string;
  freeMem: string;
  totalMem: string;
  type: string;
  release: string;
  platform: string;
  hostname: string;
  cpuData: any;


  constructor() {

  }

  ngOnInit() {
    this.archName = os.arch();
    this.freeMem = os.freemem();
    this.totalMem = os.totalmem();
    this.type = os.type();
    this.release = os.release();
    this.platform = os.platform();
    this.hostname = os.hostname();
    this.cpuData = os.cpus();
  }
}