const studentList = document.querySelector("#studentList");
const expBtn = document.querySelector("#exp-btn");

expBtn.addEventListener("click", () => {
  let studentListArray = Array.from(studentList.children);

  let removeStudent = prompt(
    "Please enter the index of the student to be expelled",
    2
  );
  let inputIndex = parseInt(removeStudent);

  if (inputIndex > studentListArray.length || inputIndex < 1) {
    alert("Please enter a valid index");
    removeStudent = prompt("Please enter the index of the student", 2);
    inputIndex = parseInt(removeStudent);
  }

  let eligibleStudents = studentListArray.filter((_, index) => {
    return inputIndex - 1 !== index;
  });

  studentList.innerHTML = "";

  studentList.append(...eligibleStudents);
});
