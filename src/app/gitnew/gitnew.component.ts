import { Component, OnInit } from '@angular/core';
import { Github } from '../github';
import { Repo } from '../repo';
import { GithubHttpService} from '../services/github-http-service';

@Component({
  selector: 'app-gitnew',
  templateUrl: './gitnew.component.html',
  styleUrls: ['./gitnew.component.css']
})
export class GitnewComponent implements OnInit {
  github :Github[];
  repo: Repo[];
  constructor( public githubHttpService:GithubHttpService) { }

  ngOnInit() {
    this.searchGithub("BeatriceWambui")
  }
  searchGithub(searchTerm){
    this.githubHttpService.searchGithub(searchTerm).then(
      (success)=>{
        this.github=this.githubHttpService.github;
        console.log(this.github);
      },
      (error)=>{
        console.log(error)
      }
    )
    this.githubHttpService.getRepositories(searchTerm).then(
      (success)=>{
        this.repo = this.githubHttpService.repo;
        console.log(this.repo);
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
