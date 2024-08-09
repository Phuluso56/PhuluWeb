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
Plotly.newPlot("Harmonics", data2, layout);




//2. Fencher graph
Fencher = document.getElementById('Fencher');
let exp = "10*Math.log(x)";

// Generate values
var xValues = [];
var yValues = [];
for (let x = 0; x <= 10; x += 0.1) {
  xValues.push(x);
  yValues.push(eval(exp));
}

// Display using Plotly
var data = [{x:xValues, y:yValues, mode:"lines"}];
var layout = {title: "Fenchher function ",
  xaxis: {title: "Stimulus strength"},
  yaxis: {range: [0, 30],title: "Percieved strength"},};
Plotly.newPlot("Fencher", data, layout);
