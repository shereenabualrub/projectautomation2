let names =["ahmad","shereen","yousef","omar","baraa","farah","ghydaa","mohammad"]

console.log(names[3])



function checkTheName(theletter){

for(let i = 0; i<names.length; i++){
   
    if(names[i][1]==theletter){
        console.log(`this name ${names[i]} is start with ${theletter}`);
    }
}}

checkTheName("h")



let namess =["ahmad","shereen","yousef","omar","baraa","farah","ghydaa","mohammad"];
var smallLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let myRandomIndex= Math.floor(Math.random()*smallLetters.length);
    //console.log(smallLetters[myRandomIndex])
    let Genratedletter = smallLetters[myRandomIndex];
    console.log(Genratedletter)
    function checkTheNamee(){
        
    for(let i = 0; i<namess.length; i++){
   
        if(names[i][0]==Genratedletter){
            console.log(`this name ${namess[i]} is start with ${Genratedletter}`);
        }
    }}
    checkTheNamee("s");