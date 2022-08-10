import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AccountServiceService } from './account-service.service';
import {
  mockAccount1,
  mockAccount2,
  mockAccount3,
  mockAccountArray,
} from './mockAccount';
import { Account } from './account'

describe('AccountServiceService', () => {
  let service: AccountServiceService;
  let httpClient: HttpClient;
  let httpController: HttpTestingController;

  let url = 'http://localhost:8086/acc/GetAllAccount';



  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AccountServiceService],
    });
    service = TestBed.inject(AccountServiceService);
    httpClient = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });
  

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should call getAllAccounts and return an array of Accounts', () => {
      service.getAccounts().subscribe((res) => {
        expect(res).toEqual(mockAccountArray);
      });

      const req = httpController.expectOne({
        method: 'GET',
        url: `http://localhost:8086/acc/getAllAccount`,
      });

      req.flush(mockAccountArray);
    });

    it('should call getAccountById and return the appropriate Account', () => {
      const accid = 15007545;
  
      service.getAccountById(accid).subscribe((data) => {
        expect(data).toEqual(mockAccount1);
      });
  
      const req = httpController.expectOne({
        method: 'GET',
        url: `http://localhost:8086/acc/getaccount/${accid}`,
      });
  
      req.flush(mockAccount1);
    });
  
// Account
    it('should call updateAccount and return the updated Account from the API', () => {
      const accid = 15007545;
      const updatedAccount: Account = {
        "accid":15007545,"userid":77840,"bname":"Magarpatta","atype":"C","abalance":75000.57
    };
  
      service.updateAccount(accid, mockAccount1).subscribe((data) => {
        expect(data).toEqual(updatedAccount);
      });
  
      const req = httpController.expectOne({
        method: 'PUT',
        url: `http://localhost:8086/acc/update/${accid}`,
      });
  // http://localhost:8086/acc/update/
      req.flush(updatedAccount);
    });

    it('should call addAccount and the API should return the Account that was added', () => {
      const accid=15007546;
      service.doRegistration(mockAccount2,accid).subscribe((data) => {
        expect(data).toEqual(mockAccount2);
      });
  
      const req = httpController.expectOne({
        method: 'POST',
        url: `http://localhost:8086/acc/addAccount/${accid}`,
      });
  
      req.flush(mockAccount2);
    });
    
    it('should call deleteAccount and return the Account that was deleted from the API', () => {
      const accid = 15007552;
      service.deleteAccount(accid).subscribe((data) => {
        expect(data).toEqual(mockAccount3);
      });
  
      const req = httpController.expectOne({
        method: 'DELETE',
        url: `http://localhost:8086/acc/deleteaccount/${mockAccount3.accid}`,
      });
  
      req.flush(mockAccount3);
    });

});
