var employees=[
    {
    emp_id:"df01",    
    emp_name:"kavya",
    emp_photo:"https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083378__340.jpg",
    emp_age:21,
    emp_gender:"female",
    emp_company:"abs technology",
    emp_sal:25000,
    emp_location:"bangalore",
    emp_doj:new Date('2015/05/02'),
    emp_education:"BE"
    },
    {
        emp_id:"we02",    
        emp_name:"namrata",
        emp_photo:"https://cdn.pixabay.com/photo/2016/10/07/12/19/ipad-1721428__480.jpg",
        emp_age:22,
        emp_gender:"female",
        emp_company:"abc grp",
        emp_sal:26000,
        emp_location:"bangalore",
        emp_doj:new Date('2015/05/02'),
        emp_education:"BE"
        },
    {
        emp_id:"cp03",    
        emp_name:"sushanth",
        emp_photo:"https://cdn.pixabay.com/photo/2019/04/17/00/03/handsome-4133131__480.jpg",
        emp_age:21,
        emp_gender:"male",
        emp_company:"unknown",
        emp_sal:" fresher give me a job",
        emp_location:" bangalore",
        emp_doj:new Date('2016/05/02'),
        emp_education:"B.tech"
        },
    {
        emp_id:"ss04",    
        emp_name:"Abhi",
        emp_photo:"https://cdn.pixabay.com/photo/2015/08/11/21/28/man-885225__480.jpg",
        emp_age:21,
        emp_gender:"male",
        emp_company:"unknown technology",
        emp_sal:29000,
        emp_location:"bangalore",
        emp_doj:new Date('2017/05/02'),
        emp_education:"MTech"
        }
];

var emp=[];
employees.forEach(empData=>{
    emp.push(`
    <div class="card" style="width: 18rem;">
  <img src="${empData.emp_photo}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${empData.emp_name}</h5>
    <span class="badge badge-success float-right">${empData.emp_id}</span><br>
    <hr class="hr">
    <span class="badge badge-success float-right">${empData.emp_education}</span><br>
    <li class="list-group-item">salary:${empData.emp_sal}</li>
    <li class="list-group-item">age:${empData.emp_age}</li>
    <li class="list-group-item">location:${empData.emp_location}</li>
    <li class="list-group-item">company:${empData.emp_company}</li>
    <li class="list-group-item">company:${empData.emp_doj}</li>


    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `);
});
document.getElementById('template').innerHTML=emp;