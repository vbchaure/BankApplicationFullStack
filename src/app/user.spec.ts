import { User } from './user';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

describe('User', () => {
  let service: User;
  let httpClient: HttpClient;
  let httpController: HttpTestingController;
 beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [User],
    });
    service = TestBed.inject(User);
    httpClient = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
    });
  afterEach(() => {
    httpController.verify();
  });
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });
  
  it('is created', () => {
    expect(service).toBeDefined();
  });
});