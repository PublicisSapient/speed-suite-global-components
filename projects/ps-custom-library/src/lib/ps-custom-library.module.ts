import { NgModule } from '@angular/core';
import { PsCustomLibraryComponent } from './ps-custom-library.component';
import { PsCardComponent } from './ps-card/ps-card.component';
import { PsTableComponent } from './ps-table/ps-table.component';
import { PsHeaderComponent } from './ps-header/ps-header.component';
import { PsUserProfileDetailsComponent } from './ps-user-profile-details/ps-user-profile-details.component';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuModule } from 'primeng/menu';
import { PsTabsComponent } from './ps-tabs/ps-tabs.component';
import { PsFooterComponent } from './ps-footer/ps-footer.component';



@NgModule({
  declarations: [
    PsCustomLibraryComponent,
    PsCardComponent,
    PsTableComponent,
    PsHeaderComponent,
    PsTabsComponent,
    PsUserProfileDetailsComponent,
    PsFooterComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    TableModule,
    MenuModule,
    TabMenuModule
  ],
  exports: [
    PsCustomLibraryComponent,
    PsTableComponent,
    PsCardComponent,
    PsHeaderComponent,
    PsUserProfileDetailsComponent,
    PsTabsComponent,
    PsFooterComponent
  ]
})
export class PsCustomLibraryModule { }
