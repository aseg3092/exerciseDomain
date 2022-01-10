let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];


// for(let i=0;i<pronoun.length;i++)
// {
//     for(let j=0;j<adj.length;j++)
//     {
//         for(let k=0;k<noun.length;k++)
//         {
//             console.log(pronoun[i]+adj[j]+noun[k]+".com");
//         }
        
//     }
// }

/// igual q cm se muestra en las instrucciones
for(let i=0;i<pronoun.length;i++)
{
    for(let j=0;j<adj.length;j++)
    {
        for(let k=0;k<noun.length;k++)
        {

            if( i==0 && j ==1)
            {
                console.log(pronoun[j]+adj[i]+noun[k]+".com");
            }
            else if(i===1 && j===0)
            {
                console.log(pronoun[j]+adj[i]+noun[k]+".com");
            }
            else{
                console.log(pronoun[i]+adj[j]+noun[k]+".com");
            }

        }
        
    }
}