function calculate() {
  let a = document.getElementById("a").value;
  let b = document.getElementById("b").value;
  let c = document.getElementById("c").value;
  const solution = document.getElementById("solution");

  if (a == "") {
    console.log("Solving for a");
    solution.innerHTML = "Solving for : a <br>";
    solution.innerHTML += "a = √(c<sup>2</sup> - b<sup>2</sup>) <br>";
    solution.innerHTML +=
      "a = √(" + c + "<sup>2</sup> - " + b + "<sup>2</sup>) <br>";
    solution.innerHTML += "a = √(" + c * c + " - " + b * b + ") <br>";
    a = Math.sqrt(c * c - b * b);
    solution.innerHTML += "a = " + a + "<br>";
    document.getElementById("a").value = a;
  } else if (b == "") {
    console.log("Solving for b");
    solution.innerHTML = "Solving for : b <br>";
    solution.innerHTML += "b = √(c<sup>2</sup> - a<sup>2</sup>) <br>";
    solution.innerHTML +=
      "b = √(" + c + "<sup>2</sup> - " + a + "<sup>2</sup>) <br>";
    solution.innerHTML += "b = √(" + c * c + " - " + a * a + ") <br>";
    b = Math.sqrt(c * c - a * a);
    solution.innerHTML += "b = " + b + "<br>";
    document.getElementById("b").value = b;
  } else if (c == "") {
    console.log("Solving for c");
    solution.innerHTML = "Solving for : c <br>";
    solution.innerHTML += "c = √(a<sup>2</sup> + b<sup>2</sup>) <br>";
    solution.innerHTML +=
      "c = √(" + a + "<sup>2</sup> + " + b + "<sup>2</sup>) <br>";
    solution.innerHTML += "c = √(" + a * a + " + " + b * b + ") <br>";
    c = Math.sqrt(a * a + b * b);
    solution.innerHTML += "c = " + c + "<br>";
    document.getElementById("c").value = c;
  } else {
    alert("Please leave one side empty to solve the problem");
  }
}
