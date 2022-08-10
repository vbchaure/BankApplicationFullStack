import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserServiceService } from './user-service.service';
import {
  mockBook1,
  mockBook2,
  mockBook3,
  mockBookArray,
} from './mockUsers';
import { from } from 'rxjs';
import { User } from './user';

describe('UserServiceService', () => {
  let service: UserServiceService;
  let httpClient: HttpClient;
  let httpController: HttpTestingController;
  let url = 'http://localhost:8086/';
 beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ UserServiceService]
    });
    service = TestBed.inject(UserServiceService);
    httpClient = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
 });
  afterEach(() => {
    httpController.verify();
  });
  it('User service is defined', () => {
    expect(service).toBeDefined();
  });
  it('User service created', () => {
    expect(service).toBeDefined();
  });

  it('should call getAllUsers and return an array of Users', () => {
    service.getUsers().subscribe((res) => {
      expect(res).toEqual(mockBookArray);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `http://localhost:8086/getAllUser`,
    });

    req.flush(mockBookArray);
  });
  it('should call getUserById and return the appropriate User', () => {
    const id = 10020;

    service.getUserById(id).subscribe((data) => {
      expect(data).toEqual(mockBook1);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `http://localhost:8086/getuser/${id}`,
    });

    req.flush(mockBook1);
  });
  it('should call updateUser and return the updated user from the API', () => {
    const id = 10020;
    const updatedBook: any = {
      "userid":10020,
      "name":"Virendra",
      "emailid":"Virendra@am.com",
      "mobile":"9766566929",
      "smobile":"7888040044",
      "dob":"2000-03-02",
      "gender":"F"
    };

    service.updateUser(id,updatedBook).subscribe((data) => {
      expect(data).toEqual(updatedBook);
    });

    const req = httpController.expectOne({
      method: 'PUT',
      url: `http://localhost:8086/update/${id}`,
    });

    req.flush(updatedBook);
  });
  it('should call addUser and the API should return the User that was added', () => {
    service.doRegistration(mockBook2).subscribe((data) => {
      expect(data).toEqual(mockBook2);
    });

    const req = httpController.expectOne({
      method: 'POST',
      url: `http://localhost:8086/addUser`,
    });

    req.flush(mockBook2);
  });
  it('should call deleteUser and return the User that was deleted from the API', () => {
    const id = 10020;
    service.deleteUser(id).subscribe((data) => {
      expect(data).toEqual(mockBook3);
    });

    const req = httpController.expectOne({
      method: 'DELETE',
      url: `http://localhost:8086/deleteuser/${id}`,
    });

    req.flush(mockBook3);
  });
});