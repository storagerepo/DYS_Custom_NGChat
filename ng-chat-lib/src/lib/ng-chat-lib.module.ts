import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgChatLibComponent } from './ng-chat-lib.component';
import { CommonModule } from '@angular/common';
import { BasicSocketConComponent } from './basic-socket-con/basic-socket-con.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { ColorPickerModule } from 'ngx-color-picker';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 


@NgModule({
  declarations: [NgChatLibComponent, BasicSocketConComponent],
  imports: [
    FormsModule,
    CommonModule,
    PickerModule,
    ColorPickerModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,

  ],
  exports: [BasicSocketConComponent],
})
export class NgChatLibModule { }
