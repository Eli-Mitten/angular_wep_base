import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfilesModule } from './profiles/profiles.module';
import { ContadorModule } from './contador/contador.module';


@NgModule({
    declarations: [
        AppComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ProfilesModule,
        ContadorModule
    ]
})
export class AppModule { }
