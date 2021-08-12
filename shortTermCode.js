/**
 * 
 *   This is full of short term and deprecated code. have fun.
 *   
 *   console.log()
const multi_slider_rating: function(config, CT) {
const option1 = config.data[CT].optionLeft;
const option2 = config.data[CT].optionRight;
const cand1 = config.data[CT].cand1;

return `<p class='magpie-view-question'>${config.data[CT].question}</p>
                <div class='magpie-view-answer-container'>
                    <p>${cand1}</p><span class='magpie-response-slider-option'>${option1}</span>
                    <input type='range' id='response' class='magpie-response-slider' min='0' max='100' value='50'/>
                    <span class='magpie-response-slider-option'>${option2}</span>
                </div>
                <button id="next" class='magpie-view-button magpie-nodisplay'>Next</button>`;
};// JavaScript source code
const shuffleArray = sprVignette_pronouns => {
    for (let i = sprVignette_pronouns.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = sprVignette_pronouns[i];
        sprVignette_pronouns[i] = sprVignette_pronouns[j];
        sprVignette_pronouns[j] = temp;
    }
}
sprVignette_pronouns = shuffleArray;
a = slider_rating_trials: [
    {
        question: "F&uumlr wie wahrscheinlich halten Sie es, dass der*die Spitzenkandidat*in der CDU/CSU nach der Bundestagwahl der*die neue Bundeskanzler*in wird?",
        optionLeft: 'Sehr unwahrscheinlich',
        optionRight: 'Sehr wahrscheinlich'
    },
    {
        question: "F&uumlr wie wahrscheinlich halten Sie es, dass der*die Spitzenkandidat*in der SPD nach der Bundestagwahl der*die neue Bundeskanzler*in wird?",
        optionLeft: 'Sehr unwahrscheinlich',
        optionRight: 'Sehr wahrscheinlich'
    },
    {
        question: "F&uumlr wie wahrscheinlich halten Sie es, dass der*die Spitzenkandidat*in der Gr&uumlnen nach der Bundestagwahl der*die neue Bundeskanzler*in wird?",
        optionLeft: 'Sehr unwahrscheinlich',
        optionRight: 'Sehr wahrscheinlich'
    },
    {
        question: "F&uumlr wie wahrscheinlich halten Sie es, dass der*die Spitzenkandidat*in der FDP nach der Bundestagwahl der*die neue Bundeskanzler*in wird?",
        optionLeft: 'Sehr unwahrscheinlich',
        optionRight: 'Sehr wahrscheinlich'
    },
    {
        question: "F&uumlr wie wahrscheinlich halten Sie es, dass der*die Spitzenkandidat*in der Linken nach der Bundestagwahl der*die neue Bundeskanzler*in wird?",
        optionLeft: 'Sehr unwahrscheinlich',
        optionRight: 'Sehr wahrscheinlich'
    },
    {
        question: "F&uumlr wie wahrscheinlich halten Sie es, dass der*die Spitzenkandidat*in der AfD nach der Bundestagwahl der*die neue Bundeskanzler*in wird?",
        optionLeft: 'Sehr unwahrscheinlich',
        optionRight: 'Sehr wahrscheinlich'
    }
];


QUD: "Nach der Bundestagswahl am 26. September entscheidet sich, wer f&uumlr die n&aumlchste Legislaturperiode das Kanzleramt &uumlbernimmt.",


answer_container_generator: function(config, CT) {
        return `<p class='magpie-view-question'>${config.data[CT].question} </p>
                    <div class='magpie-view-answer-container'>
                        <textarea name='textbox-input' rows=10 cols=500 class='magpie-response-text' />
                    </div>
                    <button id='next' class='magpie-view-button magpie-nodisplay'>Weiter</button>`;

*/