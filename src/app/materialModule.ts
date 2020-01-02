import {NgModule} from '@angular/core'

import{
    MatButtonModule, MatChipsModule,MatInputModule
}from '@angular/material'
import { from } from 'rxjs'
@NgModule({
    imports:[
        MatButtonModule,
        MatChipsModule,
        MatInputModule
    ],
    exports:[
        MatButtonModule,
        MatChipsModule,
        MatInputModule
    ]
})
export class MaterialModule {
    
}