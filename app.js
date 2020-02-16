


//自分の手
$("#aaa").on("click", function (){
    // console.log("いべんと");
    $(".te_img").html('<img src="img/guu.jfif" alt="">');
});
$("#bbb").on("click", function (){
    // console.log("いべんと");
    $(".te_img").html('<img src="img/tyoki.jfif" alt="">');
});
$("#ccc").on("click", function (){
    // console.log("いべんと");
    $(".te_img").html('<img src="img/paa.jfif" alt="">');
});

// $(".box").on("click", function (){
//     $(".te_img").html('<img src="img/guu.jfif" alt="">');
// });


// $(".box").on("click", function tyoki(){
//     $(".te_img").html('<img src="img/tyoki.jfif" alt="">');
// });
// $(".box").on("click", function (){
//     $(".te_img").html('<img src="img/paa.jfif" alt="">');
// });



// // ポンアクション
$(".pon").on("click" , function guu(){
    var  randum = Math.floor(Math.random() *3);
    if (randum==0 ){
        $(".aite_img").html('<img src="img/guu.jfif" alt="">');
        $(".result").text("あいこ")
    }else if(randum==1){
        $(".aite_img").html('<img src="img/tyoki.jfif" alt="">');
        $(".result").text("勝ち")
    }else if(randum==2){
        $(".aite_img").html('<img src="img/paa.jfif" alt="">');
        $(".result").text("負け")
    }
});

$(".pon").on("click" , function tyoki(){
    var  randum = Math.floor(Math.random() *3);
    if (randum==0 ){
        $(".aite_img").html('<img src="img/guu.jfif" alt="">');
        $(".result").text("負け")
    }else if(randum==1){
        $(".aite_img").html('<img src="img/tyoki.jfif" alt="">');
        $(".result").text("あいこ")
    }else if(randum==2){
        $(".aite_img").html('<img src="img/paa.jfif" alt="">');
        $(".result").text("勝ち")
    }
});

$(".pon").on("click" , function paa(){
    var  randum = Math.floor(Math.random() *3);
    if (randum==0 ){
        $(".aite_img").html('<img src="img/guu.jfif" alt="">');
        $(".result").text("勝ち")
    }else if(randum==1){
        $(".aite_img").html('<img src="img/tyoki.jfif" alt="">');
        $(".result").text("負け")
    }else if(randum==2){
        $(".aite_img").html('<img src="img/paa.jfif" alt="">');
        $(".result").text("あいこ")
    }
});


// function guu(){
//     console.log("guu()がよびだされた");
// }