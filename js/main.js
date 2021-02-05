//zadatak 1 sa casa 
let osoba = {
    name: 'Sara',
    age:22,
    children:[
        {
            name:'Tamara',
            age:3,
        },
        {
            name:'Ana',
            age:16,
        },
        {
            name:'Lana',
            age:8
        }
    ],
    oldest: function(){
        let najstarije = this.children[0].age
        let max = 0
        let children1 = []
       // let children1 = []
        for(let i = 0; i < this.children.length; i++){
            if(najstarije < this.children[i].age){
                najstarije = this.children[i].age
                max = i
               
            } 
        }
        
        for(let i = 0; i < this.children.length; i++){
            if(i!== max){
                children1[children1.length] = this.children[i]
            }
        }
            
        children=children1;
        console.log(children)
    },
    

}

osoba.oldest()

// zadatak 2 sa casa 

let football = [
    ['Engleska', 'Srbija', 'Italija', 'Španija','Francuska'],
    ['WayneRooney', 'NemanjaMatic', 'FilippoInzaghi', 'SergioRamos', 'PaulPogba'],
    ['spic', 'zadnjivezni', 'spic', 'stoper', 'vezni']
]

function RepackToObject() {
    let footballObject = {}
    footballObject.Teams = {}
    footballObject.players = {}
    footballObject.positions = {}
    // let footballObject.Player = {}
    // let footballObject.Position = {}
    for(let i = 0; i < football.length; i ++){
        footballObject.Teams[i] = football[0][i]    
        footballObject.players[i] = football[1][i]
        footballObject.positions[i] = football[2][i]
        

    }
    console.log(footballObject);
}

RepackToObject()

// task 1 
var person = {
    name: "Mike",
    age: 28,
    married: true
}
function changePerson(){
    for(var {}in person){
        if(person.married==true){
            delete person.married;
            person.age=34;
        }

    }console.log(person)
}
changePerson()
// task 2
var person = {
    name: "Jack",
    age: 32,
    married: true
}
function findPersons(){
    var newPerson={};
    children=[];
    if(person.children==undefined){
        person.children=[
        {
            name:"Sara",
            age:10,
            gender:"female"
        },
        {
            name:"Jana",
            age:9,
            gender:"female"
        },
        {
            name:"Tamara",
            age:6,
            gender:"female"
        }];
        newPerson=person;
    }
    console.log(newPerson)
}
findPersons();

// task 3
var students = [ 
   {
       name: 'Mike',
       age: 28,
       passed: false
   },
   {
       name: 'Anna',
       age: 23,
       passed: true
   },
   {
       name: 'Jack',
       age: 32,
       passed: true
   },
];
function Exams(){
    for (var i=0;i<students.length;i++){
        if(students[i].passed==true){
            console.log(students[i].name + " ","passed exam")
        }else{
            console.log(students[i].name + " ","didnt pass exam")
        }
 
    }
    }
    Exams();

    // task 4
    var students = [ 
   {
       name: 'Mike',
       age: 28,
       passed: false
   },
   {
       name: 'Anna',
       age: 23,
       passed: true
   },
   {
       name: 'Jack',
       age: 32,
       passed: true
   },
];

function transformArray(){
    var  studentsArray=[];
    var names=[];
    var ages=[];
    var passed=[];
    for(var i=0;i<students.length;i++){
        names[i]=students[i].name;
        ages[i]=students[i].age;
        passed[i]=students[i].passed;
    }
    console.log(names,ages,passed)
}
transformArray();

// task 5
var person = {
    name: "Jack",
    age: 32,
    married: true
}
var newPerson=Object.create(person);
console.log(newPerson.age)

// task 6
var person = {
    name: "Mike",
    age: 28,
    married: true,
    findNameAndAge:function(){
        return this.name + " " + this.age;
    }
};
console.log(person.findNameAndAge())

// task 7
function addProperties(personObject,name,age,married){
personObject.name = name;
personObject.age = age;
personObject.married = married;

}


var person = {};

addProperties(person,"Sara",22,false);


console.log(person);
