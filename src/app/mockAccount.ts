import { Account } from "src/app/account";

const mockAccount1: Account = {
    "accid":15007545,"userid":77840,"bname":"Magarpatta","atype":"C","abalance":75000.57
};


const mockAccount2: Account = {
    "accid":15007546,"userid":77842,"bname":"Alandi","atype":"S","abalance":60000.75
};

const mockAccount3: Account = {
    "accid":15007552,"userid":77850,"bname":"Moshi","atype":"S","abalance":56000.89
};

const mockAccountArray: Account[] = [mockAccount1, mockAccount2, mockAccount3];

export { mockAccount1, mockAccount2, mockAccount3, mockAccountArray };