import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Github } from '../github';
import { Repo } from '../repo';

@Injectable({
    providedIn: 'root'
})

export class GithubHttpService {
    repoEndPoint = "https://api.github.com/users/";
    github: Github[] = [];
    repo: Repo[];
    constructor(private http: HttpClient) { }

    searchGithub(searchTerm: string) {
        interface myData {
            login: string;
            url: string;
        }
        let searchEndPoint = "https://api.github.com/users/";

        let promise = new Promise((resolve, reject) => {
            this.github = [];
            this.http.get<myData>(searchEndPoint + searchTerm + '?access_token='+environment.GITHUBAPIKEY).toPromise().then(
                (results) => {
                    this.github.push(results);
                    resolve();
                },
                (error) => {
                    console.log(error);
                    reject()
                }
            )
        })
        return promise;
    };

    getRepositories(searchTerm: string) {
        interface repo{
            name: string;
        }
        // url = 'https://api.github.com/users/beatricewambui/repos?access_token=dac03084a42944088d5ae55a2454e7f026e07f3b';
        this.repoEndPoint += "/repos?=" + searchTerm + environment.GITHUBAPIKEY;
        return new Promise((resolve, reject) => {
            this.http.get<repo>('https://api.github.com/users/'+ searchTerm + '/repos?access_token=' + environment.GITHUBAPIKEY).toPromise().then(
                (result) => {
                    this.repo = result; 
                    resolve();
                },
                (error) => {
                    console.log(error);
                    reject();
                })
        })

    }
}
