import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatDialogModule
    ],
    exports: [
        CommonModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatDialogModule
    ]
})
export default class CoreModule {}
