// import { UserListComponent } from './user-list.component';
// import { TestBed } from '@angular/core/testing';
// import {
//   HttpClientTestingModule,
//   HttpTestingController,
// } from '@angular/common/http/testing';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { ActivatedRoute,Router} from '@angular/router';
// const testData =[
//     {
//         "userid":10020,
//         "name":"AshnishaC",
//         "emailid":"Ashnisha@am.com",
//         "mobile":"9766566929",
//         "smobile":"7888040044",
//         "dob":"2000-03-02",
//         "gender":"F"
//     },
//     {
//         "userid":11444,
//         "name":"vaibhavC",
//         "emailid":"vir@amdocs.com",
//         "mobile":"9766566929",
//         "smobile":"7276336691",
//         "dob":"2000-12-29",
//         "gender":"M"
//     }
// ]
// describe('UserListComponent', () => {
//   let service: UserListComponent;
//   let httpClient: HttpClient;
//   let httpController: HttpTestingController;
//   let route:ActivatedRoute;
//   let router: Router;
//  beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule],
//       providers: [UserListComponent],
//     });
//     service = TestBed.inject(UserListComponent);
//     httpClient = TestBed.inject(HttpClient);
//     httpController = TestBed.inject(HttpTestingController);
//     route=TestBed.inject(ActivatedRoute);
//     router=TestBed.inject(Router);
//     });
//   afterEach(() => {
//     httpController.verify();
//   });
//   it('should create an instance', () => {
//     expect(service).toBeTruthy();
//   });
  
//   it('is created', () => {
//     expect(service).toBeDefined();
//   });
// });

// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { UserListComponent } from './user-list.component';

// describe('UserListComponent', () => {
//   let component: UserListComponent;
//   let fixture: ComponentFixture<UserListComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ UserListComponent ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(UserListComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
