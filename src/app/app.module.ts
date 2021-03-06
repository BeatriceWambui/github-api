import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubNavbarComponent } from './github-navbar/github-navbar.component';
import { GithubSearchFormComponent } from './github-search-form/github-search-form.component';
import { GithubComponent } from './github/github.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GitnewComponent } from './gitnew/gitnew.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GithubNavbarComponent,
    GithubSearchFormComponent,
    GithubComponent,
    NotFoundComponent,
    GitnewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
