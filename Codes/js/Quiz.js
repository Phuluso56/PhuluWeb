var quizdata = [
  // --- CATEGORY 1: Mathematics (10 Questions) ---
  { question: "What is $$1 + 1$$?", options: ["2", "0", "11", "Unsolvable"], answer: "2", category: 1 },
  { question: "What is 25% of 50?", options: ["25", "12.5", "50", "None of the above"], answer: "12.5", category: 1 },
  { question: "If you roll two six-sided dice, what is the probability that you get an even number sum?", options: ["33.33%", "50%", "100%", "66.66%"], answer: "50%", category: 1 },
  { question: "Phuluso is 6 years older than Luffy. Together their ages add up to 52 years. How old is Phuluso?", options: ["29", "25", "18", "26"], answer: "29", category: 1 },
  { question: "The longest side of a rectangular house is 25m. If you walk one lap around the house within close proximity you walk 74m. What is the approximate length of the shortest side of the house?", options: ["12m", "25m", "10m", "24m"], answer: "12m", category: 1 },
  { question: "How many sides does an equilateral triangle have?", options: ["Infinite", "6", "3", "12"], answer: "3", category: 1 },
  { question: "If $$A + A = 4$$, $$A + B = 5$$, and $$A \\times B + 2C = 18$$, what is $$A + B + C$$?", options: ["6", "5", "3", "11"], answer: "11", category: 1 },
  { question: "How many digits does pi ($$\\pi$$) have?", options: ["Infinite", "3.141592", "Undefined", "9"], answer: "Infinite", category: 1 },
  { 
    question: "What is the Taylor series expansion of $$\\sin(x)$$ centered at $$a = 0$$?", 
    options: [
      "$$x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\dots$$", 
      "$$1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + \\dots$$", 
      "$$x + \\frac{x^3}{3!} + \\frac{x^5}{5!} + \\frac{x^7}{7!} + \\dots$$", 
      "$$1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots$$"
    ], 
    answer: "$$x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\dots$$", 
    category: 1 
  },
  { 
    question: "Which of the following statements formally defines the Archimedean property of real numbers?", 
    options: [
      "For any $$x, y \\in \\mathbb{R}$$ with $$x > 0$$, there exists an $$n \\in \\mathbb{N}$$ such that $$nx > y$$.", 
      "For every non-empty subset $$S \\subset \\mathbb{R}$$ that is bounded above, $$\\sup(S) \\in \\mathbb{R}$$.", 
      "If $$a, b \\in \\mathbb{R}$$ and $$a < b$$, then there exists a rational number $$r \\in \\mathbb{Q}$$ such that $$a < r < b$$.", 
      "For any sequence $$(x_n)$$, if $$\\lim_{n \\to \\infty} x_n = L$$, then the limit $$L$$ is unique."
    ], 
    answer: "For any $$x, y \\in \\mathbb{R}$$ with $$x > 0$$, there exists an $$n \\in \\mathbb{N}$$ such that $$nx > y$$.", 
    category: 1 
  },

  // --- CATEGORY 2: SA Trivia (10 Questions) ---
  { question: "What animal is on the R200 note?", options: ["Leopard", "Jaguar", "Cheetah", "Tiger"], answer: "Leopard", category: 2 },
  { question: "Which of the following elements is not featured on the South African coat of arms?", options: ["The Secretary Bird", "The Protea", "The African Lion", "The Rising Sun"], answer: "The African Lion", category: 2 },
  { question: "How many languages are in the South African anthem?", options: ["4", "5", "6", "11"], answer: "5", category: 2 },
  { question: "What currency does South Africa use?", options: ["Dollar", "Berries", "Euro", "Rand"], answer: "Rand", category: 2 },
  { question: "What is the largest city by population in South Africa?", options: ["Cape Town", "Durban", "Johannesburg", "Pretoria"], answer: "Johannesburg", category: 2 },
  { question: "Who among these individuals has not won a Nobel Prize in South Africa?", options: ["Nelson Mandela", "Desmond Tutu", "F.W. de Klerk", "Winnie Mashaba"], answer: "Winnie Mashaba", category: 2 },
  { question: "How many official public holidays are there in South Africa under the Public Holidays Act?", options: ["21", "12", "15", "9"], answer: "12", category: 2 },
  { question: "Who scored the first goal in 2010 FIFA world cup?", options: ["Siphiwe Tshabalala", "El Matador", "Benni McCarthy", "Cristiano Ronaldo"], answer: "Siphiwe Tshabalala", category: 2 },
  { question: "What is the national flower of South Africa?", options: ["King Protea", "Jacaranda ", "Sunflower", "Aloe"], answer: "King Protea", category: 2 },
  { question: "In what year was the South African national football team, Bafana Bafana, officially founded?", options: ["1992", "1994", "2010", "1906"], answer: "1992", category: 2 },

  // --- CATEGORY 3: Pop Culture (10 Questions) ---
  { question: "What is the greatest manga/anime of all time?", options: [" ", " ", "One Piece", " "], answer: "One Piece", category: 3 },
  { question: "Which of these characters was not part of the core friend group in the TV show F.R.I.E.N.D.S?", options: ["Rachel", "Gunther", "Phoebe", "Joey"], answer: "Gunther", category: 3 },
  { question: "What year did Michael Jackson's album 'Thriller' come out?", options: ["1980", "1982", "2026", "2005"], answer: "1982", category: 3 },
  { question: "Who plays Iron Man in the MCU?", options: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"], answer: "Robert Downey Jr.", category: 3 },
  { question: "Which of the following movies was not directed by Christopher Nolan?", options: ["Inception", "Interstellar", "The Dark Knight", "Kill Bill"], answer: "Kill Bill", category: 3 },
  { question: "Which fictional wizarding school does Harry Potter attend?", options: ["Hogwarts", "Harvard", "Gryffindor", "Ilvermorny"], answer: "Hogwarts", category: 3 },
  { question: "Which movie won the Academy Award for Best Picture in 2024?", options: ["Oppenheimer", "Barbie", "Star Wars", "The Holdovers"], answer: "Oppenheimer", category: 3 },
  { question: "Who is known as the 'King of Pop'?", options: ["Elvis Presley", "Michael Jackson", "Prince", "Brook"], answer: "Michael Jackson", category: 3 },
  { question: "What is the name of the fictional continent where the main events of Game of Thrones take place?", options: ["Westeros", "The Grand line", "Tamriel", "Middle-earth"], answer: "Westeros", category: 3 },
  { question: "Which local artist has sold the most stadium shows in South African history?", options: ["Cassper Nyovest", "Tyla", "Makhadzi", "Black Coffee"], answer: "Cassper Nyovest", category: 3 },

  // --- CATEGORY 4: General Knowledge (20 Questions) ---
  { question: "What university did Phuluso graduate from?", options: ["University of the Witwatersrand", "University of Johannesburg", "University of Pretoria", "University of Venda"], answer: "University of Pretoria", category: 4 },
  { question: "Approximately how many kilometers long is the Comrades Marathon?", options: ["42 km", "89 km", "56 km", "81 km"], answer: "89 km", category: 4 },
  { question: "What does the word 'Hippopotamus' mean in ancient Greek?", options: ["River horse", "Water monster", "River Pig", "Armored pig"], answer: "River horse", category: 4 },
  { question: "How many confirmed chemical elements are currently on the periodic table?", options: ["69", "143", "118", "120"], answer: "118", category: 4 },
  { 
    "question": "What is the approximate mass of the Earth?", 
    "options": ["$$5.97 \\times 10^{24} \\text{ kg}$$", "$$7.34 \\times 10^{22} \\text{ kg}$$", "$$1.98 \\times 10^{30} \\text{ kg}$$", "$$3.84 \\times 10^{18} \\text{ kg}$$"], 
    "answer": "$$5.97 \\times 10^{24} \\text{ kg}$$", 
    "category": 4 
  },
  { question: "What is the average distance from the Earth to the Moon?", options: ["150,000 km", "384,400 km", "500,000 km", "1,000,000 km"], answer: "384,400 km", category: 4 },
  { question: "What is the deepest ocean on Earth?", options: ["The All Blue", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"], answer: "Pacific Ocean", category: 4 },
  { question: "How many symphonies did Ludwig van Beethoven write and publish?", options: ["5", "9", "16", "32"], answer: "9", category: 4 },
  { question: "How many psalms are there in the Bible?", options: ["100", "150", "119", "121"], answer: "150", category: 4 },
  { question: "What is officially recognized as the oldest active association football club in the world?", options: ["Sheffield F.C.", "Bafana Bafana", "Real Madrid", "Manchester United"], answer: "Sheffield F.C.", category: 4 },
  { question: "How many strings does a standard violin have?", options: ["3", "4", "5", "6"], answer: "4", category: 4 },
  { 
    "question": "What is the mathematical formula for the Pythagorean theorem?", 
    "options": ["$$E = mc^2$$", "$$a^2 + b^2 = c^2$$", "$$A = \\pi r^2$$", "$$y = mx + c$$"], 
    "answer": "$$a^2 + b^2 = c^2$$", 
    "category": 4 
  },
  { question: "Where was the melody for the European Anthem adapted from?", options: ["Beethoven's 9th Symphony", "Mozart's Requiem", "Haydn's emperor's hymn", "Handel's Messiah"], answer: "Beethoven's 9th Symphony", category: 4 },
  { question: "Who has won the most Ballon d'Or awards in football history?", options: ["Cristiano Ronaldo", "Lionel Messi", "Pelé", "Diego Maradona"], answer: "Lionel Messi", category: 4 },
  { question: "What is the largest planet in our solar system?", options: ["Saturn", "Jupiter", "Neptune", "Earth"], answer: "Jupiter", category: 4 },
  { question: "What mythology does the god Thor originate from?", options: ["Greek Mythology", "Roman Mythology", "Norse Mythology", "Egyptian Mythology"], answer: "Norse Mythology", category: 4 },
  { question: "Who is historically considered to be the primary father of communism?", options: ["Karl Marx", "Adolf Hitler", "Joseph Stalin", "Kim Jong Un"], answer: "Karl Marx", category: 4 },
  { question: "How many internationally recognized countries are there in Africa?", options: ["50", "54", "48", "60"], answer: "54", category: 4 },
  { question: "Which global religion follows the Quran as its central holy text?", options: ["GODA", "Hinduism", "Buddhism", "Islam"], answer: "Islam", category: 4 },
  { question: "In which year did World War II officially end?", options: ["1994", "1939", "1945", "2005"], answer: "1945", category: 4 }
];

// App Variables Matrix
var resultList = [];
var $progressValue = 0;
var myChartInstance = null; 

function shuffleArray(questions) { 
    return questions.sort(function() { return 0.5 - Math.random(); }); 
}

function generateQuestions(selectedCategory) {
    var filtered = quizdata.filter(function(item) {
        return item.category === selectedCategory;
    });
    return shuffleArray(filtered);
}

function returnOptionList(opts, i) {
    return '<li class="myoptions" data-value="' + opts + '">' +
           '<input type="radio" name="opts" value="' + opts + '" id="opt_' + i + '">' +
           '<label for="opt_' + i + '">' + opts + '</label>' +
           '<div class="bullet"></div>' +
           '</li>';
}

function renderOptions(optionList) {
    var ulContainer = $('<ul>').attr('id', 'optionList');
    for (var i = 0, len = optionList.length; i < len; i++) {
        var optionContainer = returnOptionList(optionList[i], i);
        ulContainer.append(optionContainer);
    }
    $(".answerOptions").html('').append(ulContainer);
}

function renderQuestion(question) { 
    $(".question").html("<h3>" + question + "</h3>"); 
}

function renderQuiz(questions, index) {
    var currentQuest = questions[index];
    renderQuestion(currentQuest.question);
    renderOptions(currentQuest.options);
    
    // CRITICAL FIX: Forces MathJax to scan the DOM and compile the new math code right after injection
    if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetPromise();
    }
}

function getCorrectAnswer(questions, index) { 
    return questions[index].answer; 
}

function correctAnswerArray(resultByCat) {
    var arrayForChart = [0, 0, 0, 0];
    for (var i = 0; i < resultByCat.length; i++) {
        var catId = resultByCat[i].category;
        if (catId >= 1 && catId <= 4) {
            arrayForChart[catId - 1] = resultByCat[i].correctanswer;
        }
    }
    return arrayForChart;
}

function genResultArray(results, wrong) {
    var resultByCat = resultByCategory(results);
    var arrayForChart = correctAnswerArray(resultByCat);
    arrayForChart.push(wrong); 
    return arrayForChart;
}

function countAnswers(results) {
    var countCorrect = 0, countWrong = 0;
    for (var i = 0; i < results.length; i++) {
        if (results[i].iscorrect == true) countCorrect++; 
        else countWrong++;
    }
    return [countCorrect, countWrong];
}

function resultByCategory(results) {
    var categoryCount = [];
    results.reduce(function (res, value) {
        if (!res[value.category]) {
            res[value.category] = { category: value.category, correctanswer: 0 };
            categoryCount.push(res[value.category]);
        }
        var val = (value.iscorrect == true) ? 1 : 0;
        res[value.category].correctanswer += val;
        return res;
    }, {});
    categoryCount.sort(function(a, b) { return a.category - b.category; });
    return categoryCount;
}

function totalPieChart(_upto, _cir_progress_id, _correct, _incorrect) {
    $("#" + _cir_progress_id).find("._text_incor").html("Incorrect : " + _incorrect);
    $("#" + _cir_progress_id).find("._text_cor").html("Correct : " + _correct);
    var unchnagedPer = _upto;
    _upto = (_upto > 100) ? 100 : ((_upto < 0) ? 0 : _upto);
    var _progress = 0;
    var _cir_progress = $("#" + _cir_progress_id).find("._cir_P_y");
    var _text_percentage = $("#" + _cir_progress_id).find("._cir_Per");
    var _sleep = setInterval(_animateCircle, 25);

    function _animateCircle() {
        var _input_percentage = (_upto / 100) * 764;
        var _percentage = (_progress / 100) * 764;
        _text_percentage.html(_progress + '%');
        if (_percentage >= _input_percentage) {
            _text_percentage.html(unchnagedPer + '%<tspan x="50%" dy="1.9em">Your Score</tspan>');
            clearInterval(_sleep);
        } else {
            _progress++;
            _cir_progress.attr("stroke-dasharray", _percentage + ',764');
        }
    }
}

function renderBriefChart(correct, total, incorrect) {
    var percent = (100 * correct / total);
    if (Math.round(percent) !== percent) { percent = percent.toFixed(2); }
    totalPieChart(percent, '_cir_progress', correct, incorrect);
}

function renderChart(data) {
    var ctx = document.getElementById("myChart").getContext('2d');
    if (myChartInstance !== null) {
        myChartInstance.destroy();
    }
    myChartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Maths", "History", "Pop Culture", "General Knowledge", "Incorrect Slices"],
            datasets: [{
                data: data,
                backgroundColor: ['#e6ded4', '#968089', '#e3c3d4', '#4fa3ab', '#ab4e6b'],
                borderWidth: 1
            }]
        }
    }
  );
}

function getAllAnswer(results) {
    var innerhtml = "";
    for (var i = 0; i < results.length; i++) {
        var _classH = ((results[i].iscorrect) ? "h-correct" : "h-incorrect");
        var _html = '<div class="_resultboard ' + _classH + '">' +
                    '<div class="_header">' + (i + 1) + ". " + results[i].question + '</div>' +
                    '<div class="_yourans">Your Answer: ' + results[i].clicked + '</div>';
        if (!results[i].iscorrect) {
            _html += '<div class="_correct">Correct Answer: ' + results[i].answer + '</div>';
        }
        _html += '</div>';
        innerhtml += _html;
    }
    $(".allAnswerBox").html('').append(innerhtml);
    
    // Reruns MathJax checking down the final assessment summary window
    if (window.MathJax && window.MathJax.typesetPromise) {
        MathJax.typesetPromise();
    }
}

function renderResult(resultList) {
    var countCorrect = countAnswers(resultList)[0], countWrong = countAnswers(resultList)[1];
    renderBriefChart(countCorrect, resultList.length, countWrong);
}

function renderChartResult() {
    var countWrong = countAnswers(resultList)[1];
    var dataForChart = genResultArray(resultList, countWrong);
    renderChart(dataForChart);
}

function getProgressindicator(length) {
    var progressbarhtml = " ";
    for (var i = 0; i < length; i++) {
        progressbarhtml += '<div class="my-progress-indicator progress_' + (i + 1) + ' ' + ((i == 0) ? "active" : "") + '">';
    }
    $(progressbarhtml).insertAfter(".my-progress-bar");
}

function changeProgressValue(totalQuestions) {
    var increment = 100 / totalQuestions;
    $progressValue += increment;
    if ($progressValue > 100) $progressValue = 100;
    
    $('.my-progress').find('.my-progress-indicator.active').next('.my-progress-indicator').addClass('active');
    $('progress').val($progressValue);
    $('.js-my-progress-completion').html(Math.round($progressValue) + '% complete');
}

function addClickedAnswerToResult(questions, presentIndex, clicked) {
    var correct = getCorrectAnswer(questions, presentIndex);
    var result = {
        index: presentIndex,
        question: questions[presentIndex].question,
        clicked: clicked,
        iscorrect: (clicked == correct) ? true : false,
        answer: correct,
        category: questions[presentIndex].category
    };
    resultList.push(result);
}

$(document).ready(function() {
    var presentIndex = 0;
    var clicked = 0;
    var questions = [];

$(".menu-btn").on('click', function() {
        var selectedCategory = parseInt($(this).data('category'));
        questions = generateQuestions(selectedCategory);

        if(questions.length === 0) {
            alert("Empty category repository initialization vector error!");
            return;
        }

        // --- ADDED: Map categories to dynamic scorecard titles ---
        var categoryTitles = {
            1: "Mathematics Score",
            2: "South African Trivia Score",
            3: "Pop Culture Score",
            4: "General Knowledge Score"
        };
        // This targets the h1 inside the scorecard results container and updates its text
        $(".resultPage1 h1").text(categoryTitles[selectedCategory] || "Performance Scorecard");
        // ---------------------------------------------------------

        $("#quiz-menu").hide();
        $(".quizArea").show();

        renderQuiz(questions, presentIndex);
        getProgressindicator(questions.length);
    });

    $(".answerOptions").on('click', '.myoptions', function(e) {
        var $radio = $(this).find('input[type="radio"]');
        $radio.prop('checked', true);
        
        clicked = $(this).data('value');
        
        if (questions.length == (presentIndex + 1)) {
            $("#submit").removeClass('hidden');
            $("#next").addClass("hidden");
        } else {
            $("#next").removeClass("hidden");
        }
    });

    $("#next").on('click', function(e) {
        e.preventDefault();
        addClickedAnswerToResult(questions, presentIndex, clicked);
        $(this).addClass("hidden");
        presentIndex++;
        renderQuiz(questions, presentIndex);
        changeProgressValue(questions.length);
    });

    $("#submit").on('click', function(e) {
        addClickedAnswerToResult(questions, presentIndex, clicked);
        $('.multipleChoiceQues').hide();
        $(".resultArea").show();
        renderResult(resultList);
    });

    $(".resultArea").on('click', '.viewchart', function() {
        $(".resultPage2").show();
        $(".resultPage1").hide();
        $(".resultPage3").hide();
        renderChartResult();
    });

    $(".resultArea").on('click', '.backBtn', function() {
        $(".resultPage1").show();
        $(".resultPage2").hide();
        $(".resultPage3").hide();
        renderResult(resultList);
    });

    $(".resultArea").on('click', '.viewanswer', function() {
        $(".resultPage3").show();
        $(".resultPage2").hide();
        $(".resultPage1").hide();
        getAllAnswer(resultList);
    });

    $(document).on('click', '.replay', function () {
        resultList = [];
        $progressValue = 0;
        presentIndex = 0;
        clicked = 0;
        questions = [];
        
        if (myChartInstance !== null) {
            myChartInstance.destroy();
            myChartInstance = null;
        }

        $(".my-progress-indicator").remove();
        $("progress").val(0);
        $('.js-my-progress-completion').html('0% complete');
        
        $("#next").addClass("hidden");
        $("#submit").addClass("hidden");
        
        $(".resultArea").hide();
        $(".resultPage2").hide();
        $(".resultPage3").hide();
        $(".resultPage1").show();
        $('.multipleChoiceQues').show();
        $(".quizArea").hide();
        $("#quiz-menu").show();
    });
});
