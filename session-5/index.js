//Task 1

function getGrade(total) {
     if (total >=90) {
     console.log("this is grade A+");

}
     if (total >=80) {
     console.log("this is grade A");
      
} 
     if (total >=70) {
     console.log("this is grade B");

}
     if (total >=60) {
     console.log("this is grade C");

}    
     if (total >=50) {
     console.log("this is grade D");

}
     if (total >=40) {
     console.log("this is grade E");

}     
     if (total <=30) {
     console.log("YOU FAIL");

}}

//Task 2
function getGradeSwitch(total)

{
    switch(true){
        case total >90:
             console.log('this is grade A+')
             break
        case (total<=90 && total >80):
             console.log('this is grade A')
             break
        case (total<=80 && total >70):
             console.log('this is grade B')
             break
        case (total <=70 && total >60):
             console.log('this is grade C')
             break
        case (total <=60 && total >50):
            console.log('this is grade D')
            break        
        case (total <=50 && total >40):
            console.log('this is grade E')
            break        
        case (total <=40 && total >30):
            console.log('this is grade F')
            break             
        case total <=30:
            console.log('this is grade FAIL')
        default:
            console.log('no result')
    }
}
    
//Task 3  


