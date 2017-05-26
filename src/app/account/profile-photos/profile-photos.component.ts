import { Component, OnInit } from '@angular/core';
import {Response} from "@angular/http";
import {HttpService} from "../../services/http.service";
import {Album} from "../../models/album.interface";



@Component({
  selector: 'app-profile-photos',
  templateUrl: './profile-photos.component.html',
  styleUrls: ['./profile-photos.component.scss'],
    providers: [HttpService]
})
export class ProfilePhotosComponent implements OnInit {
  public albums: Album[] = [];
  
  constructor(private httpService: HttpService){
  }
  ngOnInit(){
    this.httpService.getAlbums()
        .subscribe((resp: Response) => {
          let albumList = resp.json().albums;
          for(let index in albumList){
            console.log(albumList[index]);
            let album = albumList[index];
            this.albums.push(album);
          }
        });
  }

}
