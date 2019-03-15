



 let pronoun = ['the','our'];
  let adj = ['great', 'big' ];
  let noun = ['jogger','racoon'];
   let alligator = "";

pronoun.forEach((pronoun) =>{
    adj.forEach((adj) => {
      noun.forEach((noun) => {
        alligator += pronoun + adj + noun + ".com" + "<br>";
  
      });
    });  
});    
        

  document.querySelector("p").innerHTML = alligator;
