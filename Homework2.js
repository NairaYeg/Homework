//task 1
let a = (-(-prompt("")))
let b = (-(-prompt("")))
let c = (-(-prompt("")))

if (a===0 || b===0 || c===0) {
    alert("unsignet")
}  if (a>0 && b>0 && c>0 || a>0 && b<0 && c<0 || a<0 && b<0 && c>0 || a<0 && b>0 && c<0 ) {
         alert("+")
} else {
         alert("-")
}  

//task 2

let digit = (-(-prompt ("input digit")))
let number = (-(-prompt ("input the number")))
let res
 

 if (res !== digit) {
    while ( number>0 && res !== digit){
          res = number%10
          number = ((number-res)/10)
    }   if (res===digit){
        alert ("Yes")
    }  else { alert ("No")}    

 }   

 //task 3 
 let number = prompt ("")
 number.toString
 let n=number.length
 let First_Digit = number[0]
 let Last_Digit = number[n-1]
 let res=Last_Digit
 
 for (let i=1 ; i<=(n-2); i++) {
      res = res+ number[i]
     
 }
 
   res =res+ First_Digit
   alert (res)
    
// task 4
let x= prompt("")
let y=prompt("")
let z=prompt("")
let arr=[x,y,z]
arr.sort(function(a,b)
{
  if(a>b){return 1;}
 if(a<=b){
    return -1;
  }
})
alert (arr) 


    
 //task 5 
let a = (-(-prompt("")))
let b = (-(-prompt ("")))
let c = (-(-prompt ("")))
let D
let X1
let X2
if(a===0) {
  alert("Enter valid constants")
}  else {
D = b*b-4*a*c 
if (D<0) {
  alert("Solution does note exists")
} else {
  X1 = (-b + Math.sqrt(D))/(2*a)
  X2 = ( -b - Math.sqrt(D))/(2*a)
  let res = "Solutions are" + " "+ X1 + " " + "and" + " " + X2
  alert ( res )
 
}   
}



// task7

let angle = prompt ("եռանկյուն թե ուղղանկյուն") 
const Angle1 = "triangle"
const Angle2 = "rectangle"

if (angle === Angle1 ) {
  let h = (-(-prompt("Եռանկյան բարձրություն")))
  let a = (-(-prompt("Եռանյան հիմք")))
  if (h<=0 || a<=0) {
     alert("enter valid constnts")
  } else {
     res1 = (a*h)/2
     alert(res1)
} 
  } 
   if ((angle === Angle2) ) {
    let c = (-(-prompt("ուղղանկայան կողմ")))
    let b = (-(-prompt("ուղղանկայան կողմ")))
     if (c<=0 || b<=0) {
       alert ("enter valid constnts")
     } else {
        let res2 = c*b
        alert (res2)
     }
  } 
 