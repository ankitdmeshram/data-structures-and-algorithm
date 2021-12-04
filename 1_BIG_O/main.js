const nemo = ['nemo', 'popo'];

function findNemo(array) {
    for(let i = 0; i < array.length; i++)
    {
        if(array[i] === 'nemo')
        {
            console.log(i + " Found Nemo");
        } else 
        {
            console.log(i + " Not Found");
        }
    }
}

findNemo(nemo);

