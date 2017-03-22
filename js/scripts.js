$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var adj1Input = $("input#adj1").val();
    var adj2Input = $("input#adj2").val();
    var adj3Input= $("input#adj3").val();
    var adv1Input = $("input#adv1").val();
    var noun1Input = $("input#noun1").val();
    var noun2Input = $("input#noun2").val();
    var noun3Input = $("input#noun3").val();
    var noun4Input = $("input#noun4").val();
    var plurNoun1Input = $("input#plurNoun1").val();
    var plurNoun2Input = $("input#plurNoun2").val();
    var silly1Input = $("input#silly1").val();
    var verb1Input = $("input#verb1").val();

    $(".adj1").text(adj1Input);
    $(".adj2").text(adj2Input);
    $(".adj3").text(adj3Input);
    $(".adv1").text(adv1Input);
    $(".noun1").text(noun1Input);
    $(".noun2").text(noun2Input);
    $(".noun3").text(noun3Input);
    $(".noun4").text(noun4Input);
    $(".plurNoun1").text(plurNoun1Input);
    $(".plurNoun2").text(plurNoun2Input);
    $(".silly1").text(silly1Input);
    $(".verb1").text(verb1Input);

    $("#story").show();

    event.preventDefault();
  });
});
