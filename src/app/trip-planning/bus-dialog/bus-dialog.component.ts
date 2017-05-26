import {Component, OnInit} from '@angular/core';
import {Movement} from "../../models/movements.interface";
import {TripService} from "../../services/trip.service";
import {Transport} from "../../models/transport.interface";
import {Coordinates} from "../../models/coordinates.interface";

@Component({
    selector: 'app-bus-dialog',
    templateUrl: './bus-dialog.component.html',
    styleUrls: ['./bus-dialog.component.css']
})
export class BusDialogComponent implements OnInit {

    bus:Movement;

    constructor(private tripService:TripService) {
    }

    ngOnInit() {
        this.bus = {
            id: null,
            transport: null,
            travel: null,
            startTime: null,
            endTime: null,
            startAddress: '',
            destinationAddress: '',
            price: null,
            distance: null,
            description: '',
            ticket: '',
            start_coordinates:null,
            destination_coordinates:null
        }
    }

    addBus(model:Movement) {
        model.transport = new Transport(3, "bus");
        console.log(model);
        this.tripService.setMovementSubject(new Movement(model.id, model.transport, model.travel, new Date(model.startTime), new Date(model.endTime),
            model.startAddress, model.destinationAddress, model.price, model.distance, model.description, model.ticket, new Coordinates("point", 0 , 0), new Coordinates("point", 0 , 0)));
        this.bus = {
            id: null,
            transport: null,
            travel: null,
            startTime: null,
            endTime: null,
            startAddress: '',
            destinationAddress: '',
            price: null,
            distance: null,
            description: '',
            ticket: '',
            start_coordinates:null,
            destination_coordinates:null
        }
    }

}
