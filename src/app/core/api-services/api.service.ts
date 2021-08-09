import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { NetworkConfig } from "../config/network.config";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  constructor(private httpClient: HttpClient) { }

  public getMatches(): Observable<any> {
    const url = environment.BASE_URL + NetworkConfig.GET_ALL_MATCHES + '?current=UPCOMMING&teamHomeId=' + localStorage.getItem('TEAM_ID');
    return this.httpClient.get<any>(url);
  }

  public findMatch(matchId: string): Observable<any> {
    const url = environment.BASE_URL + NetworkConfig.FIND_MATCH + matchId;
    return this.httpClient.get<any>(url);
  }

  public getMatchTickets(matchId: string, teamId: string): Observable<any> {
    let body = {
      matchId,
      teamId
    }
    const url = environment.BASE_URL + NetworkConfig.TICKET;
    return this.httpClient.post<any>(url, body);
  }

  public findInvoiceToPay(invoiceId: string): Observable<any> {
    const url = environment.BASE_URL + NetworkConfig.FIND_INVOICE_TO_PAY + invoiceId;
    return this.httpClient.get<any>(url);
  }

  public createInvoice(form: any): Observable<any> {
    let body: any = {
      teamId: form.teamId,
      matchId: form.matchId,
      firstName: form.firstName,
      lastName: form.lastName,
      mobile: form.mobile,
      email: form.email,
      shoppingCart: [],
      recaptcha: form.recaptcha
    };

    for (let i = 0; i < form.shoppingCart.length; i++) {
      if(form.shoppingCart[i].quantity > 0) {
        let cart = {
          ticketId: form.shoppingCart[i].ticket.id,
          quantity: form.shoppingCart[i].quantity,
        }
  
        body.shoppingCart.push({
          ticketId: form.shoppingCart[i].ticket.id,
          quantity: form.shoppingCart[i].quantity,
        });
      }
      
    }

    const url = environment.BASE_URL + NetworkConfig.CREATE_INVOICE;
    return this.httpClient.post<any>(url, body);
  }

  public ThreeDS(invoiceId: string, sessionId: string): Observable<any> {
    const body = {
      invoiceId,
      session: sessionId
    };
    let url = environment.BASE_URL + NetworkConfig.CHECK_3DS_SECURE;
    return this.httpClient.post<any>(url, body);
  }

  public validatePayment(invoiceId: string): Observable<any> {
    let body = {
      invoiceId
    }
    const url = environment.BASE_URL + NetworkConfig.CHECK_INVOICE_STATUS ;
    return this.httpClient.post<any>(url, body);
  }

  public contactUs(form): Observable<any> {
    let body = {
      "fullName": form.fullName,
      "title": form.title,
      "message": form.message,
      "email": form.email,
      "mobile": form.mobile,
      "recaptcha": form.recaptcha
  }
    const url = environment.BASE_URL + NetworkConfig.CONTACT_US ;
    return this.httpClient.post<any>(url, body);
  }

  public getSponsor(teamId: string): Observable<any> {
    const url = environment.BASE_URL + NetworkConfig.SPONSOR +  teamId;
    return this.httpClient.get<any>(url);
  }

  public getTeamProfile(): Observable<any> {
    const url = environment.BASE_URL + NetworkConfig.TEAM_PROFILE +  localStorage.getItem('TEAM_ID');
    return this.httpClient.get<any>(url);
  }

}
