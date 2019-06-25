// Angular
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

// Data providers
import { of, Observable } from "rxjs";

@Injectable()
export class ProductDataProvider {
  constructor(private _http: HttpClient) {}

  /**
   *
   *
   * @remarks
   *
   * @param bike :
   * @param coordinates :
   * @returns void
   *
   */
  getProduct(id: string): Observable<any> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      Authorization: "Bearer 7iOr5KBAKSoRSFZWG1IMVqdUqwvZlMErhNqcimpe9ir"
    });
    return this._http.get<any>("https://api.moltin.com/v2/products/" + id, {
      headers: httpHeaders
    });
  }
  getProducts(): Observable<any> {
    return this._http.get<any>("https://api.moltin.com/v2/products/");
  }
}
