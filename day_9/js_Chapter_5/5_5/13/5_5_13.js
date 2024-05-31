let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
    ];
    function groupById(arr){
        return arr.reduce(function(acc, item) {
            acc[item.id] = item;
            return acc;
            }, {});
    }

    let usersById = groupById(users);
console.log(JSON.stringify(usersById))
/*let user=new Object();
        arr.forEach((item,ind)=> 
            {
                user[item.id]=item;
                console.log(JSON.stringify(user))
            });
            return user;*/ 