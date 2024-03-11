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
    var formatResults = a.toFixed(2);
    solution.innerHTML += "a = " + formatResults + "<br>";
    document.getElementById("a").value = formatResults;
  } else if (b == "") {
    console.log("Solving for b");
    solution.innerHTML = "Solving for : b <br>";
    solution.innerHTML += "b = √(c<sup>2</sup> - a<sup>2</sup>) <br>";
    solution.innerHTML +=
      "b = √(" + c + "<sup>2</sup> - " + a + "<sup>2</sup>) <br>";
    solution.innerHTML += "b = √(" + c * c + " - " + a * a + ") <br>";
    b = Math.sqrt(c * c - a * a);
    var formatResults = b.toFixed(2);
    solution.innerHTML += "b = " + formatResults + "<br>";
    document.getElementById("b").value = formatResults;
  } else if (c == "") {
    console.log("Solving for c");
    solution.innerHTML = "Solving for : c <br>";
    solution.innerHTML += "c = √(a<sup>2</sup> + b<sup>2</sup>) <br>";
    solution.innerHTML +=
      "c = √(" + a + "<sup>2</sup> + " + b + "<sup>2</sup>) <br>";
    solution.innerHTML += "c = √(" + a * a + " + " + b * b + ") <br>";
    c = Math.sqrt(a * a + b * b);
    var formatResults = c.toFixed(2);
    solution.innerHTML += "c = " + formatResults + "<br>";
    document.getElementById("c").value = formatResults;
  } else {
    alert("Please leave one side empty to solve the problem");
  }
}
// Reset Button

function resetValues() {
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  document.getElementById("c").value = "";
  document.getElementById("solution").innerHTML = "";
}



