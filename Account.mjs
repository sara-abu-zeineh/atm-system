import {generateUniqueId} from "./helpers/helper.mjs";

export class Account {
    constructor(account) {
        this.id = generateUniqueId();
        this.userName = account.userName;
        this.password = account.password;
        this.gender = account.gender;
        this.email = account.email;
        this.firstName = account.firstName;
        this.lastName = account.lastName;
        this.balance = account.balance;
        this.lastInteract = account.lastInteract;
        this.currencyType = account.currencyType;
    }

    cashWithDraw(amountToWithDraw) {
        if (amountToWithDraw < this.balance) {
            this.balance = this.balance - amountToWithDraw;

            console.log(`Your new Balance is ${
                this.balance
            }`);
            
            return;
        }
        console.log(`Insufficient Balance`);
    }

    cashDeposit() {}

    changePassword() {}

    transferFund() {}

}
