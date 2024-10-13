




//ONE PIECE STATS

//1.Sales Japan


var xValues = [1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023];

var yValues = [300000,268484,371950,,,2600000,2630000,,2250000,,,5956540,14721241,32343809,37996373,23464866,18151599,11885957,14102521,12314326,11495532,8113317,10134232,7709667,7002583,10364102,7197532];

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

var xValues = [1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023];
var yValues = [300000,6000000,17000000,37000000,54000000,73000000,90000000,99000000,112000000,125000000,139000000,153000000,177000000,216000000,257000000,281000000,302000000,320000000,360000000,400000000,430000000,440000000,460000000,470000000,490000000,514000000,523203195];

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

var yValues =chapters=[7,14,20,27,27,5,5,9,15,25,63,19,66,19,53,56,11,48,24,11,25,31,17,5,51,46,102,23,78,6,149,68,3];
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
















