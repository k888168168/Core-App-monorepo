import { AdminLibModule } from "./../../../projects/admin-lib/src/lib/admin-lib.module";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SomeCoreComponentComponent } from "./some-core-component.component";

describe("SomeCoreComponentComponent", () => {
  let component: SomeCoreComponentComponent;
  let fixture: ComponentFixture<SomeCoreComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AdminLibModule],
      declarations: [SomeCoreComponentComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeCoreComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
