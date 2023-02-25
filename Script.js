var myApp = angular.module("myModule", []);

// myApp.config(function(){})
// run before app run like routes

// myApp.run(function(){})
// run right after app is loaded

myApp.controller("myController", function ($scope) {
  const employee = {
    firstName: "Emil",
    lastName: "Lau",
    gender: "male",
    flag: "./img/taiwan.jpeg",
  };

  let emoloyeeSalary = [
    {
      firstName: "Emil",
      lastName: "Lau",
      salary: "$50000",
      techStack: ["React", "Typescript", "TailwindCSS"],
      likes: 0,
      dislikes: 1,
    },
    {
      firstName: "Macy",
      lastName: "Mo",
      salary: "$60000",
      techStack: ["Javascript", "Github"],
      likes: 3,
      dislikes: 0,
    },
    {
      firstName: "Andy",
      lastName: "Lau",
      salary: "$70000",
      techStack: ["Javascript", "Styled-component"],
      likes: 0,
      dislikes: 0,
    },
  ];
  const sizes = ["S", "M", "L"];
  const check = ["M"];

  $scope.sizes = sizes;
  $scope.check = check;
  $scope.message = employee;
  $scope.hover = false;
  $scope.employeeSalary = emoloyeeSalary;
  $scope.addLikes = function (emoloyeeSalary) {
    emoloyeeSalary.likes++;
  };
  $scope.minusLikes = function (emoloyeeSalary) {
    emoloyeeSalary.likes--;
  };
  $scope.show = function () {
    $scope.hover = true;
  };
  $scope.disappear = function () {
    $scope.hover = false;
  };
});
