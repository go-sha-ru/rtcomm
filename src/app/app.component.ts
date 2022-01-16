import {Component, OnInit} from '@angular/core';
import {FollowerService} from "./follower.service";
import {IFollower} from "../models/follower";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  followers: IFollower[];
  login: string = 'mosh-hamedani'
  loadingText: string = ''
  errorText: string = '';

  constructor(private followerService: FollowerService) {}

  ngOnInit() {

  }

  fetchFollowers () {
    this.loadingText = 'Идёт загрузка'
    this.errorText = '';
    this.followerService.fetchFollower(this.login).subscribe(
      (response) => {
        this.followers = response;
        this.loadingText = '';
      },
      (error) => {
        this.errorText = error.message;
      }
    )
  }
}
