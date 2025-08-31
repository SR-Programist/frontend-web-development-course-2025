async function getData(){
    try{
        let res = await fetch("https://api.github.com/users/mojombo");
        console.log(res);
        console.log(res.status);
    } catch{
        console.log(Error);
    }
}

getData();