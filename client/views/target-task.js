var BLANK_DELAY = 1000;
var FOCUS_DELAY = 300;
var PRIME_DELAY = 150;
var MASK_DELAY = 150;

var practice_prime = ["zxcvbnm", "zxcvbnm", "zxcvbnm", "zxcvbnm",
                      "zxcvbnm", "zxcvbnm", "zxcvbnm", "zxcvbnm"];

var practice_target = ["sticks", "light", "entire", "extend",
                       "voif", "gisher", "wonnr", "yilker"];

var practice_correctResponse = ["/", "/", "/", "/", "z", "z", "z", "z"];

var prime = [ "burger",
              "burger",
              "burger",
              "cake",
              "cake",
              "cake",
              "chips",
              "chips",
              "chips",
              "chocolate",
              "chocolate",
              "chocolate",
              "steak",
              "steak",
              "steak",
              "burger",
              "burger",
              "burger",
              "cake",
              "cake",
              "cake",
              "chips",
              "chips",
              "chips",
              "chocolate",
              "chocolate",
              "chocolate",
              "steak",
              "steak",
              "steak",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",
              "zxcvbnm",];

var target = ["juicy",
              "hot",
              "grilled",
              "mousse",
              "butter",
              "frosting",
              "salty",
              "crispy",
              "crunchy",
              "rich",
              "smooth",
              "sweet",
              "tender",
              "sizzling",
              "juicy",
              "disk",
              "round",
              "brown",
              "layer",
              "slice",
              "platter",
              "yellow",
              "wavy",
              "bag",
              "brown",
              "dark",
              "tan",
              "brown",
              "cow",
              "knife",
              "juicy",
              "hot",
              "grilled",
              "mousse",
              "butter",
              "frosting",
              "salty",
              "crispy",
              "crunchy",
              "rich",
              "smooth",
              "sweet",
              "tender",
              "sizzling",
              "juicy",
              "disk",
              "round",
              "brown",
              "layer",
              "slice",
              "platter",
              "yellow",
              "wavy",
              "bag",
              "brown",
              "dark",
              "tan",
              "brown",
              "cow",
              "knife",
              "chair",
              "weather",
              "sky",
              "side",
              "top",
              "under",
              "wall",
              "wood",
              "plastic",
              "nail",
              "green",
              "quiet",
              "box",
              "trees",
              "degree",
              "finger",
              "face",
              "carpet",
              "light",
              "point",
              "occur",
              "neutral",
              "blank",
              "screen",
              "watch",
              "deer",
              "sign",
              "way",
              "paid",
              "tide",
              "ans",
              "baps",
              "biff",
              "ched",
              "chig",
              "chome",
              "dath",
              "dod",
              "dopser",
              "dut",
              "fabon",
              "fama",
              "filltam",
              "fom",
              "fum",
              "gan",
              "gog",
              "hettop",
              "heff",
              "jeg",
              "jop",
              "juff",
              "krong",
              "lemt",
              "lun",
              "mab",
              "mip",
              "mon",
              "marrt",
              "pude",
              "qengs",
              "quighter",
              "queb",
              "sannon",
              "shamton",
              "shegg",
              "shid",
              "shob",
              "sib",
              "thickl",
              "thon",
              "thub",
              "tib",
              "todderan",
              "vall",
              "vam",
              "wega",
              "whab",
              "wub",
              "yan",
              "yat",
              "yip",
              "zuge",
              "zum",
              "zup",
              "frent",
              "gulp",
              "phewe",
              "gix",
              "entupe"];

var correctResponse = ["/", "/", "/", "/", "/", "/", "/", "/", "/", "/",
                       "/", "/", "/", "/", "/", "/", "/", "/", "/", "/",
                       "/", "/", "/", "/", "/", "/", "/", "/", "/", "/",
                       "/", "/", "/", "/", "/", "/", "/", "/", "/", "/",
                       "/", "/", "/", "/", "/", "/", "/", "/", "/", "/",
                       "/", "/", "/", "/", "/", "/", "/", "/", "/", "/",
                       "/", "/", "/", "/", "/", "/", "/", "/", "/", "/",
                       "/", "/", "/", "/", "/", "/", "/", "/", "/", "/",
                       "/", "/", "/", "/", "/", "/", "/", "/", "/", "/",
                       "z", "z", "z", "z", "z", "z", "z", "z", "z", "z",
                       "z", "z", "z", "z", "z", "z", "z", "z", "z", "z",
                       "z", "z", "z", "z", "z", "z", "z", "z", "z", "z",
                       "z", "z", "z", "z", "z", "z", "z", "z", "z", "z",
                       "z", "z", "z", "z", "z", "z", "z", "z", "z", "z",
                       "z", "z", "z", "z", "z", "z", "z", "z", "z", "z"]; 

if (Meteor.isClient) {
  var _checkIfCorrect = function (keyPressed, correctResponse) {
    return correctResponse === keyPressed;
  }

  function displayTarget() {
    $(window).off('keyup');

    if (TRIALS.length > 0) {
      var trial = TRIALS.pop();

      $('.stimuli.target.active').removeClass('active').hide();
      $('.stimuli.target').text(trial.target);
      $('.stimuli.prime').text(trial.prime);

      // FOCUS
      setTimeout(function() {
        $('.stimuli.ready').addClass('active').show();

        // PRIME
        setTimeout(function() {
          $('.stimuli.ready.active').removeClass('active').hide();
          $('.stimuli.prime').addClass('active').show();

          // POST-PRIME MASK
          setTimeout(function() {
            $('.stimuli.prime.active').removeClass('active').hide();
            $('.stimuli.mask').addClass('active').show();
   
            // TARGET
            setTimeout(function() {
              $('.stimuli.mask.active').removeClass('active').hide();
              $('.stimuli.target').addClass('active').show();

              var timeStart = Date.now();
              // wait for the participant's response
              $(window).on("keyup", function (e) {
                if (e.keyCode === 90 || e.keyCode === 191) {
                  var timeDiff = Date.now() - timeStart;

                  // Store the user response into an array
                  var currentTargetTaskResults = Session.get("currentTargetTaskResults");

                  var keyPressed = e.keyCode === 90 ? "z" : "/";

                  var taskResponse = {
                    prime: trial.prime,
                    target: trial.target,
                    responseTime: timeDiff,
                    keyPressed: keyPressed,
                    isCorrect: _checkIfCorrect(keyPressed, trial.correctResponse)
                  }

                  console.log(taskResponse);

                  currentTargetTaskResults.push(taskResponse);
                  Session.set("currentTargetTaskResults", currentTargetTaskResults);

                  // recursively display the target
                  displayTarget(); 

                  // deregister the event listener
                  $(window).off("keyup");
                }
              });
            }, MASK_DELAY);

          }, PRIME_DELAY);

        }, FOCUS_DELAY);

      }, BLANK_DELAY);

    } else {
      Router.go('/debriefing');
      return;
    }
  };

  Template.TargetTask.created = function (e, template) {
    Session.set("numTrials", 0);
  };

  Template.TargetTask.destroyed = function (e, template) {
    // clearInterval(window.clock);
    $(window).off();
  };


  Template.TargetPrepareTask.rendered = function() {

    if (!Meteor.user()) {
      Meteor.call("createRandomUser", function (err, userId) {
        if (err) {
          console.log(err);
        } else {
          var user = Meteor.users.findOne(userId);
          Meteor.loginWithPassword(user.username, "1234", function (err) {
            if (err) {
              console.log(err)
            } else {
              console.log("logged in as:", Meteor.user().username);

              Helpers.updateResponse({
                userId: Meteor.userId(),
                username: Meteor.user().username
              });
            }
          });
        }
      });
    } else {
      Helpers.updateResponse({
        userId: Meteor.userId(),
        username: Meteor.user().username
      });
    }
      
    Session.set("currentTargetTaskResults", []);

    // Real trials
    var trials = [];
    for (var i = 0; i < target.length; i++) {
      var trialObj = {
        prime: prime[i],
        target: target[i],
        correctResponse: correctResponse[i]
      };
      trials.push(trialObj);
    }

    TRIALS = shuffle(trials);

    // Practice trials
    var practice_trials = [];
    for (var i = 0; i < practice_target.length; i++) {
      var trialObj = {
        prime: practice_prime[i],
        target: practice_target[i],
        correctResponse: practice_correctResponse[i]
      };
      practice_trials.push(trialObj);
    }

    practice_trials.reverse();
    TRIALS = TRIALS.concat(practice_trials);
    // Array.prototype.unshift.apply(TRIALS, practice_trials);
    // TRIALS.splice(3);

    // Finally, we are ready to listen to events
    $(window).keyup(function (e) {
      if (e.keyCode === 32) {
        $('.target-prepare-container').hide();
        displayTarget();
      }
    });
  };
}