

var input = [];
var expression = [];
var ready = false;

$("document").ready(function() {

      $('a').click(function() {

          if (this.id == "aclear") {
            expression = []; //reset equation

            $('#value').text(''); //clear display
          } else if (this.id == "clear") {
            input = []; //reset input
            $('#value').text(''); //clear display
          } else if (/([0-9]|\.)/.test(this.id)) { //test if number or '.'
            if (ready) {
              ready = false;
              $('#value').text(''); //clear display
            }
            if (input.length < 16) {
              input.push(this.id);
              $('#value').append(this.id);
            }
          } else if (this.id == "=") { // Compute result
            expression.push(input.join('')); //add last input to equation
              result = eval(expression.join(''));
              $('#value').text(result); input = []; expression = []; ready = true;
            } else { // a operatot have been entered /,x,-,+,%
              expression.push(input.join('')); //store input value as string in equation array
              expression.push(this.id); // store operator
              input = []; // reset input
              $('#value').text(''); //clear display make ready for new input
            }

          });

      });
