import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CabeceraComponent } from 'src/app/components/shared/cabecera/cabecera.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
    imports: [TranslateModule],
    declarations: [CabeceraComponent],
    exports: [CabeceraComponent]
})
export class SharedModule { }
