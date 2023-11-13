let arr;
function display(){$.ajax({
    url: "http://localhost:8080/api/students",
    type: "GET",
    success: function (data) {
        arr = data
        let content = `<table class="table table-striped"><tr>
                        <th>#</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                        <th>Department</th>
                        <th colspan="2">Action</th>
                        </tr>`
        for (let i = 0; i < arr.length; i++) {
            content += `<tr>
                        <td>${i + 1}</td>
                        <td>${arr[i].number}</td>
                        <td><a href="" ${arr[i].name}></a>></td>
                        <td>${arr[i].age}</td>
                        <td>${arr[i].salary}</td>
                        <td>${arr[i].classRoom.name}</td>
                        <td><button onclick="updateStudent(${arr[i].id})" class="btn btn-warning">Update</button></td>
                        <td><button onclick="deleteStudent(${arr[i].id})" class="btn btn-danger">Delete</button></td>
                        </tr>`
        }
        content += `</table>`
        document.getElementById("display").innerHTML = content
    }
})
}
function deleteStudent(id){
    $.ajax({
        url: `http://localhost:8080/api/students/${id}`,
        type: "DELETE",
        success: function () {
            alert("delete success!!!")
            display();
        }
    })
}
function create(){
    window.location.href="create.html"
}
function createPost(){
        let student
        let name = $("#name").val()
        let number = $("#idCode").val()
        let age = $("#age").val()
        let salary = $("#salary").val()
        let id = $("#classRoom").val()
            student = {
                name: name,
                number: number,
                age: age,
                salary:salary,
                classRoom :{
                    id:id
                }
        }
        $.ajax({
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            url: "http://localhost:8080/api/students",
            type: "POST",
            data : JSON.stringify(student),
            success: function () {
                alert("Create successfully!")
                window.location.href="homeStudent.html"
            }
        })
        document.getElementById("form").reset()
        event.preventDefault()
}
function updateStudent(id){
    localStorage.setItem("idStudent",id)
    window.location.href="update.html"
}
function updatePost(){
    let student
    let name = $("#name").val()
    let number = $("#idCode").val()
    let age = $("#age").val()
    let salary = $("#salary").val()
    let id = $("#classRoom").val()
    let idUpdate = localStorage.getItem("idStudent");
    student = {
        name: name,
        age: age,
        salary: salary,
        number:number,
        classRoom :{
            id:id
        }
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: `http://localhost:8080/api/students/${idUpdate}`,
        type: "POST",
        data : JSON.stringify(student),
        success: function () {
            alert("update successfully!")
            window.location.href="homeStudent.html"
        }
    })
    document.getElementById("form").reset()
    event.preventDefault()
}
function back(){
    window.location.href="homeStudent.html"
}
function sortI(){
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: `http://localhost:8080/api/students/sortI`,
        type: "GET",
        success: function (data) {
            arr = data
            let content = `<table class="table table-striped"><tr>
                        <th>#</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                        <th>Department</th>
                        <th colspan="2">Action</th>
                        </tr>`
            for (let i = 0; i < arr.length; i++) {
                content += `<tr>
                        <td>${i + 1}</td>
                        <td>${arr[i].number}</td>
                        <td>${arr[i].name}</td>
                        <td>${arr[i].age}</td>
                        <td>${arr[i].salary}</td>
                        <td>${arr[i].classRoom.name}</td>
                        <td><button onclick="updateStudent(${arr[i].id})" class="btn btn-warning">Update</button></td>
                        <td><button onclick="deleteStudent(${arr[i].id})" class="btn btn-danger">Delete</button></td>
                        </tr>`
            }
            content += `</table>`
            document.getElementById("display").innerHTML = content
        }
    })
}function sortD(){
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: `http://localhost:8080/api/students/sortD`,
        type: "GET",
        success: function (data) {
            arr = data
            let content = `<table class="table table-striped"><tr>
                        <th>#</th>
                        <th>Code</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Salary</th>
                        <th>Department</th>
                        <th colspan="2">Action</th>
                        </tr>`
            for (let i = 0; i < arr.length; i++) {
                content += `<tr>
                        <td>${i + 1}</td>
                        <td>${arr[i].number}</td>
                        <td>${arr[i].name}</td>
                        <td>${arr[i].age}</td>
                        <td>${arr[i].salary}</td>
                        <td>${arr[i].classRoom.name}</td>
                        <td><button onclick="updateStudent(${arr[i].id})" class="btn btn-warning">Update</button></td>
                        <td><button onclick="deleteStudent(${arr[i].id})" class="btn btn-danger">Delete</button></td>
                        </tr>`
            }
            content += `</table>`
            document.getElementById("display").innerHTML = content
        }
    })
}
