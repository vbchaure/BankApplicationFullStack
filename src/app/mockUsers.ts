import { User } from "./user";

const mockBook1:User = {
    "userid":10020,
    "name":"Virendra",
    "emailid":"Virendra@am.com",
    "mobile":"9766566929",
    "smobile":"7888040044",
    "dob":"2000-03-02",
    "gender":"M"
};

const mockBook2:User = {
    "userid":10021,
    "name":"Abhinay",
    "emailid":"Abhinay@am.com",
    "mobile":"9766566929",
    "smobile":"7888040044",
    "dob":"2000-03-02",
    "gender":"M"
};

const mockBook3:User = {
    "userid":10022,
    "name":"Jatan",
    "emailid":"Jatan@am.com",
    "mobile":"9766566929",
    "smobile":"7888040044",
    "dob":"2000-03-02",
    "gender":"M"
};

const mockBook4:User = {
    "userid":10022,
    "name":"Abhishek",
    "emailid":"Jatan@am.com",
    "mobile":"9766566929",
    "smobile":"7888040044",
    "dob":"2000-03-02",
    "gender":"M"
};
const mockBookArray: User[] = [mockBook1, mockBook2, mockBook3,mockBook4];
export { mockBook1, mockBook2, mockBook3,mockBook4, mockBookArray };