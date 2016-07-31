import { Component, NgZone } from '@angular/core';

import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

const ps = require('current-processes');
const ps_lookup = require('ps-node');

@Component({
    selector: 'process-list',
    template: require('./list.html'),
    styles: [require('./list.css')],
    directives: [MD_LIST_DIRECTIVES, MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
export class ProcessList {

    runningProcesses: any[];
    memoryInfo: any;

    constructor(private zone: NgZone) {
        this.runningProcesses = [];
    }

    ngOnInit() {
        this.getProcesses();
    }

    stop(pid: string) {
        ps_lookup.kill(pid, (err) => {
            if (err) {
                console.error(err);
            } else {
                new Notification("Process killed");
                this.getProcesses();
            }
        });
    }

    getProcesses() {
        ps.get((err, processes) => {
            if (err) {
                console.error(err);
            } else {
                console.log(processes);
                this.zone.run(() => {
                    this.runningProcesses = processes;
                })
            }
        });
    }
}