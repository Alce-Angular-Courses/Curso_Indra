import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
    selector: 'hijo',
    templateUrl: './hijo.component.html'
})
export class HijoComponent implements OnInit  {

    @Input()
    public pTitle : string;

    @Output()
    public eventoOcultar = new EventEmitter<boolean>();

    public visible: boolean;

    constructor() {

       }

    ngOnInit() {
        this.visible = true;
    }

    click() {
        this.visible = !this.visible;
        this.eventoOcultar.emit(this.visible);
    }
}