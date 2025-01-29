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
  @Input() pSLogoInfo= {"imageUrl": "/assets/images/ps-logo.svg","altText": "psLogo"};
  @Input() platformLogoInfo: any;
  @Output() logoClick = new EventEmitter<any>();
  @Output() switchApplicationClick = new EventEmitter<string>();
  @Input() platformSwitchItems:any;
  @Input() showElement:any;
  @Input() showSwitch:any;
  @Input() showHeaderNotifications?:boolean = false;
  @Input() showHeaderComments?:boolean = false;
  @Input() showHeaderMessages?:boolean = false;
  @Input() showHeaderNavigation?:boolean = false;
  @Input() showHeaderUserDetails?:boolean = false;

  onLogoClick(event:any):void{
    console.log('logo click event raised from library');
    this.logoClick.emit(event);
  }
  onSwitchApplicationClick(event:string):void{
    console.log('switching between application click event raised from library ', event);
    this.switchApplicationClick.emit(event);
  }
}
