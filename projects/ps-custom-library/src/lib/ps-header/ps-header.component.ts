import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-ps-header',
  templateUrl: './ps-header.component.html',
  styleUrls: ['./ps-header.component.scss']
})
export class PsHeaderComponent {
  // @Input() cards:any
  @Input() pSSwitchIcon:any;
  @Input() pSLogoInfo:any;
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
