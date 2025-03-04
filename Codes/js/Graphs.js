




//ONE PIECE STATS

//1.Sales Japan


var xValues = [1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024];

var yValues = [300000,268484,371950,,,2600000,2630000,,2250000,,,5956540,14721241,32343809,37996373,23464866,18151599,11885957,14102521,12314326,11495532,8113317,10134232,7709667,7002583,10364102,7197532,5250210];

new Chart(document.getElementById('VolumeSold').getContext("2d"), {
type: "line",
data: {
  labels: xValues,
  datasets: [{
  fill: false,
  lineTension: 0,
  backgroundColor: "rgba(0,0,255,1.0)",
  borderColor: "rgba(0,0,255,1.0)",
  data: yValues
  }]
},
options: {
  legend: {display: false},
  title: {
  display: true,
  text: "One Piece Volumes Sold per year in Japan"}
  
}
});


//2. Total Sales

var xValues = [1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023, 2024];
var yValues = [300000,6000000,17000000,37000000,54000000,73000000,90000000,99000000,112000000,125000000,139000000,153000000,177000000,216000000,257000000,281000000,302000000,320000000,360000000,400000000,430000000,440000000,460000000,470000000,490000000,514000000,523203195,535000000];

new Chart(document.getElementById('TotalSales').getContext("2d"), {
  type: "line",
  data: {
  labels: xValues,
  datasets: [{
    fill: false,
    lineTension: 0,
    backgroundColor: "blue",
    borderColor: "blue",
    fill:true,
    data: yValues
  }]
  },
  options: {
   title: {display: true,
    text: "One Piece Total Volume Sales Worldwide"},
    legend: {display: false},
    scales: {
    yAxes: [{ticks: {min: 0}}],
  }
  }
});

//3. When was One Piece No 1?


var xValues = ["Yes", "No"];
var yValues = [18, 8];
var barColors = [
  "navy",
  "tomato",];

new Chart(document.getElementById('Top1?').getContext("2d"), {
  type: "pie",
  data: {
  labels: xValues,
  datasets: [{
    backgroundColor: barColors,
    data: yValues
  }]
  },
  options: {
  title: {
    display: true,
    text: "Years One Piece was number 1 selling"
  }
  }
});


//4. Chapters a year


var data = {
  datasets: [{
    data: [
      { x: "1997", y: 21, r: 8.75 },
      { x: "1998", y: 48, r: 20 },
      { x: "1999", y: 48, r: 20 },
      { x: "2000", y: 48, r: 20 },
      { x: "2001", y: 48, r: 20 },
      { x: "2002", y: 46 , r: 19 },
      { x: "2003", y: 45, r: 18.75 },
      { x: "2004", y: 45, r: 18.75 },
      { x: "2005", y: 45, r: 18.75 },
      { x: "2006", y: 45, r: 18.75 },
      { x: "2007", y: 44, r: 18.3 },
      { x: "2008", y: 43, r: 17.9 },
      { x: "2009", y: 42, r: 17.5 },
      { x: "2010", y: 40, r: 16.7 },
      { x: "2011", y: 42, r: 17.5 },
      { x: "2012", y: 43, r: 17.9 },
      { x: "2013", y: 39, r: 16 },
      { x: "2014", y: 39, r: 16 },
      { x: "2015", y: 39, r: 16 },
      { x: "2016", y: 40, r: 16 },
      { x: "2017", y: 39, r: 16 },
      { x: "2018", y: 39, r: 16 },
      { x: "2019", y: 38, r: 15.9 },
      { x: "2020", y: 33, r: 13.1 },
      { x: "2021", y: 36, r: 13.9 },
      { x: "2022", y: 35, r: 13.5 },
      { x: "2023", y: 32, r: 13 },
      { x: "2024", y: 33, r: 13 },
    ],
    backgroundColor: 'cyan',
    borderColor: 'deepskyblue',
    borderWidth: 2,
    label: `Chapters a year`,
    hoverBackgroundColor: 'dodgerblue',
    hoverBorderColor: 'dodgerblue',
    hoverBorderWidth: 3,
  }],
};
var config = {
  type: 'bubble',
  data: data,
  options: {
    scales: {
      x: { title: { display: true, 
            text: 'Year' },
        ticks: {bounds: 0}},
            
      y: { title: { display: true, 
            text: 'Number of chapter releases' } },
    },
    plugins: {
      legend: { display: true, position: 'top' },
      tooltip: { intersect: true },
    },
  },
};
var myBubbleChart = 
  new Chart(document.getElementById('ChaptersAyear'), config);



//5. OP Page views

var xValues = ['2015-07', '2015-08', '2015-09', '2015-10', '2015-11', '2015-12', '2016-01', '2016-02', '2016-03', '2016-04', '2016-05', '2016-06', '2016-07', '2016-08', '2016-09', '2016-10', '2016-11', '2016-12', '2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12', '2018-01', '2018-02', '2018-03', '2018-04', '2018-05', '2018-06', '2018-07', '2018-08', '2018-09', '2018-10', '2018-11', '2018-12', '2019-01', '2019-02', '2019-03', '2019-04', '2019-05', '2019-06', '2019-07', '2019-08', '2019-09', '2019-10', '2019-11', '2019-12', '2020-01', '2020-02', '2020-03', '2020-04', '2020-05', '2020-06', '2020-07', '2020-08', '2020-09', '2020-10', '2020-11', '2020-12', '2021-01', '2021-02', '2021-03', '2021-04', '2021-05', '2021-06', '2021-07', '2021-08', '2021-09', '2021-10', '2021-11', '2021-12', '2022-01', '2022-02', '2022-03', '2022-04', '2022-05', '2022-06', '2022-07', '2022-08', '2022-09', '2022-10', '2022-11', '2022-12', '2023-01', '2023-02', '2023-03', '2023-04', '2023-05', '2023-06', '2023-07', '2023-08', '2023-09', '2023-10', '2023-11', '2023-12', '2024-01', '2024-02', '2024-03', '2024-04', '2024-05', '2024-06', '2024-07', '2024-08', '2024-09'];
var yValues =  [200821, 177728, 172437, 152305, 163644, 173570, 146982, 171083, 157339, 162206, 151230, 159334, 142688, 137642, 133642, 136988, 143934, 163496, 136891, 147180, 133399, 133602, 122522, 138541, 137239, 126540, 135589, 116142, 121901, 134067, 125706, 143375, 138857, 143278, 145575, 151660, 143084, 134284, 133821, 122570, 127579, 144781, 130437, 142889, 132405, 120432, 116370, 136537, 127100, 134419, 134243, 115083, 112897, 129842, 107359, 136366, 171494, 168102, 191252, 191587, 172950, 157472, 167422, 169492, 201604, 233679, 197840, 222465, 226681, 233924, 183257, 213871, 211884, 199628, 195233, 206924, 171976, 185735, 157972, 246672, 236412, 207845, 228580, 235125, 274533, 253916, 275310, 261881, 186932, 228799, 193692, 233776, 241217, 288800, 348079, 398403, 535232, 1722749, 565427, 376900, 360661, 349161, 277382, 301256, 258941, 211548, 175092, 186646, 200183, 190422];

new Chart(document.getElementById('OPpageviews').getContext("2d"), {
  type: "bar",
  data: {
  labels: xValues,
  datasets: [{
    fill: false,
    lineTension: 0,
    backgroundColor: "blue",
    borderColor: "blue",
    data: yValues
  }]
  },
  options: {
  legend: {display: false},
  title: {
    font:{weight: 'bold'},
    color: "red",
    display: true,
    text: "One Piece wiki page views per month",
  }
  }
});





//6. Arc Chapter length

var xValues =["Romance Dawn Arc","Orange Town Arc","Syrup Village Arc","Baratie Arc","Arlong Park Arc","Loguetown Arc","Reverse Mountain Arc","Whisky Peak Arc","Little Garden Arc","Drum Island Arc","Arabasta Arc","Jaya Arc","Skypiea Arc","Long Ring Long Land Arc","Water 7 Arc","Enies Lobby Arc","Post-Enies Lobby Arc","Thriller Bark Arc","Sabaody Archipelago Arc","Amazon Lily Arc","Impel Down Arc","Marineford Arc","Post-War Arc","Return to Sabaody Arc","Fish-Man Island Arc","Punk Hazard Arc","Dressrosa Arc","Zou Arc","Whole Cake Island Arc","Levely Arc","Wano Country Arc","Egghead Arc","Elbaf",""];

var yValues =chapters=[7,14,20,27,27,5,5,9,15,25,63,19,66,19,53,56,11,48,24,11,25,31,17,5,51,46,102,23,78,6,149,68,16];
var barColors = ["darkcyan", "darkcyan","darkcyan","darkcyan","darkcyan","darkcyan", "goldenrod","goldenrod","goldenrod","goldenrod","goldenrod", "lime","lime","navy","navy","navy", "navy","darkviolet","silver","silver","silver", "silver","silver","dodgerblue","dodgerblue","deeppink", "deeppink","pink","pink","pink","crimson","darkorange","dimgray"];

new Chart(document.getElementById('ArchapterLength').getContext("2d"), {
  type: "horizontalBar",
  data: {
  labels: xValues,
  datasets: [{
  backgroundColor: barColors,
  data: yValues
  }]
},
  options: {
  legend: {display: false, padding:1},
  title: {
    display: true,
    text: "Number of Manga chapters per Arc"
  },
  scales: {
    xAxes: [{ticks: {mirror: true}}]
  }
  }
});


//7. Sagas


var xValues = ["East Blue Saga", "Arabasta Saga", "Sky Island Saga", "Water 7 Saga", "Thriller Bark Saga","Summit War Saga", "Fish-Man Island Saga", "Dressrosa Saga", "Whole Cake Island Saga", "Wano Country Saga","Final Saga"];
var yValues = [100, 117	, 85, 139, 48,108,56, 148, 107, 149, 70];
var barColors =["darkcyan", "goldenrod","lime","navy","darkviolet","silver","dodgerblue","deeppink","pink","crimson","darkorange","dimgray" ];

new Chart(document.getElementById('OPSagas').getContext("2d"), {
  type: "polarArea",
  data: {
  labels: xValues,
  datasets: [{
    backgroundColor: barColors,
    data: yValues
  }]
  },
  options: {
  scales: {r: {pointLabels: {display: true,centerPointLabels: true,font: {size: 18}}}},
  
  title: {
    display: true,
    text: "One Piece Manga Chapters per Saga"
  }
  }
});


//8. Arc Episode Length


var xValues =["Romance Dawn Arc","Orange Town Arc","Syrup Village Arc","Baratie Arc","Arlong Park Arc","Loguetown Arc","Reverse Mountain Arc","Whisky Peak Arc","Little Garden Arc","Drum Island Arc","Arabasta Arc","Jaya Arc","Skypiea Arc","Long Ring Long Land Arc","Water 7 Arc","Enies Lobby Arc","Post-Enies Lobby Arc","Thriller Bark Arc","Sabaody Archipelago Arc","Amazon Lily Arc","Impel Down Arc","Marineford Arc","Post-War Arc","Return to Sabaody Arc","Fish-Man Island Arc","Punk Hazard Arc","Dressrosa Arc","Zou Arc","Whole Cake Island Arc","Levely Arc","Wano Country Arc","Egghead Arc","Elbaf",""];

var yValues =chapters=[4,5,10,12,14,7,3,4,8,14,39,9,43,15,37,46,13,45,21,14,27,33,26,6,51,46,118,29,95,12,191,37,0];
var barColors = ["darkcyan", "darkcyan","darkcyan","darkcyan","darkcyan","darkcyan", "goldenrod","goldenrod","goldenrod","goldenrod","goldenrod", "lime","lime","navy","navy","navy", "navy","darkviolet","silver","silver","silver", "silver","silver","dodgerblue","dodgerblue","deeppink", "deeppink","pink","pink","pink","crimson","darkorange","dimgray"];

new Chart(document.getElementById('ArcEpisodeLength').getContext("2d"), {
  type: "horizontalBar",
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
    text: "Number of Anime Episodes per arc"
  },
  scales: {
    xAxes: [{ticks: {mirror: true}}]
  }
  }
});



//9. Continents population chart?


var xValues = ["Asia", "Africa","Europe","North America","South America","Oceania"];
var yValues = [4806898006, 1515140850,743230911,613149877,435611301,46502478];
var barColors = ["Maroon","IndianRed","LightCoral","Salmon","DarkSalmon","LightSalmon"];

new Chart(document.getElementById('Continents').getContext("2d"), {
  type: "pie",
  data: {
  labels: xValues,
  datasets: [{
    backgroundColor: barColors,
    data: yValues
  }]
  },
  options: {
    legend: {
      display: true,
      position: 'right',
      labels: {
        boxWidth: 20,
        fontColor: 'black'
      }
    },
  title: {
    display: true,
    text: "Population per continent"
  }
  }
});


// 10. Total population

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([["Year", "Population"],[      "1950", 2493092843],
 [      "1951", 2536927039],
 [      "1952", 2584086332],
 [      "1953", 2634106246],
 [      "1954", 2685894869],
 [      "1955", 2740213784],
 [      "1956", 2795409978],
 [      "1957", 2852618346],
 [      "1958", 2911249658],
 [      "1959", 2965950358],
 [      "1960", 3015470890],
 [      "1961", 3064869656],
 [      "1962", 3123374299],
 [      "1963", 3192807820],
 [      "1964", 3264487340],
 [      "1965", 3334533717],
 [      "1966", 3404041107],
 [      "1967", 3473412894],
 [      "1968", 3545187239],
 [      "1969", 3619491592],
 [      "1970", 3694683801],
 [      "1971", 3769847834],
 [      "1972", 3844917687],
 [      "1973", 3920805030],
 [      "1974", 3996416108],
 [      "1975", 4070735264],
 [      "1976", 4144246391],
 [      "1977", 4217863819],
 [      "1978", 4292097508],
 [      "1979", 4368539472],
 [      "1980", 4447606208],
 [      "1981", 4528777285],
 [      "1982", 4612673436],
 [      "1983", 4697327604],
 [      "1984", 4782175500],
 [      "1985", 4868943460],
 [      "1986", 4958072822],
 [      "1987", 5049746378],
 [      "1988", 5141992550],
 [      "1989", 5234431714],
 [      "1990", 5327803075],
 [      "1991", 5418735879],
 [      "1992", 5505989821],
 [      "1993", 5591544841],
 [      "1994", 5675551281],
 [      "1995", 5758878997],
 [      "1996", 5842055726],
 [      "1997", 5924787787],
 [      "1998", 6007066714],
 [      "1999", 6089006330],
 [      "2000", 6171703018],
 [      "2001", 6254936479],
 [      "2002", 6337730319],
 [      "2003", 6420361649],
 [      "2004", 6503377778],
 [      "2005", 6586970145],
 [      "2006", 6671452018],
 [      "2007", 6757308750],
 [      "2008", 6844457675],
 [      "2009", 6932766459],
 [      "2010", 7021732131],
 [      "2011", 7110923797],
 [      "2012", 7201202531],
 [      "2013", 7291793608],
 [      "2014", 7381616239],
 [      "2015", 7470491904],
 [      "2016", 7558554580],
 [      "2017", 7645618013],
 [      "2018", 7729902724],
 [      "2019", 7811293714],
 [      "2020", 7887001284],
 [      "2021", 7954448405],
 [      "2022", 8021407170],
 [      "2023", 8091734935]]);

  var options = {
    chart: {
      title: 'World total population over the years',
      subtitle: '1950-2023',
      barColors: "IndianRed",
    }
  };

  var chart = new google.charts.Bar(document.getElementById('Global_Population'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}


// 10. Birth and death rates

var Canvas = document.getElementById("Births&Deaths");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var dataFirst = {
    label: "Est No. of births per year",
    data:  [91823940.0, 92507130.0, 97371464.0, 97291460.0, 100187850.0, 101747970.0, 101759016.0, 106017736.0, 104644170.0, 101999840.0, 102378090.0, 100950940.0, 112038710.0, 119802890.0, 117292200.0, 117837010.0, 117232950.0, 116920264.0, 121825890.0, 122227970.0, 124135900.0, 123739680.0, 123554020.0, 123563930.0, 122709410.0, 121030100.0, 121322350.0, 120786520.0, 122140650.0, 125000296.0, 127446984.0, 129715830.0, 133206500.0, 131967704.0, 134365260.0, 136373950.0, 139301150.0, 141346560.0, 140985950.0, 142249020.0, 143461420.0, 138306860.0, 136591250.0, 135632140.0, 135142910.0, 134850050.0, 134321010.0, 133985670.0, 133857530.0, 134058670.0, 135758480.0, 135380000.0, 135396480.0, 135700800.0, 136596340.0, 137166460.0, 138469300.0, 139935790.0, 141758720.0, 142968320.0, 143354240.0, 143878780.0, 146054880.0, 145014780.0, 145268260.0, 144333940.0, 144854100.0, 143601800.0, 140332740.0, 138596800.0, 134719620.0, 133448840.0, 132475390.0, 132110264.0, 132405920.0, 132399170.0, 132503470.0, 132590970.0, 132761180.0, 132988660.0, 133256390.0, 133513410.0, 133764800.0, 134065220.0, 134381000.0, 134669230.0, 134945620.0, 135141000.0, 135355310.0, 135515310.0, 135669000.0, 135672670.0, 135635900.0, 135580930.0, 135406660.0, 135108940.0, 134763860.0, 134270900.0, 133752130.0, 133163340.0, 132555180.0, 131922870.0, 131280344.0, 130666630.0, 130019570.0, 129484550.0, 128994830.0, 128530510.0, 128109976.0, 127754770.0, 127431160.0, 127116970.0, 126876440.0, 126634990.0, 126429590.0, 126218350.0, 126019440.0, 125793030.0, 125546780.0, 125259600.0, 124986380.0, 124696340.0, 124348330.0, 123982000.0, 123572760.0, 123139816.0, 122692730.0, 122209340.0, 121660490.0, 121106664.0, 120554856.0, 119954950.0, 119411960.0, 118804120.0, 118220260.0, 117622290.0, 117028430.0, 116442230.0, 115886480.0, 115345020.0, 114804560.0, 114283304.0, 113772580.0, 113262380.0, 112772536.0, 112282190.0, 111830664.0, 111397100.0, 110941160.0, 110500820.0, 110028470.0],
    lineTension: 0,
    fill: false,
    borderColor: 'mediumspringgreen'
  };

var dataSecond = {
    label: "Est No. of deaths per year",
    data:[48486892.0, 48176160.0, 47383364.0, 47239576.0, 46662428.0, 46635656.0, 46479064.0, 46880772.0, 46518260.0, 50724510.0, 54612440.0, 49918924.0, 46061444.0, 46913210.0, 46822884.0, 48213550.0, 47841524.0, 47568790.0, 47629250.0, 47815950.0, 48163464.0, 49384108.0, 47770224.0, 47573276.0, 47478096.0, 47622990.0, 47707252.0, 47166790.0, 47293144.0, 46963884.0, 47349924.0, 47470790.0, 47659344.0, 48206576.0, 48430624.0, 48772812.0, 48643610.0, 48657012.0, 49183184.0, 49178260.0, 49794344.0, 50108430.0, 50281876.0, 50831804.0, 51930610.0, 51406892.0, 51410950.0, 51432010.0, 51853500.0, 52183584.0, 52240370.0, 52431244.0, 52757536.0, 53077070.0, 53187800.0, 53390436.0, 53281776.0, 53410050.0, 53987020.0, 54122620.0, 54268588.0, 54581440.0, 54794788.0, 55092620.0, 55545316.0, 56305970.0, 56756910.0, 57572252.0, 57792804.0, 58354932.0, 63546316.0, 69728104.0, 62278628.0, 61651610.0, 62389496.0, 63135984.0, 63637310.0, 64625684.0, 65677930.0, 66739330.0, 67826880.0, 68954184.0, 70103040.0, 71288504.0, 72486100.0, 73713700.0, 74948340.0, 76206090.0, 77449620.0, 78710136.0, 79950500.0, 81208610.0, 82442504.0, 83672376.0, 84890480.0, 86093330.0, 87281950.0, 88448280.0, 89606970.0, 90746280.0, 91876620.0, 92985500.0, 94083770.0, 95173330.0, 96249256.0, 97293120.0, 98309320.0, 99309970.0, 100282936.0, 101241940.0, 102156930.0, 103025270.0, 103869600.0, 104677860.0, 105484570.0, 106272790.0, 107031790.0, 107798930.0, 108554380.0, 109292500.0, 110034870.0, 110769660.0, 111528940.0, 112257930.0, 112984180.0, 113706800.0, 114416770.0, 115099180.0, 115749030.0, 116356650.0, 116924250.0, 117418490.0, 117862430.0, 118269520.0, 118618880.0, 118940910.0, 119206460.0, 119458180.0, 119684150.0, 119919840.0, 120136080.0, 120358536.0, 120604024.0, 120878420.0, 121154320.0, 121464650.0, 121753740.0, 122077250.0, 122379900.0, 122663590.0, 122922344.0],
    lineTension: 0,
    fill: false,
  borderColor: 'crimson'
  };

var Years = {
  labels: ['1950', '1951', '1952', '1953', '1954', '1955', '1956', '1957', '1958', '1959', '1960', '1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034', '2035', '2036', '2037', '2038', '2039', '2040', '2041', '2042', '2043', '2044', '2045', '2046', '2047', '2048', '2049', '2050', '2051', '2052', '2053', '2054', '2055', '2056', '2057', '2058', '2059', '2060', '2061', '2062', '2063', '2064', '2065', '2066', '2067', '2068', '2069', '2070', '2071', '2072', '2073', '2074', '2075', '2076', '2077', '2078', '2079', '2080', '2081', '2082', '2083', '2084', '2085', '2086', '2087', '2088', '2089', '2090', '2091', '2092', '2093', '2094', '2095', '2096', '2097', '2098', '2099', '2100'],
  datasets: [dataFirst, dataSecond]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 20,
      fontColor: 'black'
    }
  },
  scales: {
    xAxes: [{
      gridLines: {
        display: false,
        color: "black"
      },
      scaleLabel: {
        display: true,
        labelString: "Years",
        fontColor: "black"
      }
    }],
    yAxes: [{
                    ticks: {
                    // Shorthand the millions
                    callback: function(value, index, values) {
                      if (value >= 1000000000 || value <= -1000000000 ) {
                        return value / 1e9 + 'B';
                      } else if (value >= 1000000 || value <= -1000000) {
                        return value / 1e6 + 'M';
                      } else  if (value >= 1000 || value <= -1000) {
                        return value / 1e3 + 'K';
                      }
                      return value;
                    }
                },
      gridLines: {
        color: "black",
        borderDash: [0.5, 1],
        
      },
      scaleLabel: {
        display: true,
        labelString: "People",
        fontColor: "black"
      }
    }]
  }
};

var lineChart = new Chart(Canvas, {
  type: 'line',
  data: Years,
  options: chartOptions
});

//11. most consumed meat

var Canvas = document.getElementById("Animals");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 18;

var dataFirst = {
    label: "Poultry",
    data:  [4340547000, 4461245000, 4572686000, 4641614000, 4770284000, 4886107000, 5125161000, 5273329000, 5448247000, 5698948000, 5905712000, 6085265000, 6237871000, 6396812000, 6478723000, 6659297000, 6879335000, 7249164000, 7627120000, 7953030000, 8268808000, 8524705000, 8762406000, 9086257000, 9465339000, 9979341000, 10559702000, 10956363000, 11313111000, 11748694000, 11763394000, 12245608000, 12844967000, 13500504000, 13933801000, 14655769000, 15409245000, 14196518000, 14750422000, 15547084000, 16143699000, 17447516000, 17478600000, 18093914000, 18629718000, 19059076000, 19706576000, 20517492000, 21329160000, 21942404000, 21561542000, 22159800000, 22630478000, 22773100000, 23559172000, 24292988000, 26418098000, 26825348000, 27471560000, 27606718000, 27713938000, 28310156000],
    lineTension: 1,
    fill: false,
    borderColor: 'khaki'
  };

var dataSecond = {
    label: "Cattle",
    data:[942122112, 957121216, 970331392, 987525056, 1008857216, 1027693888, 1049721152, 1064606656, 1069826752, 1081581056, 1096587776, 1119270016, 1138667136, 1166714112, 1187875072, 1199300352, 1204063616, 1205679616, 1210627840, 1216682112, 1228366080, 1242183552, 1249448064, 1256544640, 1261444224, 1268268800, 1268378624, 1274153600, 1291426048, 1299122432, 1301613184, 1309803264, 1310422016, 1321030016, 1330173952, 1332831104, 1312472320, 1313223808, 1316500864, 1319963136, 1320857728, 1332940928, 1346093312, 1360241152, 1375230848, 1391710976, 1402680960, 1415295872, 1409916928, 1411456256, 1415684480, 1427091584, 1431778688, 1439346048, 1451737088, 1470321024, 1477175552, 1485817984, 1502907008, 1520244864, 1531401344, 1551515648],
    lineTension: 0,
    fill: false,
  borderColor: 'chocolate'
  };
  
var dataThird = {
    label: "Pigs",
    data:[406122880, 422905984, 447799616, 459000928, 496357600, 510364960, 547523392, 546942400, 537580096, 547165184, 618347392, 669075456, 684070464, 687530688, 685644672, 682450752, 711352384, 737579136, 765112896, 797989888, 780853632, 769691712, 776805120, 788496064, 793827392, 825982976, 836271424, 829996864, 844766208, 849307712, 868722816, 870326784, 875214080, 882928384, 896180736, 910118656, 834816704, 870175488, 890199488, 898673600, 881899008, 892454016, 898714624, 892953280, 904483072, 925067840, 919165696, 938541568, 967816384, 971726912, 973743296, 984023808, 979541760, 990153984, 992306880, 985649856, 977319424, 957838656, 839279424, 938571072, 978675904, 978971968],
    lineTension: 0,
    fill: false,
  borderColor: 'palevioletred'
  };

var Years = {
  labels: ['1961', '1962', '1963', '1964', '1965', '1966', '1967', '1968', '1969', '1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979', '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
  datasets: [dataFirst, dataSecond,dataThird]
};

var chartOptions = {
    title: {
      display: true,
      text: "Populations of most consumed meat"
    },
  legend: {
    display: true,
    position: 'right',
    labels: {
      boxWidth: 20,
      fontColor: 'black'
    }
  },
  scales: {
    xAxes: [{
      gridLines: {
        display: true,
      },
      scaleLabel: {
        display: true,
        labelString: "Years",
      }
    }],
    yAxes: [{
                    ticks: {
                    // Shorthand the millions
                    callback: function(value, index, values) {
                      if (value >= 1000000000 || value <= -1000000000 ) {
                        return value / 1e9 + 'B';
                      } else if (value >= 1000000 || value <= -1000000) {
                        return value / 1e6 + 'M';
                      } else  if (value >= 1000 || value <= -1000) {
                        return value / 1e3 + 'K';
                      }
                      return value;
                    }
                },

      scaleLabel: {
        display: true,
        labelString: "People",
      }
      
    }]
  }
};

var lineChart = new Chart(Canvas, {
  type: 'line',
  data: Years,
  options: chartOptions
});


//12. SA provinces

var xValues = ["Gauteng","KZN", "Western Cape", "Eastern Cape", "Limpopo","Mpumalanga", "North West", "Free State", "Northern Cape"];
var yValues = [15.9, 12.3, 7.6, 7.2, 6.4, 5.1, 4.2,3.0,1.4];
var barColors = [ "sienna","sienna","#sienna","lightsalmon","lightsalmon","lightsalmon","lightsalmon","lightsalmon","lightsalmon","lightsalmon"];

new Chart("SAprovinces", {
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
      scales: {
    xAxes: [{
      gridLines: {
        display: false,
        color: "black"
      },
      scaleLabel: {
        display: true,
        labelString: "Provinces",
        fontColor: "sienna"
      }
    }],
    yAxes: [{
                    ticks: {
                    // Shorthand the millions
                    callback: function(value, index, values) {
                      if (value >= 1000000000 || value <= -1000000000 ) {
                        return value / 1e9 + 'B';
                      } else if (value >= 1000000 || value <= -1000000) {
                        return value / 1e6 + 'M';
                      } else  if (value >= 1000 || value <= -1000) {
                        return value / 1e3 + 'K';
                      }
                      return value;
                    }
                },
      gridLines: {
        color: "black",
        borderDash: [0.5, 1],
        
      },
      scaleLabel: {
        display: true,
        labelString: "People",
        fontColor: "black"
      }
    }]
  },
    title: {
      display: true,
      text: "South Africa population per province(2024)"
    }
  }
});











