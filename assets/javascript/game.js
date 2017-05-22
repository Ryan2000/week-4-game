/**
 * Created by ryanhoyda on 5/15/17.
 */


// //Add click event listeners for our characters:
// $(document).ready(function() {
//
//     $("#pick_Luke").click(function () {
//         //alert('Picked Luke SkyWalker');
//         var html = $(this).html();
//
//         $("#your_character")
//             .empty() //Blow out the existing html in that div
//             .append(html); //Add the html in this div to the your character div
//
//         //We will update this later
//         $(this).empty();
//     });
//
//     $("#pick_Obi").click(function () {
//         //alert('Picked Obi-wan-kenobi');
//         var html = $(this).html();
//
//         $("#your_character")
//             .empty() //Blow out the existing html in that div
//             .append(html); //Add the html in this div to the your character div
//
//         //We will update this later
//         $(this).empty();
//     });
//
//     $("#pick_Maul").click(function () {
//         //alert('Picked Darth Maul');
//         var html = $(this).html();
//
//         $("#your_character")
//             .empty() //Blow out the existing html in that div
//             .append(html); //Add the html in this div to the your character div
//
//         //We will update this later
//         $(this).empty();
//     });
//
//     $("#pick_Sidious").click(function () {
//         //alert('Picked Darth Sidious');
//         var html = $(this).html();
//
//         $("#your_character")
//             .empty() //Blow out the existing html in that div
//             .append(html); //Add the html in this div to the your character div
//
//         //We will update this later
//         $(this).empty();
//     });
// });


// function pick_character(selector){
//     var html = $(selector).html();
//     $(selector).empty();
//     $("#your_character").empty().append(html);
//
// }
//
// $(document).ready(function(){
//     $("#pick_Luke").click(function(){
//         pick_character($(this));
//
//         //Select obi-wan
//
//         //get his html and store in a variable - Store all of the html in lines 30-32 in index.html into this variable
//         var obi_html = $("#pick_Obi").html();
//         //empty obi-won - Delete all html on lines 30-32 in index.html
//         $("#pick_Obi").empty();
//         //append obi won to bad_guy_one
//         //Delete all html on line 69 in index.html. Then
//         //paste all of the html stored in obi_html onto that line in index.html
//         $("#bad_guy_one").empty().append(obi_html);
//         //select maul
//
//
//         //get his html and store in a variable
//         var maul_html = $("#pick_Maul").html();
//         //empty Maul
//         $("#pick_Maul").empty();
//         //append Maul won to bad_guy_two
//         $("#bad_guy_two").empty().append(maul_html);
//         //select sidious
//
//
//         //get his html and store in a variable
//         var sidious_html = $("#pick_Sidious").html();
//         //empty Sidious
//         $("#pick_Sidious").empty();
//         //append Sidious to bad guy three
//         $("#bad_guy_three").empty().append(sidious_html);
//     });
//
//
//     //would need to repeat same process for each character as for Luke
//     $("#pick_Obi").click(function(){
//         pick_character($(this));
//     });
//
//     $("#pick_Maul").click(function(){
//         pick_character($(this));
//     });
//
//     $("#pick_Sidious").click(function(){
//         pick_character($(this));
//     });
// });


function pick_character(selector){
    var html = $(selector).html();
    $(selector).empty();
    $('#your_character').empty().append(html);
}

function defend_character(charOne, charTwo, charThree){
    var charOneHtml = $(charOne).html();
    $(charOne).empty();

    $('#bad_guy_one').empty().append(charOneHtml);

    var charTwoHtml = $(charTwo).html();
    $(charTwo).empty();

    $('#bad_guy_two').empty().append(charTwoHtml);

    var charThreeHtml = $(charThree).html();
    $(charThree).empty();

    $('#bad_guy_three').empty().append(charThreeHtml);
}


//so user can select bad_guy to fight
function bad_guy_listeners(){
    //Select each bad_guy div and add a click listener to it
    //inside of the listener, do alert('Bad Guy X');
    $('#bad_guy_one').click(function() {
        alert("Bad Guy one");
    });

    $('#bad_guy_two').click(function() {
        alert("Bad Guy two");
    });

    $('#bad_guy_three').click(function() {
        alert("Bad Guy three");
    });

}

$(document).ready(function(){
    $("#pick_Luke").click(function(){
        pick_character($(this));
        defend_character($('#pick_Obi'), $('#pick_Maul'), $('#pick_Sidious'));
        //no longer need characters to pick from section
        $(this).parent().empty();
        bad_guy_listeners();
    });

    $("#pick_Obi").click(function(){
        pick_character($(this));
        //Add code to move other characters to Enemies section
        defend_character($('#pick_Luke'), $('#pick_Maul'), $('#pick_Sidious'));
        $(this).parent().empty();
        bad_guy_listeners();
    });

    $("#pick_Maul").click(function(){
        pick_character($(this));
        //Add code to move other characters to Enemies section
        defend_character($('#pick_Luke'), $('#pick_Obi'), $('#pick_Sidious'));
        $(this).parent().empty();
        bad_guy_listeners();
    });

    $("#pick_Sidious").click(function(){
        pick_character($(this));
        //Add code to move other characters to Enemies section
        defend_character($('#pick_Luke'), $('#pick_Maul'), $('#pick_Obi'));
        $(this).parent().empty();
        bad_guy_listeners();
    });
});