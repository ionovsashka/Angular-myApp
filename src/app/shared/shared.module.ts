import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "./services/auth.service";

import { ImageCropperModule } from "ngx-image-cropper";

@NgModule({
  imports:[
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ImageCropperModule
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ImageCropperModule
  ],
  providers:[AuthService]
})

export class SharedModule{
}
