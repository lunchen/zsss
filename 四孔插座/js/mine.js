$(window).load(function(){
    $(".loading").fadeOut();
    $('#picker-date-container').hide();
});

/*导航条的点击事件*/
var myApp = new Framework7();
var $$ = Dom7;
$$('.rightBtn').on('click', function () {
    var buttons = [
        {
            text: '更多',
            label: true
        },
        {
            text: '意见反馈',
            onClick:function(){
                alert('第一个');
            }
        },
        {
            text: '移除设备',
            onClick:function(){
                alert('第二个');
            }
        },
        {
          text:'联系我们',
            onClick:function(){
                alert('第三个');
            }
        },
        {
            text: 'Cancel',
            color: 'red'
        },
    ];
    myApp.actions(buttons);
});

/*总开关*/
$(document).ready(function(){

    var isAllOpenOrAllOff = false;
    var firstOpenOrAllOff = false;
    var secondOpenOrAllOff = false;
    var thirtOpenOrAllOff = false;
    var forthOpenOrAllOff = false;


    var changeBtnState = {


        isAllOpen:function(){
            if (firstOpenOrAllOff == true && secondOpenOrAllOff == true && thirtOpenOrAllOff == true && forthOpenOrAllOff== true) {
                $('.master-switch').attr('src' , 'images/kaiGuan2.png');
                $('.openbtn-bg').css('background' , 'white');

                firstOpenOrAllOff = true;
                secondOpenOrAllOff = true;
                thirtOpenOrAllOff = true;
                forthOpenOrAllOff = true;
            } else {
                $('.master-switch').attr('src' , 'images/kaiGuan1.png');
                $('.openbtn-bg').css('background' , '#3c7392');
            }
        },
        allAtcion:function(){
            if (isAllOpenOrAllOff == false) {
                $('.master-switch').attr('src' , 'images/kaiGuan2.png');
                $('.openbtn-bg').css('background' , 'white');
                $('.openImg').attr('src' , 'images/chaKong2.png');
                $('.img-border').attr('src' , 'images/kaiGuan2.png');
                $('.img-border').css('background' , 'white');

                firstOpenOrAllOff = true;
                secondOpenOrAllOff = true;
                thirtOpenOrAllOff = true;
                forthOpenOrAllOff = true;
                isAllOpenOrAllOff = true;
            } else if (isAllOpenOrAllOff == true){
                $('.master-switch').attr('src' , 'images/kaiGuan1.png');
                $('.openbtn-bg').css('background' , '#3c7392');
                $('.openImg').attr('src' , 'images/chaKong.png');
                $('.img-border').attr('src' , 'images/kaiGuan1.png');
                $('.img-border').css('background' , '#3c7392');

                firstOpenOrAllOff = false;
                secondOpenOrAllOff = false;
                thirtOpenOrAllOff = false;
                forthOpenOrAllOff = false;
                isAllOpenOrAllOff = false;
            }
        },
        firstAtcion:function(){
            if (firstOpenOrAllOff == false) {
                $('.firstkaiGuanimg').css('background' , 'white')
                                    .attr('src' , 'images/kaiGuan2.png');
                $('.firstChaKongImg').attr('src' , 'images/chaKong2.png');

                firstOpenOrAllOff = true;
            } else if (firstOpenOrAllOff = true) {
                $('.firstkaiGuanimg').css('background' , '#3c7392')
                    .attr('src' , 'images/kaiGuan1.png');
                $('.firstChaKongImg').attr('src' , 'images/chaKong.png');
                firstOpenOrAllOff = false;
                isAllOpenOrAllOff = false;
            }
        } ,
        secondAtcion:function(){
            if (secondOpenOrAllOff == false) {
                $('.secondkaiGuanimg').css('background' , 'white')
                    .attr('src' , 'images/kaiGuan2.png');
                $('.secondChaKongImg').attr('src' , 'images/chaKong2.png');

                secondOpenOrAllOff = true;
            } else if (secondOpenOrAllOff = true) {
                $('.secondkaiGuanimg').css('background' , '#3c7392')
                    .attr('src' , 'images/kaiGuan1.png');
                $('.secondChaKongImg').attr('src' , 'images/chaKong.png');
                secondOpenOrAllOff = false;
                isAllOpenOrAllOff = false;
            }
        } ,
        thirtAtcion:function(){
            if (thirtOpenOrAllOff == false) {
                $('.thirtkaiGuanimg').css('background' , 'white')
                    .attr('src' , 'images/kaiGuan2.png');
                $('.thirtChaKongImg').attr('src' , 'images/chaKong2.png');

                thirtOpenOrAllOff = true;
            } else if (thirtOpenOrAllOff = true) {
                $('.thirtkaiGuanimg').css('background' , '#3c7392')
                    .attr('src' , 'images/kaiGuan1.png');
                $('.thirtChaKongImg').attr('src' , 'images/chaKong.png');
                thirtOpenOrAllOff = false;
                isAllOpenOrAllOff = false;
            }
        } ,
        forthAtcion:function(){
            if (forthOpenOrAllOff == false) {
                $('.forthkaiGuanimg').css('background' , 'white')
                    .attr('src' , 'images/kaiGuan2.png');
                $('.forthChaKongImg').attr('src' , 'images/chaKong2.png');

                forthOpenOrAllOff = true;
            } else if (firstOpenOrAllOff = true) {
                $('.forthkaiGuanimg').css('background' , '#3c7392')
                    .attr('src' , 'images/kaiGuan1.png');
                $('.forthChaKongImg').attr('src' , 'images/chaKong.png');
                forthOpenOrAllOff = false;
                isAllOpenOrAllOff = false;
            }

        },


    };

    $('.openbtn').click(function(){
            changeBtnState.allAtcion();
            changeBtnState.isAllOpen();
    });

    $('.firstkaiGuanimg').click(function(){
        changeBtnState.firstAtcion();
        changeBtnState.isAllOpen();
    });
    $('.firstChaKongImg').click(function(){
        changeBtnState.firstAtcion();
        changeBtnState.isAllOpen();
    });
    $('.secondkaiGuanimg').click(function(){
        changeBtnState.secondAtcion();
        changeBtnState.isAllOpen();
    });
    $('.secondChaKongImg').click(function(){
        changeBtnState.secondAtcion();
        changeBtnState.isAllOpen();
    });
    $('.thirtkaiGuanimg').click(function(){
        changeBtnState.thirtAtcion();
        changeBtnState.isAllOpen();
    });
    $('.thirtChaKongImg').click(function(){
        changeBtnState.thirtAtcion();
        changeBtnState.isAllOpen();
    });
    $('.forthkaiGuanimg').click(function(){
        changeBtnState.forthAtcion();
        changeBtnState.isAllOpen();
    });
    $('.forthChaKongImg').click(function(){
        changeBtnState.forthAtcion();
        changeBtnState.isAllOpen();
    });

    $('.leftBtn').click(function(){
        alert('返回');
    })
});

