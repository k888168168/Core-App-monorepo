import { showHideReducer } from "./../store/showHideElement/hide-show.reducer";
import { StoreModule } from "@ngrx/store";
import { AdminLibModule } from "./../../../../admin-lib/src/lib/admin-lib.module";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FirstComponent } from "./first.component";

describe("FirstComponent", () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({ app1ShowHide: showHideReducer }),
        AdminLibModule
      ],
      declarations: [FirstComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
