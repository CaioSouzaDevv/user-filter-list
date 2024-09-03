import { NgModule } from "@angular/core";
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    imports:[
        MatListModule,
        MatDividerModule,
        MatFormFieldModule, 
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
         MatSelectModule

    ],
    exports:[
        MatListModule,
        MatDividerModule,
        MatFormFieldModule, 
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule
    ],
    
})
export class AngularMaterialModule {

}