//  1.student Array
const students = [
    {
        ID: 1,
        name: 'Alice',
        age: 21,
        grade: 'A',
        degree: 'Btech',
        email: 'alice@example.com'
    },
    {
        ID: 2,
        name: 'Bob',
        age: 22,
        grade: 'B',
        degree: 'MBA',
        email: 'bob@example.com'
    },
    {
        ID: 3,
        name: 'Charlie',
        age: 20,
        grade: 'C',
        degree: 'Arts',
        email: 'charlie@example.com'
    }
];


// 2.Rendering Student Data
function renderStudent(defaultData = students) {
    const tbody = document.getElementById('student-body')
    tbody.innerHTML = "";
    defaultData.forEach((student) => {
        const row = document.createElement('tr')
        const columns = ["ID", "name", 'age', 'grade', 'degree', 'email']

        columns.forEach((column) => {
            const td = document.createElement('td')
            td.textContent = student[column];
            row.appendChild(td)
        })
        const actionTd = document.createElement('td');

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editStudent(student.ID)

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteStudent(student.ID)

        actionTd.appendChild(editButton);
        actionTd.appendChild(deleteButton);

        row.appendChild(actionTd);

        tbody.appendChild(row)
    })
}
renderStudent()

// 3.Function for Submission of entered data

function handleSubmit() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const degree = document.getElementById("degree").value;
    const grade = document.getElementById("grade").value;
    const email = document.getElementById("email").value;
    const studentID = document.getElementById("student-id").value;
    if (studentID) {
        const student = students.find((s) => s.ID == studentID)
        student.name = name
        student.age = age
        student.degree = degree
        student.grade = grade
        student.email = email
    } else {
        const newStudent = {
            ID: students.length + 1,
            name,
            age,
            degree,
            grade,
            email,
        }
        students.push(newStudent);

    }
    
    renderStudent()

    return false;

}


// 4.Edit function

function editStudent(studentID) {
    const student = students.find((s) => s.ID == studentID);
    document.getElementById('name').value = student.name;
    document.getElementById("age").value = student.age
    document.getElementById("degree").value = student.degree
    document.getElementById("grade").value = student.grade
    document.getElementById("email").value = student.email
    document.getElementById("student-id").value = student.studentID
    document.getElementById('submit-btn').textContent = 'Confirm Edit';
}

// 5.Delete function
function deleteStudent(studentID) {
    const index = students.findIndex((s) => s.ID == studentID);
    students.splice(index, 1);
    renderStudent();
    alert('Deletion Confirmed!')
}
// 6.Search function
function searchStudent() {
    const searchedValue = document.getElementById("search-input").value.toLowerCase();
    const filteredResult = students.filter((student) => {
        return (
            student.name.toLowerCase().includes(searchedValue) ||
            student.email.toLowerCase().includes(searchedValue) ||
            student.degree.toLowerCase().includes(searchedValue)
        )
    })

    renderStudent(filteredResult);
}