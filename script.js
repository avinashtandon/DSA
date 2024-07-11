// create an array with 5 students names, after that create a function which takes 2 parameters(allstudents & studentsName)
//iterate over all students and find that specific user "studentName"
const studentdata = ['yb', 'avinash', 'dinesh', 'parth', 'dinesh']
const findingstudent =(allstudents,studentsName)=>{
    for(let i=0; i<studentdata.length; i++){
        if(allstudents[i] == studentsName){
            console.log(`user found ${studentsName}`)
        } 
        
    }

}
findingstudent(studentdata,'parth')