import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { SafePipe } from './pipes/safe.pipe';




@NgModule({
    declarations: [
        SafePipe
    ],
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers: [
    ],
    exports: [
        SafePipe
    ]
})
export class CoreModule { }
