import { Component } from "@angular/core";
import { Profil } from "src/app/interfaces/profil";
import { bbdd } from "../../BBDD/bbdd";

@Component({
    selector: 'app-profil',
    templateUrl: 'profil.component.html'
})
export class ProfilComponent {
    nombre  = 'Elisabeth';
    apellido = 'Toré Mittendorfer';
    edad    = 38;
    db: Profil[] = bbdd;
    contador = 0

    get nombreCapitalizado() {
        const nombreCompleto = `${this.nombre} ${this.apellido}`;
        return nombreCompleto.toUpperCase();
    }

    perfil() {
        return `${this.nombre} ${this.apellido} tiene ${this.edad}`;
    }

    cambiarNombre() {
        this.contador += 1;
        if(this.contador >= this.db.length) {
            this.contador = 0;
        }
        this.nombre = this.db[this.contador].nombre;
        this.apellido = this.db[this.contador].apellidos;
        this.edad = this.db[this.contador].edad;
    }

}