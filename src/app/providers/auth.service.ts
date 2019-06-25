// Angular
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { gateway as MoltinGateway, gateway } from "@moltin/sdk";

// Data providers
import { of, Observable } from "rxjs";

@Injectable()
export class AuthProvider {
  constructor(private _http: HttpClient) {}

  getImplicitToken(): any {
    /*     return this._http.post<any>("https://api.moltin.com/oauth/access_token", {
      client_id: "7iOr5KBAKSoRSFZWG1IMVqdUqwvZlMErhNqcimpe9i",
      grant_type: "implicit"
    }); */

    const Moltin = gateway({
      client_id: "7iOr5KBAKSoRSFZWG1IMVqdUqwvZlMErhNqcimpe9i"
    });
  }
}
