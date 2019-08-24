import { Injectable } from '@angular/core'
import { HttpClient } from 'selenium-webdriver/http';
import { environment } from '../../environments/environment';
import { Github } from '../github';

    @Injectable({
        providedIn: 'root'
    })


export class GithubHttpService {
    github:Github[]=[];
    constructor(private http:HttpClient){}

    searchGithub(searchTerm:string){

        let searchEndPoint=" "
        searchEndPoint += "&q="+searchTerm;
        let promise = new Promise((resolve, reject)=>{
            this.http.get(searchEndPoint).toPromise().then(
                (results)=>{
                    this.github=[];
                    for( let i=0; i<results["data"].length;i++){
                        let url = results ["data"] [i]["images"]["fixed_height"]["url"];
                        let gitt = new Github(url);
                        this.github.push(gitt);
                    }
                    console.log(this.github);
                    resolve()
                },
                (error)=>{
                    console.log(error)
                    reject()
                }
            )
        })
        return promise;
    }
}
