import { Account } from './account';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('Account', () => {
  let service: Account;
  let httpClient: HttpClient;
  let httpController: HttpTestingController;
 beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [Account],
    });
    service = TestBed.inject(Account);
    httpClient = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
    });
  afterEach(() => {
    httpController.verify();
  });
  it('should create an instance', () => {
    expect(new Account()).toBeTruthy();
  });
  
  it('is created', () => {
    expect(service).toBeDefined();
  });
});
