import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-ps-card',
  templateUrl: './ps-card.component.html',
  styleUrls: ['./ps-card.component.scss']
})
export class PsCardComponent {
	@Input() cardInfo: any;
	@Output() emitCtaClick = new EventEmitter<any>();
	
  
	ngOnInit() {
	}
	cardCtaClick(event:any, card:any){
		console.log('event ', event, 'card ', card);
		this.emitCtaClick.emit(card);
	}
}
