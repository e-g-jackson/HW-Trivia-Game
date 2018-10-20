var score = 0;
var time = 10;
i = 0;
var points;
var mainDiv = $('#mainDiv');
var question = [
    {q: "./assets/images/House-Baratheon.png",
        a: "Stark",
        b: "Targaryen",
        c: "Baratheon",
        d: "Frey",
        ans: "c",
        //answerRef = function(){return (this).ans} ???
    },
    {q: "./assets/images/House-Lannister.png",
        a: "Bolton",
        b: "Baratheon",
        c: "Tyrell",
        d: "Lannister",
        ans: "d",
    },
    {q: "./assets/images/House-Arryn.png",
        a: "Arryn",
        b: "Tully",
        c: "Martell",
        d: "Stark",
        ans: "a",
    },
    {q: "./assets/images/House-Stark.png",
        a: "Martell",
        b: "Stark",
        c: "Targaryen",
        d: "Bolton",
        ans: "b",
    },
    {q: "./assets/images/House-Tully.png",
        a: "Tully",
        b: "Baratheon",
        c: "Arryn",
        d: "Stark",
        ans: "a",
    },
    {q: "./assets/images/House-Martell.png",
        a: "Baratheon",
        b: "Targaryen",
        c: "Tyrell",
        d: "Martell",
        ans: "d",
    },
    {q: "./assets/images/House-Targaryen.png",
        a: "Stark",
        b: "Frey",
        c: "Targaryen",
        d: "Lannister",
        ans: "c",
    },
    {q: "./assets/images/House-Bolton.png",
        a: "Bolton",
        b: "Stark",
        c: "Martell",
        d: "Tully",
        ans: "a",
    },
    {q: "./assets/images/House-Tyrell.png",
        a: "Greyjoy",
        b: "Lannister",
        c: "Frey",
        d: "Tyrell",
        ans: "d",
    },
    {q: "./assets/images/House-Frey.png",
        a: "Tully",
        b: "Frey",
        c: "Lannister",
        d: "Targaryen",
        ans: "b",
    },
    {q: "./assets/images/House-Greyjoy.png",
        a: "Greyjoy",
        b: "Tyrell",
        c: "Bolton",
        d: "Frey",
        ans: "a",
    }
];

var qLength = question.length;
//Greeting Function when page loads
var greetingFxn = function(){
    var titleDiv = document.createElement('div');
        $(titleDiv).html('Welcome to the Game of Thrones Sigil Trivial Game!');
        $(titleDiv).attr('id', 'infoText');
        $(titleDiv).appendTo(mainDiv);

    var startButton = document.createElement('button');
        $(startButton).html('START!');
        $(startButton).attr('id', 'startButton')
        $(startButton).attr('class', 'btn btn-success')
        $(startButton).appendTo(mainDiv);
    console.log('greetingFxn operational');
};

//Instructions
var instruct = function(){
    $('#mainDiv').empty();
    console.log('Prepare to be instructed on the finer points of Trivia!');
    var instructions = document.createElement('div');
        $(instructions).attr('id','infoText');
        $(instructions).append('You must select the house that matches the displayed sigil. <br> Picking the correct house will earn you a point, picking the wrong house will earn you deep shame! <br> You have 10 seconds per question.<br><br><br>Are You Ready?');
        $(instructions).appendTo('#mainDiv');

    var letsGoButton = document.createElement('button');
        $(letsGoButton).html('Lets Go!');
        $(letsGoButton).attr('class', 'btn btn-success');
        $(letsGoButton).attr('id', 'letsGoButton')
        $(letsGoButton).appendTo('#mainDiv');
    $(document).on('click', '#letsGoButton', letsGo);
};

//Leave Instructions
var letsGo = function(){
    $(mainDiv).empty();
    console.log('Lets get to it!');
    showQ();
};
//Score
function scoreKeeper(){
    var scoreCard = $('<div></div>');
    $(scoreCard).attr('id', 'scoreCard')
    $(scoreCard).html('Score: ' + score + '<br>Time:' + time)
    $(scoreCard).appendTo(mainDiv);
};
//Game Start
function showQ(){
    $(question)
    $(qLength)
    var spawner = function(){
    var liveQuestion = question[i];
    var qDiv = $('<div></div>');
    var quest = $('<img>');
            quest.attr('src', question[i].q); 
            quest.attr('id', 'pic');
    var questDiv = $('<div></div>');
        questDiv.attr('id', 'questDiv');
        quest.appendTo(questDiv);
        questDiv.appendTo(qDiv);

    var ansA =$('<button></button>') ;
        $(ansA).attr('id', 'a');
        $(ansA).attr('class', 'btn btn-success answerButton');
        $(ansA).html("A) " + liveQuestion.a);

    var ansB =$('<button></button>') ;
        $(ansB).attr('id', 'b');
        $(ansB).attr('class', 'btn btn-success answerButton');
        $(ansB).html("B) " + liveQuestion.b);

    var ansC =$('<button></button>') ;
        $(ansC).attr('id', 'c');
        $(ansC).attr('class', 'btn btn-success answerButton');
        $(ansC).html("C) " + liveQuestion.c);

    var ansD =$('<button></button>') ;
        $(ansD).attr('id', 'd');
        $(ansD).attr('class', 'btn btn-success answerButton');
        $(ansD).html("D) " + liveQuestion.d);
        
    var scoreDiv = $('<div></div>')
        $(scoreDiv).attr('id', 'scoreDiv')
        $(scoreDiv).html('Score: ' + score + ' Time: ' + time);
        $(scoreDiv).appendTo(qDiv);

    var ansDiv = $('<div></div>')
        $(ansDiv).attr('id', 'ansDiv')
        $(ansA).appendTo(ansDiv);
        $(ansB).appendTo(ansDiv);
        $(ansC).appendTo(ansDiv);
        $(ansD).appendTo(ansDiv);
        $(ansDiv).appendTo(qDiv);
    
    //Game Timer
    $(qDiv).appendTo('#mainDiv');
    countdown = setInterval(function(){
        $(scoreDiv)
        time--;
        scoreDiv.html('Score: ' + score + ' Time: ' + time);
    }, 1000)
    var timeout = setTimeout(function(){
        alert('time\'s up!');
        $('#mainDiv').html("<h2>Sorry, you ran out of Time!</h2>");
    }, 10000)
    $('.answerButton').on('click', function(){
        console.log($(this).attr('id'));
        if($(this).attr('id') == liveQuestion.ans){
            alert('well done!')
            i++;
            score++;
            time = 10;
            console.log(score);
            $(qDiv).empty();
            clearInterval(countdown);
            clearInterval(timeout);
            if ( i == 10){
                victory()} 
            else {spawner();}
        } else {
            alert('nope');
            i++;
            time = 10;
            $(qDiv).empty();
            clearInterval(countdown);
            clearInterval(timeout);
            if ( i == 10){
                victory()}
            else {spawner();}
        }
    })
    }
    spawner()
};
//Reset Button
var  reload = $('<button>Reset Page</button>');
    reload.attr('id', 'reloadButton');
    reload.attr('class','btn btn-danger');
    reload.appendTo('footer');
    $(reload).on('click', reload, function(){
        location.reload(true);
    })
//needed?
var divCreator = function(){
    var questionBox = $('<div>');
    questionBox.attr('id', 'questionBox');
    questionBox.html()
    
};
//victory conditions
var victory = function(){
    $(mainDiv)
    $(mainDiv).html("");
    var finalScore = document.createElement('div');
    if ( score === 10 ){
        $(finalScore).html('<h2>Perfect Score!<br>You scored ' + score + ' out of 10!</h2>');
        $(finalScore).appendTo(mainDiv);
    }
    else if ( score > 7 ){
        $(finalScore).html('<h2>Great Job!<br>You scored ' + score + ' out of 10!</h2>');
        $(finalScore).appendTo(mainDiv);
    }
    else {
        $(finalScore).html('<h2>You could use some practice!<br>You scored ' + score + ' out of 10!</h2>');
        $(finalScore).appendTo(mainDiv);
    }

}
$(document).on('click', '#startButton', instruct);
$(document).ready(greetingFxn());
