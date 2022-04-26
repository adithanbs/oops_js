function employee (name,age,salary){
this.name = name;
this.age = age;
this.salary = salary;

let bones = 1000;

let totalSalary = function(){
    return(salary+bones)
}
this.getdetail = function()

{
    console.log(totalSalary())
    console.log(`Employee Name : ${name}, Employee Age :  ${age}, EmployeeSalary : ${age} `);
}

}

let emp1 = new employee("Ragul",27,40000);
emp1.getdetail();