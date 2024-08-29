//1. Harmonics
Harmonics = document.getElementById('Harmonics');

let exp1 = "Math.sin(x)";
let exp2 = "0.5*Math.sin(2*x)";
let exp3 = "0.25*Math.sin(4*x)";
let exp4 = "0.125*Math.sin(8*x)";
let exp5 = "0.0625*Math.sin(16*x)";

// Generate values
var x1Values = [];
var y1Values = [];
var y2Values = [];
var y3Values = [];
var y4Values = [];
var y5Values = [];

for (let x = 0; x <= 10; x += 0.01) {
  x1Values.push(x);
  y1Values.push(eval(exp1));
  y2Values.push(eval(exp2));
  y3Values.push(eval(exp3));
  y4Values.push(eval(exp4));
  y5Values.push(eval(exp5));
}

// Define Data
var data2 = [
  {x: x1Values, y: y1Values, mode:"lines"},
  {x: x1Values, y: y2Values, mode:"lines"},
  {x: x1Values, y: y3Values, mode:"lines"},
  {x: x1Values, y: y4Values, mode:"lines"},
  {x: x1Values, y: y5Values, mode:"lines"}
];

//Define Layout
var layout2 = {title: "Harmonics"};

// Display using Plotly
Plotly.newPlot("Harmonics", data2, layout2);







//Gini Index
GiniIndex = document.getElementById('GiniIndex')
var yValues = [63, 59.1, 54.8, 54.6, 53.3,52,51.5,51.3,50.5];
var xValues = ["South Africa", "Namibia","Colombia","Eswatini","Botswana","Brazil","Zambia","Angola","Mozambique"];
var barColors = ["maroon", "red","darkorange","darkorange","orange","gold", "yellow","yellow","yellow","brown"];

new Chart("GiniIndex", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Countries with highest Gini index 2023"
    },
    GiniIndex : document.getElementById('GiniIndex')

  }
});
