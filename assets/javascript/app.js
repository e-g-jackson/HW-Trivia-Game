var score = 0;
var points;
var mainDiv = $('#mainDiv');
var question = [
    {q: "./assets/images/House-Baratheon.png",
        a: "A",
        b: "B",
        c: "C",
        d: "D",
        ans: "a",
        //answerRef = function(){return (this).ans} ???
    },
    {q: "./assets/images/House-Lannister.png",
        a: "E",
        b: "F",
        c: "G",
        d: "H",
        ans: "b",
    },
    {q: "./assets/images/House-Arryn.png",
        a: "I",
        b: "J",
        c: "K",
        d: "L",
        ans: "c",
    },
    {q: "./assets/images/House-Stark.png",
        a: "M",
        b: "N",
        c: "O",
        d: "P",
        ans: "a",
    },
    {q: "./assets/images/House-Tully.png",
        a: "Q",
        b: "R",
        c: "S",
        d: "T",
        ans: "a",
    },
    {q: "./assets/images/House-Martell.png",
        a: "U",
        b: "V",
        c: "W",
        d: "X",
        ans: "a",
    },
    {q: "./assets/images/House-Targaryen.png",
        a: "Y",
        b: "Z",
        c: "A",
        d: "B",
        ans: "a",
    },
    {q: "./assets/images/House-Bolton.png",
        a: "C",
        b: "D",
        c: "E",
        d: "F",
        ans: "a",
    },
    {q: "./assets/images/House-Tyrell.png",
        a: "G",
        b: "H",
        c: "I",
        d: "J",
        ans: "a",
    },
    {q: "./assets/images/House-Frey.png",
    a: "G",
    b: "H",
    c: "I",
    d: "J",
    ans: "a",
    },
    {q: "./assets/images/House-Greyjoy.png",
        a: "G",
        b: "H",
        c: "I",
        d: "J",
        ans: "a",
    }
];

var qLength = question.length;
    console.log(question);
    console.log(qLength);

//Greeting Function when page loads
var greetingFxn = function(){
    var titleDiv = document.createElement('div');
        $(titleDiv).html('Are you ready to play the TRIVIA GAME!');
        $(titleDiv).attr('id', 'infoText');
        $(titleDiv).appendTo(mainDiv);
    var startButton = document.createElement('button');
        $(startButton).html('START!');
        $(startButton).attr('id', 'startButton')
        $(startButton).attr('style', 'display: flex; margin-left: auto; margin-right: auto;')
        $(startButton).attr('class', 'mx-auto')
        $(startButton).appendTo(mainDiv);
    console.log('greetingFxn operational');
};

//Instructions
var instruct = function(){
    $('#mainDiv').empty();
    console.log('Prepare to be instructed on the finer points of Trivia!');
    var instructions = document.createElement('div');
        $(instructions).attr('id','infoText');
        $(instructions).append('Answer Question within the time limit to win!<br><br><br>Ready?');
        $(instructions).appendTo('#mainDiv');
    var letsGoButton = document.createElement('button');
        $(letsGoButton).html('Lets Go!');
        $(letsGoButton).attr('style', 'display: flex; margin-left: auto; margin-right: auto;');
        $(letsGoButton).attr('id', 'letsGoButton')
        $(letsGoButton).appendTo('#mainDiv');
    $(document).on('click', '#letsGoButton', letsGo);
};

//Leave Instructions
var letsGo = function(){
    $(mainDiv).empty();
    console.log('Lets get to it!');
    showQ();
    // game start function
};

//Game Start
function showQ(){
    $(question)
    $(qLength)
    i = 0;
    var spawner = function(){
        var liveQuestion = question[i];
        var qDiv = $('<div></div>');
            var quest = $('<img>');
                quest.attr('src', question[i].q); 
                quest.appendTo(qDiv);

            var ansA =$('<button></button>') ;
                $(ansA).attr('id', 'a');
                $(ansA).html("A) " + liveQuestion.a);
                $(ansA).appendTo(qDiv);

            var ansB =$('<button></button>') ;
                $(ansB).attr('id', 'b');
                $(ansB).html("B) " + liveQuestion.b);
                $(ansB).appendTo(qDiv);

            var ansC =$('<button></button>') ;
                $(ansC).attr('id', 'c');
                $(ansC).html("C) " + liveQuestion.c);
                $(ansC).appendTo(qDiv);

            var ansD =$('<button></button>') ;
                $(ansD).attr('id', 'd');
                $(ansD).html("D) " + liveQuestion.d);
                $(ansD).appendTo(qDiv);

            $(qDiv).appendTo('#mainDiv')
            $('button').on('click', function(){
                console.log($(this).attr('id'))
                if($(this).attr('id') == liveQuestion.ans){
                    alert('well done!')
                    i++;
                    score++;
                    console.log(score);
                    $(qDiv).empty();
                    spawner();
                }
                else {
                    alert('nope');
                    i++;
                    $(qDiv).empty();
                    spawner();
                }
            })
    }
    spawner();
};
var answerFxn = function(){

};

var divCreator = function(){
    var questionBox = $('<div>');
    questionBox.attr('id', 'questionBox');
    questionBox.html()
    
};
$(document).on('click', '#startButton', instruct);
$(document).ready(greetingFxn());
