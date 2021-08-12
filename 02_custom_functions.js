// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // You can determine global (random) parameters here
// Declare your variables here



/* Helper functions
*
*
/


/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};
// Declare your helper functions here


/** This function initilializes the stimuli for the self-paced reading task,
the sentences and the conditions are shuffled and the combined xxBig/xxSmall stands for the corresponding starting Letter of the stimulus part
*/
const sprVignette = [
    'Nach | der | Bundestagswahl | am | 26. | September | entscheidet | sich, | wer | f&uumlr | die | n&aumlchste | Legislaturperiode | das | Kanzleramt | &uumlbernimmt. | chancellorBig | wird | nach | den | Koalitionsverhandlung | in | einer | geheimen | Wahl | gew&aumlhlt, | &uumlblicherweise | ist | pronounSmall | ein | Mitglied | der | Partei | mit | den | meisten | Stimmen.',
    'Nach | der | Bundestagswahl | am | 26. | September | entscheidet | sich, | wer | f&uumlr | die | n&aumlchste | Legislaturperiode | das | Kanzleramt | &uumlbernimmt. | chancellorBig | leitet | Regierung | der | Bundesrepublik | Deutschland. | pronounBig | bestimmt | die | Richtlinien | der | Politik.',
    'Nach | der | Bundestagswahl | am | 26. | September | entscheidet | sich, | wer | f&uumlr | die | n&aumlchste | Legislaturperiode | das | Kanzleramt | &uumlbernimmt. | chancellorBig | regiert | f&uumlr | eine | Legislaturperiode | &uumlber | vier | Jahre, | vorher | kann | pronounSmall | nur | durch | ein | Misstrauensvotum | abgel&oumlst | werden.',
    'Nach | der | Bundestagswahl | am | 26. | September | entscheidet | sich, | wer | f&uumlr | die | n&aumlchste | Legislaturperiode | das | Kanzleramt | &uumlbernimmt. | chancellorBig | &uumlbernimmt | als | ersten | Amtsitz | das | Bundeskanzleramt | in | Berlin. | pronounBig | kann | au&szligerdem | auf | den | zweiten | Amtssitz | in | Bonn | zur&uumlckgreifen',
    'Nach | der | Bundestagswahl | am | 26. | September | entscheidet | sich, | wer | f&uumlr | die | n&aumlchste | Legislaturperiode | das | Kanzleramt | &uumlbernimmt. | Nach | der | Wahl | legt | chancellorSmall | vor | dem | Bundestag | einen | Eid | ab, | dabei | ist | es | nicht | verpflichtend, | dass | pronounSmall | mit | den | Worten | "So | wahr | mir | Gott | helfe." | endet.',
    'Nach | der | Bundestagswahl | am | 26. | September | entscheidet | sich, | wer | f&uumlr | die | n&aumlchste | Legislaturperiode | das | Kanzleramt | &uumlbernimmt. | chancellorBig | leitet | die | Gesch&aumlfte | der | Bundesregierung | nach | einer | vom | Bundeskabinett | festgelegten | Gesch&aumlftsordnung, | au&szligerdem | tr&aumlgt | pronounSmall | die | Regierungsverantwortung | gegen&uumlber | dem | Bundestag.',
    'Nach | der | Bundestagswahl | am | 26. | September | entscheidet | sich, | wer | f&uumlr | die | n&aumlchste | Legislaturperiode | das | Kanzleramt | &uumlbernimmt. | Innerhalb | der | Regierungszeit | orientiert | sich | chancellorSmall | an | den | Vereinbarungen | der | Koalitionsvetr&aumlge, | anderfalls | k&oumlnnte | pronounSmall | die | Unterst&uumltzung | durch | die | Koalitionsparteien | verlieren.',
    'Nach | der | Bundestagswahl | am | 26. | September | entscheidet | sich, | wer | f&uumlr | die | n&aumlchste | Legislaturperiode | das | Kanzleramt | &uumlbernimmt. | Nachdem | chancellorSmall | ernannt | wurde, | wird | pronounSmall | im | Bundestag | vereidigt.',
    'Nach | der | Bundestagswahl | am | 26. | September | entscheidet | sich, | wer | f&uumlr | die | n&aumlchste | Legislaturperiode | das | Kanzleramt | &uumlbernimmt. | Nachdem | chancellorSmall | gew&aumlhlt | wurde, | hat | pronounSmall | vier | Jahre | Zeit | die | Versprechen | aus | dem | Wahlkampf | einzul&oumlsen.'
];

// these are controll questions asked after each SPR trial
const sprQuestions = [
    'Die Koalitionsverhandlungen finden vor der geheimen Wahl statt.',
    'Die Richtlinien der Politik werden durch den Bundesrat bestimmt.',
    'Eine Legislaturperiode nur nach einem Misstrauensvotum.',
    'Der zweite Amtssitz befindet sich in Bonn.',
    'Der Amtseids endet notwendigerweise mit einer Berufung auf Gott.',
    'Das Bundeskabinett legt die Gesch&aumlftsordnung fest.',
    'Eine Orientierung f&uumlr die Regierungszeit bilden die Koalitionsvertr&aumlge',
    'Die Vereidigung findet im Bundestag statt',
    'Der Bundestag tagt alle vier Jahre.'
];

// the controll questio nare matched to the fitting vignette
const sprVQ = [
    [sprVignette[0], sprQuestions[0]],
    [sprVignette[1], sprQuestions[1]],
    [sprVignette[2], sprQuestions[2]],
    [sprVignette[3], sprQuestions[3]],
    [sprVignette[4], sprQuestions[4]],
    [sprVignette[5], sprQuestions[5]],
    [sprVignette[6], sprQuestions[6]],
    [sprVignette[7], sprQuestions[7]],
    [sprVignette[8], sprQuestions[8]]
];


// All variants of the stimulus, plus versions with small and big first letter for integration in the sentence
const sprPrimes = [
    ["Der | Bundeskanzler", "der | Bundeskanzler", "er", "Er"],
    ["Der | Bundeskanzler", "der | Bundeskanzler", "sie", "Sie"],
    ["Der | Bundeskanzler", "der | Bundeskanzler", "er*sie", "Er*sie"],
    ["Die | Bundeskanlerin", "die | Bundeskanzlerin", "er", "Er"],
    ["Die | Bundeskanlerin", "die | Bundeskanzlerin", "sie", "Sie"],
    ["Die | Bundeskanlerin", "die | Bundeskanzlerin", "er*sie", "Er*sie"],
    ["Der*die | Bundeskanzler*in", "der*die | Bundeskanzler*in", "er", "Er"],
    ["Der*die | Bundeskanzler*in", "der*die | Bundeskanzler*in", "sie", "Sie"],
    ["Der*die | Bundeskanzler*in", "der*die | Bundeskanzler*in", "er*sie", "Er*sie"]
];

// true random shuffle found on numerous sides on the internet
function fisherYatesShuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]]; 
    }
};

// the VignetteQuestion pairs and the stimuli geht shuffled
fisherYatesShuffle(sprVQ);
fisherYatesShuffle(sprPrimes);

// the VignetteQuestion pairs get completed with the substituting the standin for true stimuli
const sprComplete = []
for (var i = 0; i <= sprVQ.length - 1; i++) {
    sprComplete.push([sprVQ[i][0].replace("chancellorBig", sprPrimes[i][0]).replace("chancellorSmall", sprPrimes[i][1]).replace("pronounSmall", sprPrimes[i][2]).replace("pronounBig", sprPrimes[i][3]),sprVQ[i][1]]);
    
}

// here will be a function which shuffles the order of candidates ask in the multi slider rating (belief estimation)
const beCand = [['Annalena Baerbock',0],['Armin Laschet',1], ['Olaf Scholz',2]]

fisherYatesShuffle(beCand);






/* Hooks  
*
*
*/

// Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};

// compares the chosen answer to the value of `option1`
check_response = function(data, next) {
    $('input[name=answer]').on('change', function(e) {
        if (e.target.value === data.correct) {
            alert('Your answer is correct! Yey!');
        } else {
            alert('Sorry, this answer is incorrect :( The correct answer was ' + data.correct);
        }
        next();
    })
}

// Declare your hooks here


/* Generators for custom view templates, answer container elements and enable response functions
*
*
*/
