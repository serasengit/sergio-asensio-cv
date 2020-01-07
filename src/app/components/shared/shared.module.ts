import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CabeceraComponent } from 'src/app/components/shared/cabecera/cabecera.component';
import { TranslateModule } from '@ngx-translate/core';
import { CabeceraService } from 'src/app/services/cabecera.service';


@NgModule({
    imports: [CommonModule, TranslateModule],
    declarations: [CabeceraComponent],
    exports: [CabeceraComponent],
    providers: [
        CabeceraService
    ],
})
export class SharedModule { }
