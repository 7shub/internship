let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
    ];
    function groupById(arr){
        let user = users.map(item=> 
            {
                return {[item.id]:item}
            });
        return user;
    }

    let usersById = groupById(users);
    console.log(JSON.stringify(usersById))
