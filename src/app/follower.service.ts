import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from "rxjs";
import {IFollower} from "../models/follower";

@Injectable()
export class FollowerService {
  constructor(private http: HttpClient) {}

  fetchFollower(login: string): Observable<IFollower[]> {
    return this.http.get<IFollower[]>(`https://api.github.com/users/${login}/followers`)
  }
}
