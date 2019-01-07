    var goal = 0;
    var counter = 0;
	var wins = 0;
	var losses = 0;

    function generateRandIntRange(from, to) {
        var randint = from + Math.floor(Math.random() * ((to+1)-from));
        return randint;
    }

    function reset() {
        console.clear();
        $('#wins').text(wins);
        $('#losses').text(losses);
        counter = 0;  // total tally so far
        $('#counter').text(counter);
        console.log("counter", counter);
        //  var goal = 19 + Math.floor(Math.random()*102);
        goal = generateRandIntRange(19,120);  // number we want to hit exactly
		$("#target").text(goal);
        console.log("goal", goal);
        $(".crystal-image").each(function() {
            this.value = generateRandIntRange(1,12);
        });
    }

    function lose() {
		losses++;
        alert("You lose. :(");
        reset();
    }

    function win() {
		wins++;
        alert("You win! :)");
        reset();
    }

    $(window).on("load", function() {

        reset();
        $(".crystal-image").on("click", function() {
            counter += this.value;
            $('#counter').text(counter);
            if (counter > goal) {
                lose();
            } else if (counter == goal) {
                win();
            }
        });

    });
