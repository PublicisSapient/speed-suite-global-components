import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-ps-header',
  templateUrl: './ps-header.component.html',
  styleUrls: ['./ps-header.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PsHeaderComponent {
  // @Input() cards:any
  @Input() pSSwitchIcon= "../assets/images/switch-platforms-icon.svg";
  @Input() pSLogoInfo= {"imageUrl": "../assets/images/ps-logo.svg","altText": "psLogo"};
  @Input() platformLogoInfo: any;
  @Output() emitLogoClick = new EventEmitter<any>();
  @Output() emitSwitchPlatformapplicationClick = new EventEmitter<any>();
  @Input() platformSwitchItems:any;
  @Input() showElement:any;
  @Input() showSwitch:any;
  @Input() showHeaderNotifications?:boolean = false;
  @Input() showHeaderComments?:boolean = false;
  @Input() showHeaderMessages?:boolean = false;
  @Input() showHeaderNavigation?:boolean = false;
  @Input() showHeaderUserDetails?:boolean = false;
  onPlatformLogoClick(event:any){
    console.log('onPlatformLogoClick emit');
    this.emitLogoClick.emit(event);
  }
  navigateTo(event:string){
    console.log('event ', event);
    this.emitSwitchPlatformapplicationClick.emit(event);
  }
}
