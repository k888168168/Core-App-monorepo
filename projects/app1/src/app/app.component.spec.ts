import { RouterTestingModule } from "@angular/router/testing";
import { AdminLibModule } from "./../../../admin-lib/src/lib/admin-lib.module";
import { TestBed, async } from "@angular/core/testing";
import { App1Component } from "./app.component";

describe("App1Component", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, AdminLibModule],
      declarations: [App1Component]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(App1Component);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app1'`, () => {
    const fixture = TestBed.createComponent(App1Component);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("app1");
  });
});
