// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/

// Every experiment should start with an intro view. Here you can welcome your participants and tell them what the experiment is about
const intro = magpieViews.view_generator("intro", {
    trials: 1,
    name: 'intro',
    title : 'Willkommen zu einem Experiemnt zur Bundestagwahl 2021',
    // If you use JavaScripts Template String `I am a Template String`, you can use HTML <></> and javascript ${} inside
    text: `Vielen Dank, dass Sie sich entschieden haben an meinem Experiment teilzunehmen. Diese Experiment wird im Rahmen meiner Bachelorarbeit durch gef&uumlhrt. Diese Experiment setzt sich mit der Wahrnehmung der Bev&oumllkerung, zu der anstehenden Bundestagswahl am 26. September 2021, auseinander. Dieses Experiment ist mehrteilig, vor jeder neuen Aufgabe erhalten Sie detailierte Angaben.
</br>
</br>
Daten die w&aumlhrend dies Experiment gesammelt werde, werden auschließlich zu wissenschaftlichen Zwecken und in anonymisierter Form gespeichert, verarbeitet, geteilt und ver&oumlffentlicht. Zu keinem Zeitpunkt werden Sie w&aumlhrend des Experimentes dazu aufgefordert pers&oumlnliche Daten zu teilen, und in den Datensatz dieses Experiments abzuschicken. Ich bitte Sie bei Aufgaben mit Freitextantwortm&oumlglickeit darauf zu achten keine pers&oumlnlichen Daten zu teilen. Es kann nicht gew&aumlhreleistet werden, dass es m&oumlglich ist Ihre Daten zu l&oumlschen, nachdem Sie das Experiment beendet haben und die Daten abgeschickt sind. In dem auf das Feld "Mit dem Experiment beginnen" klicken, erkl&aumlren sich mit dem oben genannten einverstanden.`,
    buttonText: 'Mit dem Experiment beginnen'
});

// For most tasks, you need instructions views
const instructionsTC = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'instructionsTC',
  title: 'Schreibaufgabe',
    text: `In der ersten Aufgabe geht es darum, S&aumltze die begonnen wurden fortzusetzen. Es folgen vier Wiederholungen dieser Aufgabe. Dabei wird es jeweils eine nicht variable Einf&uumlhrung geben, gefolgt von jeweils vier unterschiedlichen nicht beendeten S&aumltzen. Ihre Aufgabe ist es diese S&aumltze kurz fortzuf&uumlhren auf eine Art das der produzierte Text so als Teil eines Medienbericht zu der anstehenden Bundestagswahl ver&oumlffentlich werden k&oumlnnte.`,
    buttonText: 'Weiter'
});
const instructionsSPR = magpieViews.view_generator("instructions", {
    trials: 1,
    name: 'instructionsSPR',
    title: 'Leseaufgabe',
    // text: "Im folgenden werden Sie neun kurze Texte zu der anstehenden Bundestagwahl sehen.Ihre Aufgabe ist es die Texte aufmerksam zu Lesen und die danach folgende Frage zu beantworten.Die Text sind zu n&aumlchste verdeckt und sie k&oumlnnen individuell, durch das Dr&uumlcken der Leertaste, die W&oumlrter erscheinen lassen.",
    text: `Die in der folgenden Aufgabe werden sie jeweils einen Einf&uumlhrungssatz sehen und darunter sich &aumlndernde Weiterf&uumlhrungen des Einf&uumlhrungssatzes. Der weiterf&uumlhrende Satz ist verdeckt und durch das dr&uumlcken der Leertaste auf Ihrer Tastatur k&oumlnnen Sie das n&aumlchste Wort sichtbar machen, dabei verschwindet das jeweilig voherige Wort. Wir m&oumlchten Sie bitten S&aumltze so schnell und genau wie m&oumlglich zu lesen. Die Aufgabe besteht aus neun Runden bitte nehmen Sie sich nach jeder Runde so viel Zeit, wie Sie brauchen um die n&aumlchste Runde schnell und konzentriert zubearbeiten. Es wird nach jeder Leserunde eine Verst&aumlndissfrage zu dem vorhergehenden Inhalt geben die sie bitte m&oumlglichst richtig mit "Wahr", so stand es im Text, oder "Falsch", diese Information kam im Text nicht vor.`,
    buttonText: 'Weiter'
});
const instructionsBE = magpieViews.view_generator("instructions", {
    trials: 1,
    name: 'instructionsBE',
    title: 'Belief estimation instructions',
    text: `In der folgenden Aufgabe sollen sie f&uumlr drei Personen, die &oumlffentlich f&uumlr ihre Kanzlerschaftskandidatur werben, angeben, wie Sie f&uumlr jede der Personen die Wahrscheinlichkeit einsch&aumltzen, das sie tats&aumlchlich die Kanzlerschaft &uumlbernimmt. Dabei ist es wichtig zu beachten, dass es nicht darum geht wen sie am f&aumlhigsten halten oder am liebsten in diesem Amt h&aumltten, sondern alleine wer es tats&aumlchlich wird.

Um diese Einsch&aumltzung vorzunehmen werden sie unter jedem der Namen jeweils einen Schieber sehen, wobei die linke Seite f&uumlr "nicht wahrscheinlich" steht und die rechte Seite f&uumlr sehr wahrscheinlich.

`,
    buttonText: 'Weiter'
});


// In the post test questionnaire you can ask your participants addtional questions
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.',

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  buttonText: 'Weiter',
  age_question: 'Alter',
  gender_question: 'Geschlecht',
  gender_male: 'm&aumlnnlich',
  gender_female: 'weiblich',
  gender_other: 'divers',
  edu_question: 'H&oumlchster Bildungsabschluss',
  edu_graduated_high_school: 'Abitur',
  edu_graduated_college: 'Hochschulabschluss',
  edu_higher_degree: 'Universit&aumlrer Abschluss',
  languages_question: 'Muttersprache',
  languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  comments_question: 'Weitere Kommentare'
});

// The 'thanks' view is crucial; never delete it; it submits the results!
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Vielen Dank f&uumlr die Teilnahme an diesem Experiment',
  prolificConfirmText: 'Bitte den Knopf drücken'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/

/**
// Here, we initialize a normal forced_choice view
const forced_choice_2A = magpieViews.view_generator("forced_choice", {
  // This will use all trials specified in `data`, you can user a smaller value (for testing), but not a larger value
  trials: trial_info.forced_choice.length,
  // name should be identical to the variable name
  name: 'forced_choice_2A',
  data: trial_info.forced_choice,
  // you can add custom functions at different stages through a view's life cycle
  // hook: {
  //     after_response_enabled: check_response
  // }
});
*/


const self_paced = magpieViews.view_generator("self_paced_reading", {
    trials: trial_info.spr_trials.length,
    name: 'self_paced',
    data: trial_info.spr_trials
});

// this is a custom implementation of the slider view which enables multible slider on one screen
const multi_slider_rating = magpieViews.view_generator("slider_rating", {
    trials: trial_info.multi_slider_rating_trials.length,
    name: 'multi_slider_rating',
    data: trial_info.multi_slider_rating_trials
},
    {
        answer_container_generator: function (config, CT) {
            return `<div class='magpie-view-answer-container magpie-response-multi-dropdown'>
       
          <div class= 'response-table'>
            <p class='magpie-view-question'> ${config.data[CT].question} </p >
                <div class='magpie-view-answer-container'>
                    <p>${config.data[CT].cand1}</p><span class='magpie-response-slider-option'>${config.data[CT].optionLeft}</span>
                    <input type='range' id='response1' class='magpie-response-slider' min='0' max='100' value1='50'/>
                    <span class='magpie-response-slider-option'>${config.data[CT].optionRight}</span>
                </div>
          </div>
          
                <div class='magpie-view-answer-container'>
                    <p>${config.data[CT].cand2}</p> <span class='magpie-response-slider-option'>${config.data[CT].optionLeft}</span>
                    <input type='range' id='response2' class='magpie-response-slider' min='0' max='100' value2='50'/>
                    <span class='magpie-response-slider-option'>${config.data[CT].optionRight}</span>
                </div>
                <div class='magpie-view-answer-container'>
                    <p>${config.data[CT].cand3}</p> <span class='magpie-response-slider-option'>${config.data[CT].optionLeft}</span>
                    <input type='range' id='response3' class='magpie-response-slider' min='0' max='100' value3='50'/>
                    <span class='magpie-response-slider-option'>${config.data[CT].optionRight}</span>
                </div>
                <button id="next" class='magpie-view-button magpie-nodisplay'>Weiter</button>
                <button id="fertig" class='magpie-view-button'>Fertig</button>
          </div>`;
        },
        handle_response_function: function (config, CT, magpie, answer_container_generator, startingTime) {
            
            
            $(".magpie-view").append(answer_container_generator(config, CT));
            let response_list = new Array(trial_info.multi_slider_rating_trials.length);
            let next_change = [0,0,0];
            response1 = $("#response1");
            response2 = $("#response2");
            response3 = $("#response3");
            // checks if the slider has been changed
            response1.on("change", function () {
                
                response_list[0] = (response1.val());
                next_change[0] = 1;
            });
            response2.on("change", function () {
                
                response_list[1] = (response2.val());
                next_change[1] = 1;
            });
            response3.on("change", function () {

                response_list[2] = (response3.val());
                next_change[2] = 1;
            });
            
            response1.on("click", function () {
          
                response_list[0] = (response1.val());
                next_change[0] = 1;
            });
            response2.on("click", function () {
                
                response_list[1] = (response2.val());
                next_change[1] = 1;
            });
            response3.on("click", function () {

                response_list[2] = (response3.val());
                next_change[2] = 1;
            });
           
            const respList = [0, 0, 0];
            
            
            $("#fertig").on("click", function () {
                // keeps the order of the results always the same alphabetically after surname Baerbock, Laschet, Scholz
                for (let i = 0; i < respList.length; i++) {
                    respList[beCand[i][1]] = response_list[i];
                    //console.log(respList)
                }
                let sum = 0;

                for (let i = 0; i < next_change.length; i++) {
                    sum += next_change[i];
                    // console.log(sum)
                }
                if (sum == next_change.length) {
                    $("#fertig").addClass("magpie-nodisplay");
                    $("#next").removeClass("magpie-nodisplay");
                }
                
            });


            $("#next").on("click", function () {
                const RT = Date.now() - startingTime; // measure RT before anything else
                let trial_data = {
                    trial_name: config.name,
                    trial_number: CT + 1,
                    response: respList,
                    RT: RT
                };

                trial_data = magpieUtils.view.save_config_trial_data(config.data[CT], trial_data);

                magpie.trial_data.push(trial_data);
                magpie.findNextView();
            });
        }
    }
);

const textbox = magpieViews.view_generator("textbox_input", {
    trials: trial_info.textbox_trials.length,
    name: 'textbox',
    data: trial_info.textbox_trials,
    buttonText: 'Weiter'
    
    
});
// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
