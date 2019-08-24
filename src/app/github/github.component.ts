import { Component, OnInit } from '@angular/core';
import { GithubHttpService} from '../services/github-http-service'
import { Github } from '../github';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  github :Github[];
  constructor( public githubHttpService:GithubHttpService) { }
  
  ngOnInit() {
    this.searchGithub("BeatriceWambui")
  }

  searchGithub(searchTerm){
    this.githubHttpService.searchGithub(searchTerm).them(
      ()=>{
        this.github=this.githubHttpService.github;
      },
      (error)=>{
        console.log(error)
      }
    )
  }

}
