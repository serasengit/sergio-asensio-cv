import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CabeceraService {

    private section = new BehaviorSubject('home');
    currentSection = this.section.asObservable();

    constructor() { }

    setSection(section: string) {
        this.section.next(section);
    }
    getSection() {
        return this.section.asObservable();
    }
}
