import { Component } from '@angular/core';
import { Profil } from 'src/app/interfaces/profil';
import { bbdd } from "../../BBDD/bbdd";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  profiles: Profil[] = bbdd;
  profilDel = '';  

  deleteProfil(index: number): void {
    const a = this.profiles.splice(index, 1 )[0];
    this.profilDel = `${a.nombre} ${a.apellidos}`
  }

}
