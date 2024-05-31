let bank ={
    arrOfUsers: [],
    createAcc()
    {
        let uname = prompt(`Enter the name of the account owner:-`);
        let balance = prompt(`Enter the amount of money the account holder deposited:-`);
        let accType = prompt(`What type of account does the account holder want:-`);
        let accNo = accType.slice(0,3) + Math.floor(10000 + Math.random() * 90000);
        if(!(this.arrOfUsers.includes(item => item["accountNumber"] == accNo)))
        {this.arrOfUsers.push({"accountNumber":accNo,
                                    "name":uname,
                                    "accountType":accType,
                                    "balance":+balance,})
        alert(`Enjoy your account has been created`); }
    },
    deposited(){
        let accNo = prompt(`Enter the account number in which you want deposit the money:-`);
        let a=this.arrOfUsers.find(item => item["accountNumber"] == accNo);
        if( a!= undefined){
            a["date"] = new Date().toJSON();
            a["lastEditFor"] = "deposited";
            let deposit = prompt(`Enter the amount of money the account holder wants to deposit:-`);
            a.balance += deposit;
        }
        else 
        {
            alert(`Account with Account number ${accNo} does not exist`);
        }
    },
    Withdraw(){
        let accNo = prompt(`Enter the account number in which you want Withdraw the money:-`);
        let a=this.arrOfUsers.find(item => item["accountNumber"] == accNo);
        if( a!= undefined){
            a["date"] = new Date().toJSON();
            a["lastEditFor"] = "Withdrawn";
            let Withdraw = prompt(`Enter the amount of money the account holder wants to Withdraw:-`);
            a.balance += Withdraw;
        }
        else 
        {
            alert(`Account with Account number ${accNo} does not exist`);
        }
    },
    showBalance(){
        let accNo = prompt(`Enter the account number in which you want to check the balance:-`);
        let a=this.arrOfUsers.find(item => item["accountNumber"] == accNo);
        if( a!= undefined){
            alert(`The balance of the account ${accNo} is ${a.balance}`);
            }
        else{
            alert(`Account with Account number ${accNo} does not exist`);
        }
    },

    seeAllUsers(){
        let a=this.arrOfUsers;
        let str = "";
        for(let i=0;i<a.length;i++){
            str += `Account Number: ${a[i].accountNumber} \n Name: 
            ${a[i].name} \n Account Type: ${a[i].accountType} \n Balance:
            ${a[i].balance} \n Last Edit For: ${a[i].lastEditFor
            }
        \n Date: ${a[i].date} \n \n`;
        }
    alert(str);
    },

    seeAllUsersByType(){
        let a=this.arrOfUsers;
        let str = "";
        let type = prompt(`Enter the type of account you want to see:-`);
        for(let i=0;i<a.length;i++){
            if(a[i].accountType == type){
                str += `Account Number: ${a[i].accountNumber} \n Name:
                ${a[i].name} \n Account Type: ${a[i].accountType} 
                \n Balance: ${a[i].balance} \n Last Edit For: ${a[i]
                .lastEditFor} \n Date: ${a[i].date} \n \n
                `;
            }
        }
        alert(str);
    },

    closeAccount(){
        let accNo = prompt(`Enter the account number you want to close:-`);
        let a=this.arrOfUsers.find(item => item["accountNumber"] == accNo);
        if( a!= undefined){
            delete a;
            }
        else{
            alert(`Account with Account number ${accNo} does not exist`);
        }
    }
}

        