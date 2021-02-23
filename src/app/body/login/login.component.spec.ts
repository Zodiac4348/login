import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, RouterModule } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        LoginComponent 
      ],
      imports: [
        RouterModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    router = TestBed.get(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create login component', () => {
    expect(component).toBeTruthy();
  });

  it('should call router.navigate with parameter home if isUsernameValid and isPasswordValid are true', () => {
    spyOn(router, 'navigate');

    component.username = 'example@example.com';
    component.password = 'password123';
    component.submit();

    expect(component.isUsernameValid).toBeTruthy();
    expect(component.isPasswordValid).toBeTruthy();
    expect(router.navigate).toHaveBeenCalledWith(['home']);
  });

  it('should not call router.navigate with parameter home if either of or isUsernameValid and isPasswordValid are false', () => {
    spyOn(router, 'navigate');

    component.username = 'example';
    component.password = '123';
    component.submit();

    expect(component.isUsernameValid).toBeFalsy();
    expect(component.isPasswordValid).toBeFalsy();
    expect(router.navigate).not.toHaveBeenCalledWith(['home']);
  });
});
