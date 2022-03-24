/** @format */
// import { questions } from "./select.js";

const body = document.querySelector("body");
const question = document.querySelector(".question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const progressBarfull = document.querySelector("#progressBarfull");
const scoreText = document.querySelector("#score");
const boardContainer = document.querySelector(".boardContainer");
const container = document.querySelector(".container");
const code = document.querySelector(".codeContainer");

let currentQuestions = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let avaliableQuestion = [];

let cpp = [
  {
    question: "What is C++ ?",
    code: "",
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
    code: "",
    choice1: "#include [userdefined]",
    choice2: "#include “userdefined”",
    choice3: "#include <userdefined.h>",
    choice4: "#include <userdefined.h>",
    answer: 2,
  },
  {
    question:
      "Which of the following user-defined header file extension used in c++?",
    code: "",
    choice1: "hg",
    choice2: "c",
    choice3: "hf",
    choice4: "cpp",
    answer: 4,
  },
  {
    question:
      "Which of the following user-defined header file extension used in c++ ?",
    code: "",
    choice1: "Friend constructor",
    choice2: "Default constructor",
    choice3: "Parameterized constructor",
    choice4: "Copy constructor",
    answer: 1,
  },
  {
    question: "Which of the following correctly declares an array in C++ ?",
    code: "",
    choice1: "array{10};",
    choice2: "array array[10];",
    choice3: "int array;",
    choice4: "int array[10];",
    answer: 4,
  },
  {
    question:
      "What happens if the following C++ statement is compiled and executed?",
    code: "int *ptr = NULL;\n delete ptr; ",
    choice1: "The program is not semantically correct",
    choice2: "The program is compiled and executed successfully",
    choice3: "The program gives a compile-time error",
    choice4:
      "The program compiled successfully but throws an error during run-time",
    answer: 2,
  },
  {
    question: "What will be the output of the following C++ code?",
    code: "#include <iostream>\n#include <string>\nusing namespace std;\nint main(int argc, char const *argv[])\n{\nchar s1[6] = 'Hello';\nchar s2[6] = 'World';\nchar s3[12] = s1 + '  ' + s2;\ncout<<s3;\nreturn 0;\n}",
    choice1: "Hello",
    choice2: "World",
    choice3: "Error",
    choice4: "Hello World",
    answer: 3,
  },
  {
    question: "What happens if the following program is executed in C and C++?",
    code: "#include <stdio.h>\nint main(void) \n{ \n  int new = 5;\nprintf('%d', new);\n}",
    choice1: "Error in C and successful execution in C++",
    choice2: "Error in both C and C++",
    choice3: "Error in C++ and successful execution in C",
    choice4: "A successful run in both C and C++",
    answer: 3,
  },
  {
    question: "What will be the output of the following C++ code?",
    code: "    #include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\nint main() \n{\nstring s = 'spaces in text';\ns.erase(remove(s.begin(), s.end(), ' ' ), s.end() ) ;\ncout << s << endl;\n}",
    choice1: "spacesintext",
    choice2: "spaces in text",
    choice3: "spaces",
    choice4: "spaces in",
    answer: 1,
  },
  {
    question: "Which of the following C++ code will give error on compilation?",
    code: "================code 1=================\n#include <iostream>\nusing namespace std;\nint main(int argc, char const *argv[])\n{\n  cout<<'Hello World';\n  return 0;\n}\n========================================\n================code 2=================\n#include <iostream>\nint main(int argc, char const *argv[])\n{\n  std::cout<<'Hello World';\n  return 0;\n}\n========================================",
    choice1: "Code 1 only",
    choice2: "Neither code 1 nor code 2",
    choice3: "Both code 1 and code 2",
    choice4: "Code 2 only",
    answer: 2,
  },
];

let html = [
  {
    question: "HTML stands for __________",
    code: "",
    choice1: "HyperText Machine Language",
    choice2: "HyperText Marking Language",
    choice3: "HighText Marking Language",
    choice4: "HyperText Markup Language",
    answer: 4,
  },
  {
    question: "What is DOM in HTML?",
    code: "",
    choice1: "Language dependent application programming",
    choice2: "Hierarchy of objects in ASP.NET",
    choice3: "c) Application programming interface",
    choice4:
      "Convention for representing and interacting with objects in html documents",
    answer: 4,
  },
  {
    question: "Which of the following is not a HTML5 tag?",
    code: "",
    choice1: "<track>",
    choice2: "<video>",
    choice3: "<slider>",
    choice4: "<source>",
    answer: 3,
  },
  {
    question:
      "Which of the following HTML tag is used to add a row in a table?",
    code: "",
    choice1: "<td>",
    choice2: "<tr>",
    choice3: "<th>",
    choice4: "<tt>",
    answer: 2,
  },
  {
    question:
      "Which of the following tag is used to create a text area in HTML Form?",
    code: "",
    choice1: "<textarea> </textarea>",
    choice2: "<text></text>",
    choice3: "<input type=”text” />",
    choice4: "<input type=”textarea” />",
    answer: 4,
  },
  {
    question: "How to insert Hyperlink in HTML Page?",
    code: "",
    choice1:
      "<a href='https://www.sanfoundry.com/1000-html-questions-answers/'>HTML MCQ</a>",
    choice2:
      "<a target='https://www.sanfoundry.com/1000-html-questions-answers/' HTML Quiz />",
    choice3:
      "<a target='https://www.sanfoundry.com/1000-html-questions-answers/' HTML Quiz />",
    choice4: "<a>https://www.sanfoundry.com/1000-html-questions-answers/</a>",
    answer: 1,
  },
  {
    question: "How to display preformatted text in HTML?",
    code: "",
    choice1: "<p>",
    choice2: "<pre>",
    choice3: "<hr>",
    choice4: "All of the above",
    answer: 2,
  },
  {
    question: "Which HTML tag is used to insert an image?",
    code: "",
    choice1: "<img url=”htmllogo.jpg” />",
    choice2: "<img alt=”htmllogo.jpg” />",
    choice3: "<img src=”htmllogo.jpg” />",
    choice4: "<img link=”htmllogo.jpg” />",
    answer: 3,
  },
  {
    question:
      " In HTML, which attribute is used to create a link that opens in a new window tab?",
    code: "",
    choice1: "src=”_blank”",
    choice2: "src=”_self”",
    choice3: "target=”_self”",
    choice4: "target=”_blank”",
    answer: 4,
  },
  {
    question: "Which tag is used to create a dropdown in HTML Form?",
    code: "",
    choice1: "<input>",
    choice2: "<select>",
    choice3: "<text>",
    choice4: "<textarea>",
    answer: 2,
  },
];

let css = [
  {
    question:
      "The property in CSS used to change the background color of an element is -",
    code: "",
    choice1: "bgcolor",
    choice2: "color",
    choice3: "backgrund-color",
    choice4: "All of the above",
    answer: 3,
  },
  {
    question:
      "Which of the following is the correct syntax to make the background-color of all paragraph elements to yellow?",
    code: "",
    choice1: "p {background-color : yellow;}",
    choice2: "p {background-color : #yellow;}",
    choice3: "all {background-color : yellow;}",
    choice4: "all p {background-color : #yellow;}",
    answer: 1,
  },
  {
    question:
      "Which of the following is the correct syntax to display the hyperlinks without any underline?",
    code: "",
    choice1: "a {text-decoration : underline;}",
    choice2: "a {decoration : no-underline;}",
    choice3: "a {text-decoration : none;}",
    choice4: "None of the above",
    answer: 3,
  },
  {
    question:
      "The CSS property used to specify the transparency of an element is -",
    code: "",
    choice1: "opacity",
    choice2: "filter",
    choice3: "visibility",
    choice4: "overlay",
    answer: 1,
  },
  {
    question:
      "Which of the following is the correct syntax to select the p siblings of a div element?",
    code: "",
    choice1: "p",
    choice2: "div + p",
    choice3: "div p",
    choice4: "div ~ p",
    answer: 4,
  },
  {
    question: "Which type of CSS is used in the below code?",
    code: "<p style = 'border:2px solid red;'>",
    choice1: "Inline CSS",
    choice2: "Internal CSS",
    choice3: "External CSS",
    choice4: "None of the above",
    answer: 1,
  },
  {
    question:
      "The CSS property which is used to set the text wider or narrower compare to the default width of the font is -",
    code: "",
    choice1: "font-stretch property",
    choice2: "font-weight property",
    choice3: "text-transform property",
    choice4: "font-variant property",
    answer: 1,
  },
  {
    question: "What will be the output of the following CSS code snippet?",
    code: "span {\n  border: 1px solid red;\n        outline: green dotted thick;\n}",
    choice1:
      "All span elements will have a green thick border and a red outline",
    choice2:
      "All span elements will have a red border and a green dotted outline",
    choice3:
      "All span elements will have a outer green dotted border and an inner red border",
    choice4:
      "All span elements will have an outer red border and inner green dotted border",
    answer: 3,
  },
  {
    question: "What will be the output of the following CSS code?",
    code: "div {\n    border-width:5px;\n    border-style:dotted solid double dashed;\n}",
    choice1:
      "Box having dotted bottom outline, solid right outline, double top outline and dashed left outline",
    choice2:
      "Box having dotted bottom outline, solid left outline, double top outline and dashed left outline",
    choice3:
      "Box having dotted top outline, solid right outline, double bottom outline and dashed left outline",
    choice4:
      "Box having dotted top outline, solid left outline, double bottom outline and dashed right outline",
    answer: 3,
  },
  {
    question:
      "Box having dotted top outline, solid left outline, double bottom outline and dashed right outline",
    code: "",
    choice1: "line-break",
    choice2: "line-wrap",
    choice3: "word-wrap",
    choice4: "word-break",
    answer: 4,
  },
];

let js = [
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    code: "",
    choice1: "var",
    choice2: "let",
    choice3: "Both A and B",
    choice4: "None of the above",
    answer: 3,
  },
  {
    question:
      "Upon encountering empty statements, what does the Javascript Interpreter do?",
    code: "",
    choice1: "Ignores the statement",
    choice2: "Throw an eroor",
    choice3: "Gives the warning",
    choice4: "None of the above",
    answer: 2,
  },
  {
    question: "What will be the output of the following code snippet?",
    code: "<script type='text/javascript'>\na = 5 + '9';\ndocument.write(a);\n</script>",
    choice1: "Compilation error",
    choice2: "14",
    choice3: "Runtime error",
    choice4: "59",
    answer: 4,
  },
  {
    question: "What will be the output of the following code snippet?",
    code: "<script type='text/javascript' language='javascript'>\nvar a = 'Scaler';\nvar result = a.substring(2, 4);\ndocument.write(result);\n</script>",
    choice1: "al",
    choice2: "ale",
    choice3: "cal",
    choice4: "caler",
    answer: 1,
  },
  {
    question: "What will be the output of the following code snippet?",
    code: "script type='text/javascript' language='javascript'>\nvar x=12;\nvar y=8;\nvar res=eval('x+y');\ndocument.write(res);\n</script>",
    choice1: "20",
    choice2: "x+y",
    choice3: "128",
    choice4: "None of the above",
    answer: 1,
  },
  {
    question:
      "What keyword is used to check whether a given property is valid or not?",
    code: "",
    choice1: "in",
    choice2: "is in",
    choice3: "exists",
    choice4: "lies",
    answer: 1,
  },
  {
    question: "What will be the output of the following code snippet?",
    code: "(function(){\nsetTimeout(()=> console.log(1),2000);\nconsole.log(2);\nsetTimeout(()=> console.log(3),0);\nconsole.log(4);\n})();",
    choice1: "1 2 3 4",
    choice2: "2 3 4 1",
    choice3: "2 4 3 1",
    choice4: "4 3 2 1",
    answer: 3,
  },
  {
    question: "What will be the output of the following code snippet?",
    code: "(function(a){\nreturn (function(){\nconsole.log(a);\na = 6;\n})()\n})(21);",
    choice1: "6",
    choice2: "NaN",
    choice3: "21",
    choice4: "None of the Above",
    answer: 3,
  },
  {
    question: "What will be the output of the following code snippet?",
    code: "var a = 1;\nvar b = 0;\nwhile (a <= 3)\n{\na++;\nb += a * 2;\nprint(b);\n}",
    choice1: "4 10 18",
    choice2: "1 2 3",
    choice3: "1 4 7",
    choice4: "None of the above",
    answer: 1,
  },
  {
    question: "What will be the output of the following code snippet?",
    code: "print(NaN === NaN);",
    choice1: "true",
    choice2: "false",
    choice3: "undefined",
    choice4: "error",
    answer: 2,
  },
];

let jquery = [
  {
    question: "jQuery is a ______.",
    code: "",
    choice1: "Javacript Library",
    choice2: "JSON Library",
    choice3: "Java Library",
    choice4: "JSON and CSS Library",
    answer: 1,
  },
  {
    question: "Which sign is used to define/access jQuery?",
    code: "",
    choice1: ".",
    choice2: "&",
    choice3: "$",
    choice4: "#",
    answer: 3,
  },
  {
    question:
      "Which is the correct jQuery statement to hide all <div> elements?",
    code: "",
    choice1: "$(.div).hide()",
    choice2: "$('div').hide()",
    choice3: "$('.div').hide()",
    choice4: "$('#div').hide()",
    answer: 2,
  },
  {
    question:
      " Which is the correct jQuery selector to select all <div> elements with class name 'new'?",
    code: "",
    choice1: "$('.new')",
    choice2: "$('div.new')",
    choice3: "$('.div.new')",
    choice4: "$('.div#new')",
    answer: 2,
  },
  {
    question:
      "Which is the correct jQuery selector to select the first HTML element?",
    code: "",
    choice1: "$('element_name.first')",
    choice2: "$('element_name#first')",
    choice3: "$('element_name::first')",
    choice4: "$('element_name:first')",
    answer: 4,
  },
  {
    question:
      "Which is the correct jQuery selector to select all elements having 'href' attribute?",
    code: "",
    choice1: "$('a.[href]')",
    choice2: "$('a:[href]')",
    choice3: "$('[href].*')",
    choice4: "$('[href]')",
    answer: 4,
  },
  {
    question:
      "Which method is used to attach an event handler function to an HTML element when the form field loses focus?",
    code: "",
    choice1: "blur()",
    choice2: "leave()",
    choice3: "focusleave()",
    choice4: "leacefocus()",
    answer: 1,
  },
  {
    question:
      "Which method is used to attach one or more event handlers for the selected elements?",
    code: "",
    choice1: "at()",
    choice2: "alelements()",
    choice3: "on()",
    choice4: "focuson()",
    answer: 3,
  },
  {
    question:
      "Which jQuery method toggles between the fadeIn() and fadeOut() methods?",
    code: "",
    choice1: "toggle()",
    choice2: "Toggle()",
    choice3: "fadetoggle()",
    choice4: "fadeToggle()",
    answer: 4,
  },
  {
    question:
      " Which jQuery DOM method is used to insert content at the end of the selected elements?",
    code: "",
    choice1: "insert()",
    choice2: "add()",
    choice3: "append()",
    choice4: "appendValue()",
    answer: 4,
  },
];

let java = [
  {
    question: "What is the size of float and double in java?",
    code: "",
    choice1: "32 and 64",
    choice2: "32 and 32",
    choice3: "64 and 64",
    choice4: "64 and 32",
    answer: 1,
  },
  {
    question: "Find the output of the following program.",
    code: "public class Solution{\npublic static void main(String[] args){\nshort x = 10;\nx =  x * 5;\nSystem.out.print(x);\n}\n}",
    choice1: "50",
    choice2: "10",
    choice3: "Compile error",
    choice4: "Exception",
    answer: 3,
  },
  {
    question: "Select the valid statement to declare and initialize an array.",
    code: "",
    choice1: "int[] A={}",
    choice2: "int[] A={1,2,3}",
    choice3: "int[] A=(1,2,3)",
    choice4: "int[][] A={1,2,3}",
    answer: 2,
  },
  {
    question: "Find the output of the following program.",
    code: "int[] A = {0,2,4,1,3};\nfor(int i = 0; i < a.length; i++){\na[i] = a[(a[i] + 3) % a.length];\n}",
    choice1: "0",
    choice2: "1",
    choice3: "2",
    choice4: "3",
    answer: 2,
  },
  {
    question: "Identify the output of the following program.",
    code: "String str = “abcde”;\nSystem.out.println(str.substring(1, 3));",
    choice1: "abc",
    choice2: "bc",
    choice3: "bcd",
    choice4: "cd",
    answer: 2,
  },
  {
    question: "Identify the output of the following program.",
    code: "Public class Test{\nPublic static void main(String argos[]){\nString str1 = “one”;\nString str2 = “two”;\nSystem.out.println(str1.concat(str2));\n}\n}",
    choice1: "one",
    choice2: "two",
    choice3: "onetwo",
    choice4: "twoone",
    answer: 3,
  },
  {
    question: "Find the output of the following code.",
    code: "int ++a = 100;\nSystem.out.println(++a);",
    choice1: "101",
    choice2: "100",
    choice3: "None",
    choice4: "Compile error as ++a is not valid identifier",
    answer: 4,
  },
  {
    question: "Output of Math.floor(3.6)?",
    code: "",
    choice1: "3",
    choice2: "3.0",
    choice3: "4",
    choice4: "4.0",
    answer: 2,
  },
  {
    question: "Find the output of the following code.",
    code: "Public class Solution{\nPublic static void main(String args[]){\nInt i;\nfor(i = 1; i < 6; i++){\nif(i > 3) continue;\n}\nSystem.out.println(i);\n}\n}",
    choice1: "3",
    choice2: "4",
    choice3: "5",
    choice4: "6",
    answer: 1,
  },
  {
    question: "What is Runnable?",
    code: "",
    choice1: "Abstract Class",
    choice2: "Interface",
    choice3: "Class",
    choice4: "Method",
    answer: 2,
  },
];

let python = [
  {
    question: "What is the maximum length of a Python identifier?",
    code: "",
    choice1: "32",
    choice2: "16",
    choice3: "128",
    choice4: "No fixed length is specified",
    answer: 4,
  },
  {
    question: "What will be the output of the following code snippet?",
    code: "print(2**3 + (5 + 6)**(1 + 1))",
    choice1: "129",
    choice2: "8",
    choice3: "128",
    choice4: "None of the above",
    answer: 1,
  },
  {
    question: "What will be the output of the following code snippet?",
    code: "a = [1, 2, 3, 4, 5]\n    sum = 0\n    for ele in a:\n       sum += ele\n    print(sum)",
    choice1: "15",
    choice2: "0",
    choice3: "20",
    choice4: "None of these",
    answer: 1,
  },
  {
    question: "What will be the output of the following code snippet?",
    code: "count = 0\nwhile(True):\nif count % 3 == 0:\nprint(count, end = ' ')\nif(count > 15):\nbreak;\ncount += 1",
    choice1: "0 1 2...15",
    choice2: "Infinity loop",
    choice3: "0 3 6 9 12 15 ",
    choice4: "0 3 6 9 12",
    answer: 3,
  },
  {
    question: "Which of the following concepts is not a part of Python?",
    code: "",
    choice1: "Pointers",
    choice2: "Loops",
    choice3: "Dynamic Typing",
    choice4: "All of the above",
    answer: 1,
  },
  {
    question: "What will be the output of the following code snippet?",
    code: "def solve(a, b):\nreturn b if a == 0 else solve(b % a, a)\nprint(solve(20, 50))",
    choice1: "10",
    choice2: "20",
    choice3: "50",
    choice4: "1",
    answer: 1,
  },
  {
    question: "What will be the output of the following code snippet?",
    code: "def func():\nglobal value\nvalue = 'Local'\nvalue = 'Global'\nfunc()\nprint(value)",
    choice1: "local",
    choice2: "global",
    choice3: "none",
    choice4: "Canoot be predicted",
    answer: 1,
  },
  {
    question:
      "Which of the following types of loops are not supported in Python?",
    code: "",
    choice1: "for",
    choice2: "while",
    choice3: "do while",
    choice4: "None of the above",
    answer: 3,
  },
  {
    question: "What will be the output of the following code snippet?",
    code: "def thrive(n):\nif n % 15 == 0:\nprint('thrive', end = “ ”)\nelif n % 3 != 0 and n % 5 != 0:\nprint('neither', end = “ ”)\nelif n % 3 == 0:\nprint('three', end = “ ”)\nelif n % 5 == 0:\nprint('five', end = “ ”)\nthrive(35)\nthrive(56)\nthrive(15)\nthrive(39)",
    choice1: "five neither thrive three",
    choice2: "five neither three thrive",
    choice3: "three three three three",
    choice4: "five neither five neither",
    answer: 1,
  },
  {
    question: "What will be the output of the following code snippet?",
    code: "example = ['Sunday', 'Monday', 'Tuesday', 'Wednesday'];\nprint(example[-3:-1])",
    choice1: "['Sunday', 'Tuesday']",
    choice2: "['Tuesday','Wednesday']",
    choice3: "['Wednesday','Monday']",
    choice4: "['Monday', 'Tuesday']",
    answer: 4,
  },
];

let sql = [];

let c = [];

const scorePoints = 10;
const maxQuestions = 10;

startGame = (lang) => {
  score = 0;
  questionCounter = 1;
  avaliableQuestion = [...lang];
  console.log(avaliableQuestion);
  boardContainer.classList.add("displaynone");
  container.classList.remove("container");
  container.classList.add("displayblock");
  getNewQuestion();
};

getNewQuestion = () => {
  if (avaliableQuestion === 0 || questionCounter > maxQuestions) {
    localStorage.setItem("mostRecentScore", score);
    return window.location.assign("end.html");
  }

  progressText.innerText = `Question ${questionCounter} of ${maxQuestions}`;
  progressBarfull.style.width = `${(questionCounter / maxQuestions) * 100}%`;
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * avaliableQuestion.length);
  currentQuestions = avaliableQuestion[questionIndex];
  question.innerText = currentQuestions.question;
  code.innerText = currentQuestions.code;
  if (code.innerText != "") code.classList.add("padding");
  else code.classList.remove("padding");
  body.classList.add("HoverBtn");

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestions["choice" + number];
  });

  avaliableQuestion.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    const classToApply =
      selectedAnswer == currentQuestions.answer ? "correct" : "incorrect";

    if (classToApply === "correct") incrementScore(scorePoints);

    body.classList.remove("HoverBtn");
    selectedChoice.parentElement.classList.add(classToApply);
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

// startGame();
