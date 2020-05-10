$(document).ready(function() {

    const primary_playfield = $("#playfield").html();

    move_cell = function (current_cell_index){
        const upper_cell_index = current_cell_index-10;
        const right_cell_index = current_cell_index+1;
        const lower_cell_index = current_cell_index+10;
        const left_cell_index = current_cell_index-1;
        const $current_img=$("#"+current_cell_index+">div>img");

        if ($("#"+upper_cell_index+">div").is(':empty')) {
            $("#"+upper_cell_index+">div").append( $current_img );
        };
        if ($("#"+right_cell_index+">div").is(':empty')) {
            $("#"+right_cell_index+">div").append( $current_img );
        };
        if ($("#"+lower_cell_index+">div").is(':empty')) {
            $("#"+lower_cell_index+">div").append( $current_img );
        };
        if ($("#"+left_cell_index+">div").is(':empty')) {
            $("#"+left_cell_index+">div").append( $current_img );
        };

        return  $("#playfield").html() == primary_playfield;
    };

    $("#start").click(function () {
        $("#playfield").html(primary_playfield);

        $(".cell").click(function(){
            const current_cell_index = Number($(this).attr("id"));
            if (move_cell(current_cell_index)) {
                $("#33>div").append("<img src=\"images/33.jpg\">");

                $("div.cell_div").removeClass("div_with_borders");
                $("img").removeClass("img_with_borders");
                $("div.cell_div").addClass("div_no_borders");
                $("img").addClass("img_no_borders");

                $(".cell").unbind('click');
            };
        });

        var current_cell_index = 33;
        const range =$("#mix_range").val();

        for (let i = 0; i < range; i++) {
            const random_direction = Math.floor(Math.random()*4);
            const upper_cell_index = current_cell_index-10;
            const right_cell_index = current_cell_index+1;
            const lower_cell_index = current_cell_index+10;
            const left_cell_index = current_cell_index-1;

            if ( random_direction === 0 ) {
                if ( current_cell_index >= 10 ) {
                    move_cell(upper_cell_index);
                    current_cell_index = upper_cell_index;
                }
            }
            if ( random_direction === 1) {
                if ( current_cell_index % 10 < 3) {
                    move_cell(right_cell_index);
                    current_cell_index = right_cell_index;
                }
            }
            if (random_direction===2) {
                if (current_cell_index < 30 ) {
                    move_cell(lower_cell_index);
                    current_cell_index = lower_cell_index;
                }
            }
            if (random_direction===3) {
                if (current_cell_index % 10 > 0) {
                    move_cell(left_cell_index);
                    current_cell_index = left_cell_index;
                }
            }
        }
    })
})