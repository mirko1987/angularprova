import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { ProductDataProvider } from "./providers/product.service";
import { HttpClientModule } from "@angular/common/http";
import { AuthProvider } from "./providers/auth.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductDataProvider, AuthProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
