import { Injectable } from "@angular/core";
import { Character } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _listCharacters: Character[] = [
        {
            name: "Goku",
            power: 15000
        },
        {
            name: 'Vegeta',
            power: 7500
        }
    ]

    get coListCharacters(): Character[] {
        return [...this._listCharacters];
    }

    addCharacter(data: Character) {
        this._listCharacters.push(data);
    }
}