var username = "";

//获取路由链接参数
function getUrlParam(paramKey) {
    var reg = new RegExp("(^|&)" + paramKey + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
}

$(function() {

    $(document).on('click', '#wcc-img-s', function() {
        $(".page-current").append('<div id="wcc-bg" align="center" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.79);; z-index: 10600; visibility: visible; opacity: 1;">' +
                    '<img style="border-radius: 10px; margin-top: 30px; width: 95%;" src="qrcode-1.png"/*tpa=http://129.211.173.86/finance_proj/html/wcc/js/img/qrcode.png*/>' +
                    '<div>' +
                        '<img id="wcc-off" style="float:right; margin-top: -10px; margin-right: 3%; width: 32px; height: 32px;" src="off.png"/*tpa=http://129.211.173.86/finance_proj/html/wcc/js/img/off.png*/>' +
                        '<img style="float:right; margin-top: -4px; width: 22px; height: 22px;" src="big.png"/*tpa=http://129.211.173.86/finance_proj/html/wcc/js/img/big.png*/>' +
                    '</div>' +
                '</div>');
    });

    $(document).on('click', '#wcc-off', function() {
        $("#wcc-bg").remove();
    });

    var myDate = new Date;
    var year = myDate.getFullYear(); //获取当前年
    var mon = myDate.getMonth() + 1; //获取当前月
    var date = myDate.getDate();
    $("#start-time").text(year + "-" + mon + "-" + date + " 00:00:00");
    $("#end-time").text(year + "-" + mon + "-" + date + " 23:59:59");

    //获取路径的推荐码
    $(document).on('click', '#index-button', function() {
        username = $("#index-username").val();
        window.location.href = 'testTemp.html-username=.htm'/*tpa=http://129.211.173.86/finance_proj/html/wcc/testTemp.html?username=*/ + username;
        //window.location.href = 'file:///D:/360Downloads/wcc/testTemp.html?username=' + username;
    });
    var username1 = getUrlParam("username");
    if(username1 == "" || username1 == null){
        $("#username").text("吴凯乐");
    } else {
        $("#username").text(username1);
    }
    

    var oHeight = $(document).height(); //浏览器当前的高度
    $(window).resize(function(){
        if($(document).height() < oHeight){
            $("#index-nav").css("position","static");
        } else {
            $("#index-nav").css("position","absolute");
        }
    });

    //验证码倒计时点击事件
    $(document).on('click', '#btn-verifi', function() {
        if($("#register-phone").val() == "") {
            $.toast("手机号不能为空");
            return false;
        }
        btnVerifiDown();
    });

    //修改密码-验证码倒计时点击事件
    $(document).on('click', '#btn-mine-verifi', function() {
        btnVerifiDownMine();
    });

    // 验证码登录点击事件
    $(document).on('click', '#register-btn-android', function() {
        if($("#register-phone").val() == "") {
            $.toast("手机号不能为空");
            return false;
        }
        if($("#register-verifi").val() == "") {
            $.toast("验证码不能为空");
            return false;
        }
        register();
    });

    $(document).on('click', '#register-btn-ios', function() {
        if($("#register-phone").val() == "") {
            $.toast("手机号不能为空");
            return false;
        }
        if($("#register-verifi").val() == "") {
            $.toast("验证码不能为空");
            return false;
        }
        register2();
    });
});










