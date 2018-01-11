 document.addEventListener("DOMContentLoaded", function() {

  document.getElementById('test_input').addEventListener("submit", function(e){			//bedeutet (geh ins dokument nimm das Element(ID)welches test_input heist)
    e.preventDefault();					// bedeutet lad die seite nicht neu wie bei html sondern 
    console.log( checkUsername(e.target[0].value) );
    console.log( checkEmail(e.target[1].value) );
    console.log( checkPassword(e.target[2].value) );
    console.log( checkPassword(e.target[5].value) );
    //console.log(e);
    //console.log(this);    // das bedeutet das ALLES angezeigt wird

  });
});

