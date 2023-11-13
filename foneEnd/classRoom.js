$.ajax({
    url: "http://localhost:8080/api/classRooms",
    type: "GET",
    success: function (data) {
        let content;
        for (let i = 0; i < data.length; i++) {
            content += `<option value=${data[i].id}>${data[i].name}</option>`
        }
        document.getElementById("classRoom").innerHTML = content;
    },
    error: function (err) {
        console.log(err)
        // lỗi
    }
})
function findOne(){
    let idUpdate = localStorage.getItem("idStudent");
    $.ajax({
        url: `http://localhost:8080/api/students/${idUpdate}`,
        type: "GET",
        success: function (data) {
            $("#name").val(data.name)
            $("#idCode").val(data.number)
            $("#age").val(data.age)
            $("#salary").val(data.salary)
            $("#classRoom").val(data.classRoom.id)
        }
    })
}
