$(document).ready(function(){

    var $el = $(".HAUT-BSF label input[type='checkbox']");
    var $eli = $(".HAUT-BSF .BoxSelectFormation");
    var $LI = $(".HAUT-BSF label");
    var $block = $(".form-formation .DIV").map(function(){
        $(this).attr("id");
    });

    console.log($block);






    function formNumType(){




        if($block == "type-formation"){

            var clickedButton = $LI.unbind('click').click(function(event) {

                var clickedID = $(this).attr("id");

                var result1 = "#"+clickedID;
                console.log("FNT1 ->"+result1);

                var $abcd = $(".HAUT-BSF "+ result1 +" input[type='checkbox']");
                var $abc = $(".HAUT-BSF label"+result1);
                console.log("testeuh ->"+$abcd);


                $el.change(function(){

                    if($abcd.is(":checked")){


                        $abc.addClass("btn");

                    }
                    else{
                        $abc.removeClass("btn");
                    }
                });




            });

            return clickedButton;




        }

        else{


            var clickedButton = $LI.unbind('click').click(function(event) {
                var clickedID = $(this).attr("id");

                var result2 = "#"+clickedID;
                console.log("FNT2 ->"+result2);

                var $abcd = $(".HAUT-BSF "+ result2 +" input[type='checkbox']");
                var $abc = $(".HAUT-BSF label"+result2);


                $el.change(function(){

                    if($abcd.is(":checked")){


                        $abc.addClass("btn");

                    }
                    else{
                        $abc.removeClass("btn");
                    }
                });


            });

            return clickedButton;
        }

    };
    formNumType();
/*var $abcd = $(".HAUT-BSF "+ formNumType() +" input[type='checkbox']");

var $abc = $(".HAUT-BSF label"+formNumType());

$el.change(function(){

    if($abcd.is(":checked")){


        $abc.addClass("btn");

    }
    else{
        $abc.removeClass("btn");
    }
});*/

});