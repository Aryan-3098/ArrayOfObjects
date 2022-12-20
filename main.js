let studentRecords = [ {name: 'John', id: 123, marks : 98 },
          {name: 'Baba', id: 101, marks : 23 },
          {name: 'yaga', id: 200, marks : 45 },
          {name: 'Wick', id: 115, marks : 75 } ] 

console.log('Q1');

var n=studentRecords.map((item)=>item.name.toUpperCase());
console.log(n);

console.log('Q2');

var x=studentRecords.filter((item=>item.marks>50))
console.log(x);

console.log('Q3');

var y=studentRecords.filter((item=>item.marks>50 && item.id>120))
console.log(y);

console.log('Q4');

var z=studentRecords.map((item)=>item.marks)
console.log(z);
var z1=z.reduce((x,y)=>x+y,0)
console.log(z1);

console.log('Q5');

var w=studentRecords.filter((item=>item.marks>50))
var w1=w.map((item)=>item.name)
console.log(w1);

console.log('Q6');

var v=studentRecords.filter((item)=>item.id>120)
var v1=v.map((item)=>item.marks)
var v2=v1.reduce((x,y)=>x+y,0)
console.log(v2);

console.log('Q7');

for(var i=0;i<studentRecords.length;i++){
    if(studentRecords[i].marks<50){
        studentRecords[i].marks=studentRecords.marks+15
    }
}

var u=studentRecords.filter((item)=>item.marks>50)
var u1=u.map((item)=>item.marks)
var u2=u1.reduce((x,y)=>x+y,0)
console.log(u2);