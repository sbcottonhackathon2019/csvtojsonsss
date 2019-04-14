/** csv file
a,b,c
1,2,3
4,5,6
*/
const csvFilePath='./testdata/csv/school.csv'
import csv from 'csvtojson';

csv()
.fromFile('./testdata/csv/school.csv')
.then((jsonObj:any)=>{
    console.log(jsonObj);
    /**
     * [
     * 	{a:"1", b:"2", c:"3"},
     * 	{a:"4", b:"5". c:"6"}
     * ]
     */ 
})
 

 