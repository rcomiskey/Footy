
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguesCompetitionsTableComponent } from './leagues-competitions-table.component';

describe('LeaguesCompetitionsTableComponent', () => {
  let component: LeaguesCompetitionsTableComponent;
  let fixture: ComponentFixture<LeaguesCompetitionsTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaguesCompetitionsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaguesCompetitionsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
