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
  }

  searchGithub(searchTerm){
    console.log(searchTerm);
    this.githubHttpService.searchGithub(searchTerm).then(
      (success)=>{
        this.github=this.githubHttpService.github;
        console.log(searchTerm);
      },
      (error)=>{
        console.log(error)
      }
    )
  }


  getRepos(){

  }

}
