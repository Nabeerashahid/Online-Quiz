
const quizData = [
    {
        questions : "What does HTML stand for?" ,
        Options: [
             "Hyper Text Markup Language" ,
             "High Text Markup Language" ,
             "Hyperlinks and Text Markup Language" ,
             "Home Tool Markup Language"
        ],
        correct : 0,
    },

    {
        questions : "Which tag is used to create a hyperlink in HTML?" ,
        Options: [
             "<link>" ,
             "<a>" ,
             "<href>" ,
             "<hyperlink>"
        ],
        correct : 1,
    },

    {
        questions : " Which HTML tag is used to define an internal style sheet?" ,
        Options: [
             "<script>" ,
             "<style>" ,
             "<css>" ,
             "<link>"
        ],
        correct : 1,
    },

    {
        questions : " Which HTML element is used to define important text?" ,
        Options: [
             "<strong>" ,
             "<i>" ,
             "<em>" ,
             "<b>"
        ],
        correct : 0,
    },

    {
        questions : " Which attribute is used to provide an alternative text for an image, if the image cannot be displayed?" ,
        Options: [
             "alt" ,
             "title" ,
             "src" ,
             "href"
        ],
        correct : 0,
    },

    {
        questions : " Which property is used to change the background color of an element?" ,
        Options: [
             "color" ,
             "bgcolor" ,
             "background-color" ,
             "background"
        ],
        correct : 2,
    },
    
     {
        questions : " How do you make each word in a text start with a capital letter in CSS?" ,
        Options: [
             "text-transform: capitalize" ,
             "text-transform: uppercase" ,
             "text-transform: lowercase" ,
             "text-transform: capitalize-first"
        ],
        correct : 0,
    },

    {
        questions : " Which property is used to change the font of an element?" ,
        Options: [
             "font-weight" ,
             "font-family" ,
             "font-style" ,
             "font-variant"
        ],
        correct : 1,
    },

    {
        questions : " How do you select an element with the id 'header' in CSS?" ,
        Options: [
             ".header" ,
             "#header" ,
             "header" ,
             "*header"
        ],
        correct : 1,
    },

    {
        questions : " Which property is used to control the spacing between elements in CSS?" ,
        Options: [
             "margin" ,
             "padding" ,
             "border-spacing" ,
             "space-between"
        ],
        correct : 0,
    },
]


const quizContainer = document.querySelector('.quiz-section');
const answerElm = document.querySelectorAll('input[name="answer"]');

const [OptionElm , option_1 , option_2 , option_3 , option_4] = 
    document.querySelectorAll("#question , .option_1 , .option_2 , .option_3 , .option_4 ");

const SubmitBtn = document.querySelector("#submit");

let CurrentQuiz = 0;
let Score = 0;

const loadquiz = () => {
    const { questions , Options } = quizData[CurrentQuiz];
    console.log(Options);

    OptionElm.innerText = `${CurrentQuiz + 1}: ${questions}`;

    Options.forEach((CurOption, index) => (window[`option_${index + 1}`].innerText = CurOption)
);
        
};
loadquiz();

const getSelectedOption = () => {

    const answerElement = Array.from(answerElm);
    return answerElement.findIndex((curElem) => curElem.checked);
}
  
const deselectedAnswers = () => {
    answerElm.forEach((curElem) => curElem.checked = false);
}
SubmitBtn.addEventListener('click', () => {
    const SelectedOption = getSelectedOption();
    console.log(SelectedOption);

    if (SelectedOption === quizData[CurrentQuiz].correct) {
        Score += 1;
    }

    CurrentQuiz++;

    if (CurrentQuiz < quizData.length){
        deselectedAnswers();
       loadquiz();
    } else {
        quizContainer.innerHTML = `
        <div class="result">
            <h2>Your Score: ${Score}/${quizData.length} Correct Answer(s)</h2>
            <p>Congratulations on completing the quiz! 🎉😍</p>
            <button class="reload-button" onclick="location.reload()">Play Again</button>
        </div>`;
    }
    }
);
  

