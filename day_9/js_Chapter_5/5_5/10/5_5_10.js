let arr = [1, 2, 3];
function shuffle(arr){
   arr.sort(() => Math.random()- 0.5);
}

shuffle(arr);
shuffle(arr);
shuffle(arr);
calprob();
alert(arr);
function calprob(){
    let map=new Map();
    for(let i=0;i<1123;i++)
        {
            shuffle(arr);
            if(map.has(JSON.stringify(arr)))
                {
                    map.set(JSON.stringify(arr),map.get(JSON.stringify(arr))+1);
                }
            else
            {
                map.set(JSON.stringify(arr),1);
            }
        }
        console.log(map);
    for(const key of map.keys())
    {
        console.log(key, map.get(key)/1123)
        map.set(key,map.get(key)/1123)
    }
    console.log(map);
}
123
132
321
312
231
213