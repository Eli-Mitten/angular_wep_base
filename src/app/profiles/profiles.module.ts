import { NgModule } from '@angular/core'
import { ProfilComponent } from './profil/profil.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        ProfilComponent,
        ListComponent
    ],
    exports: [
        ListComponent
    ],
    imports: [ 
        CommonModule
    ]
})
export class ProfilesModule {}