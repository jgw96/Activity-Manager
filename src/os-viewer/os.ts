import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';

import { ByteToMb } from '../pipes/byteToMb';

const os = require('os');

@Component({
  selector: 'os-viewer',
  template: require('./os.html'),
  styles: [require('./os.css')],
  pipes: [ByteToMb]
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
  cpuTemp: string;
 

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

    setInterval(() => {
      this.freeMem = os.freemem();
    }, 5000);
  }
}