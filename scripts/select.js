/** @format */
const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");
const jquery = document.getElementById("jquery");
const java = document.getElementById("java");
const python = document.getElementById("python");
const cpp = document.getElementById("cpp");
const sql = document.getElementById("sql");
const c = document.getElementById("c");

let cppq = [
  {
    question: "What is C++ ?",
    choice1: "C++ is an object oriented programming language",
    choice2: "C++ is a procedural programming language",
    choice3:
      "C++ supports both procedural and object oriented programming language",
    choice4: "C++ is a functional programming language",
    answer: 3,
  },
  {
    question:
      "Which of the following is the correct syntax of including a user defined header files in C++ ?",
    choice1: "#include [userdefined]",
    choice2: "#include “userdefined”",
    choice3: "#include <userdefined.h>",
    choice4: "#include <userdefined.h>",
    answer: 2,
  },
  {
    question:
      "Which of the following user-defined header file extension used in c++?",
    choice1: "hg",
    choice2: "c",
    choice3: "hf",
    choice4: "cpp",
    answer: 4,
  },
  {
    question:
      "Which of the following user-defined header file extension used in c++ ?",
    choice1: "Friend constructor",
    choice2: "Default constructor",
    choice3: "Parameterized constructor",
    choice4: "Copy constructor",
    answer: 1,
  },
  {
    question: "Which of the following correctly declares an array in C++ ?",
    choice1: "array{10};",
    choice2: "array array[10];",
    choice3: "int array;",
    choice4: "int array[10];",
    answer: 4,
  },
];

let htmlq = [
  {
    question: "What is html ?",
    choice1: "C++ is an object oriented programming language",
    choice2: "C++ is a procedural programming language",
    choice3:
      "C++ supports both procedural and object oriented programming language",
    choice4: "C++ is a functional programming language",
    answer: 3,
  },
  {
    question:
      "Which of the following is the correct syntax of including a user defined header files in html ?",
    choice1: "#include [userdefined]",
    choice2: "#include “userdefined”",
    choice3: "#include <userdefined.h>",
    choice4: "#include <userdefined.h>",
    answer: 2,
  },
  {
    question:
      "Which of the following user-defined header file extension used in html?",
    choice1: "hg",
    choice2: "c",
    choice3: "hf",
    choice4: "cpp",
    answer: 4,
  },
  {
    question:
      "Which of the following user-defined header file extension used in html ?",
    choice1: "Friend constructor",
    choice2: "Default constructor",
    choice3: "Parameterized constructor",
    choice4: "Copy constructor",
    answer: 1,
  },
  {
    question: "Which of the following correctly declares an array in html ?",
    choice1: "array{10};",
    choice2: "array array[10];",
    choice3: "int array;",
    choice4: "int array[10];",
    answer: 4,
  },
];

html.addEventListener("click", () => {
  const questions = htmlq;
  console.log(questions);
  localStorage.setItem("questions", questions);
  return window.location.assign("game.html");
});

cpp.addEventListener("click", () => {
  const questions = cppq;
  console.log(questions);
  localStorage.setItem("questions", questions);
  return window.location.assign("game.html");
});
