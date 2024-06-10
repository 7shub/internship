let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };
let user = [ john, pete, mary ];
let usersMapped = user.map(item =>{
    return {full_name:item.name+" "+item.surname,
            id:item.id}
});
    alert( usersMapped[0].id ) // 1
    alert( usersMapped[0].full_name ) // John Smith
    /*the above method cn also be written like this 
    let usersMapped = user.map(item =>({full_name:item.name+" "+item.surname,
            id:item.id}));*/