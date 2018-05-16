import { Component, OnInit } from '@angular/core';
import { HttpService } from '../service/http.service';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  public teams = [];
  public currentTeam ;

  constructor(private http: HttpService, private dataService: DataService) {
  }

  ngOnInit() {
    this.http.getTeams().subscribe(
      data => {
        this.teams = data;
      }
    );
  }

  public onSelect(index) {
    this.currentTeam = this.teams[index];
    this.dataService.pushCountry(this.currentTeam.countyCode);
  }
}
