import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitnewComponent } from './gitnew.component';

describe('GitnewComponent', () => {
  let component: GitnewComponent;
  let fixture: ComponentFixture<GitnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
