import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PsHeaderComponent } from './ps-header.component';
import { By } from '@angular/platform-browser';


describe('PsHeaderComponent', () => {
  let component: PsHeaderComponent;
  let fixture: ComponentFixture<PsHeaderComponent>;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
        declarations: [ PsHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(PsHeaderComponent);
    component = fixture.componentInstance;

    component.pSLogoInfo = {
        imageUrl:'assets/img/PSKnowHowLogo.svg',
        altText:'Logo',
    }
  });

  it('should created the component', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly set the @Input() values', ()=>{
    component.pSSwitchIcon = 'iconPath';
    component.showHeaderNotifications = true;
    fixture.detectChanges();

    expect((component.pSSwitchIcon)).toBe('iconPath');
    expect((component.pSLogoInfo.altText)).toBe('Logo');
    expect((component.showHeaderNotifications)).toBeTrue();
  });

  it('should emit event when platform logo is clicked', ()=>{
    spyOn(component.emitLogoClick,'emit');

    component.onPlatformLogoClick('test');
    fixture.detectChanges();

    expect(component.emitLogoClick.emit).toHaveBeenCalled();
  });

  it('should emit event when navigation to a plateform', ()=>{
    spyOn(component.emitSwitchPlatformapplicationClick,'emit');

    const event = 'somepalteformevent';

    component.navigateTo(event);
    fixture.detectChanges();

    expect(component.emitSwitchPlatformapplicationClick.emit).toHaveBeenCalledWith(event);
  });

  it('should render notifications icon if showHeaderNotifications is true',()=>{
    component.showHeaderNotifications = true;
    fixture.detectChanges();
    
    const notificationElement = fixture.debugElement.query(By.css('.header-notifications'))

    expect(notificationElement).toBeTruthy();
  });

  it('should not render notifications icon if showHeaderNotifications is false',()=>{
    component.showHeaderNotifications = false;
    fixture.detectChanges();
    
    const notificationElement = fixture.debugElement.query(By.css('.header-notifications'))

    expect(notificationElement).toBeNull();
  });

  it('should render comments icon if showHeaderComments is true',()=>{
    component.showHeaderComments = true;
    fixture.detectChanges();
    
    const notificationElement = fixture.debugElement.query(By.css('.header-comments'))

    expect(notificationElement).toBeTruthy();
  });

  it('should not render comments icon if showHeaderComments is false',()=>{
    component.showHeaderComments = false;
    fixture.detectChanges();
    
    const notificationElement = fixture.debugElement.query(By.css('.header-comments'))

    expect(notificationElement).toBeNull();
  });

  it('should render messages icon if showHeaderMessages is true',()=>{
    component.showHeaderMessages = true;
    fixture.detectChanges();
    
    const notificationElement = fixture.debugElement.query(By.css('.header-messages'))

    expect(notificationElement).toBeTruthy();
  });

  it('should not render messages icon if showHeaderMessages is false',()=>{
    component.showHeaderMessages = false;
    fixture.detectChanges();
    
    const notificationElement = fixture.debugElement.query(By.css('.header-messages'))

    expect(notificationElement).toBeNull();
  });

  it('should render details icon if showHeaderUserDetails is true',()=>{
    component.showHeaderUserDetails = true;
    fixture.detectChanges();
    
    const notificationElement = fixture.debugElement.query(By.css('.header-userdetails'))

    expect(notificationElement).toBeTruthy();
  });

  it('should not render details icon if showHeaderUserDetails is false',()=>{
    component.showHeaderUserDetails = false;
    fixture.detectChanges();
    
    const notificationElement = fixture.debugElement.query(By.css('.header-userdetails'))

    expect(notificationElement).toBeNull();
  });
});
