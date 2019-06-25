import { Component } from "@angular/core";
import { ProductDataProvider } from "./providers/product.service";
import { AuthProvider } from "./providers/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  constructor(
    public productDataProvider: ProductDataProvider,
    public authProvider: AuthProvider
  ) {
    /* this.productDataProvider.getProducts().subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    ); */
    this.authProvider.getImplicitToken();
  }
}
