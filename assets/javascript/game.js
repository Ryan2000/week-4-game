/**
 * Created by ryanhoyda on 5/15/17.
 */


//Add click event listeners for our characters:
$(document).ready(function() {

    $("#pick_Luke").click(function () {
        //alert('Picked Luke SkyWalker');
        var html = $(this).html();

        $("#your_character")
            .empty() //Blow out the existing html in that div
            .append(html); //Add the html in this div to the your character div

        //We will update this later
        $(this).empty();
    });

    $("#pick_Obi").click(function () {
        //alert('Picked Obi-wan-kenobi');
        var html = $(this).html();

        $("#your_character")
            .empty() //Blow out the existing html in that div
            .append(html); //Add the html in this div to the your character div

        //We will update this later
        $(this).empty();
    });

    $("#pick_Maul").click(function () {
        //alert('Picked Darth Maul');
        var html = $(this).html();

        $("#your_character")
            .empty() //Blow out the existing html in that div
            .append(html); //Add the html in this div to the your character div

        //We will update this later
        $(this).empty();
    });

    $("#pick_Sidious").click(function () {
        //alert('Picked Darth Sidious');
        var html = $(this).html();

        $("#your_character")
            .empty() //Blow out the existing html in that div
            .append(html); //Add the html in this div to the your character div

        //We will update this later
        $(this).empty();
    });
});


