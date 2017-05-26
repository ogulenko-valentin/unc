import { Component, OnInit } from '@angular/core';
import {Response} from "@angular/http";
import {HttpService} from "../../services/http.service";
import {Trip} from "../../models/trips.interface";
import {Observable} from "rxjs/Observable";
import {Url} from "url";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-trips',
  templateUrl: './home-trips.component.html',
  styleUrls: ['./home-trips.component.scss'],
  providers: [HttpService]
})
export class HomeTripsComponent implements OnInit {

    homeTrips: Trip[] = [];

    constructor(private httpService: HttpService) {
    }

    ngOnInit() {

        // this.httpService.getRoleInTrip(parseInt(localStorage.getItem('id')), this.tripID)
        //     .subscribe((data) =>{
        //         console.log(data);
        //         this.roleInTrip = data;
        //     });

        this.httpService.getProfileTrips()
            .subscribe((resp: Response) => {
                let tripList = resp.json();
                for (let index in tripList) {
                    // console.log(index);
                    let trip = tripList[index];
                    this.homeTrips.push(trip);
                }
            })
    }
}

// this.httpService.getRoleInTrip(parseInt(localStorage.getItem('id')), trip.id)
//     .subscribe((data) => {
//         // console.log(data);
//         console.log(data.role.id);
//         if (data) {
//             this.route = "//trip-planning/" + trip.id;
//         } else {
//             this.route = "/trip-info/" + trip.id;
//         }
//         // console.log(data.role.id);
//         // this.pathToTrip[index] = "/trip-info/";
//     })

