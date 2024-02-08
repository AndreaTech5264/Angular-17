import { NgModule } from "@angular/core";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule, matFormFieldAnimations} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    exports:[
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule
        
    ]
})

export class MaterialModule {

}