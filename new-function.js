var url = "http://129.211.173.86:8091/ssm-api/";

/*var url = "http://192.168.101.11:8080/ssm-api/";*/

//用户详情
var userDetail = "";

//用户名
var username = '';

// 验证码倒计时
function btnVerifiDown() {
    //获取验证码
    getVerifi();
    $(".btn-verifi").addClass("on");
    var time = 200;
    $(".btn-verifi").attr("disabled", true);
    var timer = setInterval(function() {
        if (time == 0) {
            clearInterval(timer);
            $(".btn-verifi").attr("disabled", false);
            $(".btn-verifi").val("获取验证码");
            $(".btn-verifi").removeClass("on");
        } else {
            $('.btn-verifi').val(time + "秒");
            time--;
        }
    }, 1000);
}
// 获取验证码
function getVerifi() {
    $.ajax({
        url: url + "/user/sms/single/send",
        //data: "para="+para,  此处data可以为 a=1&b=2类型的字符串 或 json数据。
        data: {
                "phone": $("#register-phone").val(),
                },
        type: "post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",//application/json
        async: false, // 同步
        success: function (response) { 
            console.log("获取验证码成功"); 
            console.log(response);  
        },
        error:function (XMLHttpRequest, textStatus, errorThrown) {   
            console.log("获取验证码失败");   
            $.toast("获取验证码失败");
        }
    });
}

// 验证码倒计时
function btnVerifiDownMine() {
    //获取验证码
    getVerifiMine();
    $(".btn-verifi").addClass("on");
    var time = 200;
    $(".btn-verifi").attr("disabled", true);
    var timer = setInterval(function() {
        if (time == 0) {
            clearInterval(timer);
            $(".btn-verifi").attr("disabled", false);
            $(".btn-verifi").val("获取验证码");
            $(".btn-verifi").removeClass("on");
        } else {
            $('.btn-verifi').val(time + "秒");
            time--;
        }
    }, 1000);
}
// 获取验证码
function getVerifiMine() {
    $.ajax({
        url: url + "/user/sms/single/send",
        //data: "para="+para,  此处data可以为 a=1&b=2类型的字符串 或 json数据。
        data: {
                "phone": userDetail.data.phonenum,
                },
        type: "post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",//application/json
        async: false, // 同步
        success: function (response) { 
            console.log("获取验证码成功"); 
            console.log(response);  
        },
        error:function (XMLHttpRequest, textStatus, errorThrown) {   
            console.log("获取验证码失败");   
            $.toast("获取验证码失败");
        }
    });
}

// 验证码登录
function register() {
    $.ajax({
        url: url + "/user/comm/save",
        //data: "para="+para,  此处data可以为 a=1&b=2类型的字符串 或 json数据。
        data: {
                "phonenum": $("#register-phone").val(),
                "params" : $("#register-verifi").val(),
                "recommended" : recommend,
                },
        type: "post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",//application/json
        async: false, // 同步
        success: function (response) { 
            if (response.status) {
                $.toast("正在跳转");   
                console.log(response);  
                //window.location = "http://129.211.173.86/finance_proj/APP/jcph-android.apk";
                //window.location = "https://sansejin.com.cn/ZZcp";
                //window.location = "http://rjrlzy.com/s/hoNH";
                //window.location = "https://rjrlzy.com/AmJE";
                window.location = "https://app.v9app.com/HFjH";
            } else {
                $.toast("验证码错误");
                console.log("验证码错误");   
                console.log(response);  
            }
        },
        error:function (XMLHttpRequest, textStatus, errorThrown) {      
            $.toast("获取下载失败");
            console.log("获取下载失败"); 
        }
    });
}

function register2() {
    $.ajax({
        url: url + "/user/comm/save",
        //data: "para="+para,  此处data可以为 a=1&b=2类型的字符串 或 json数据。
        data: {
                "phonenum": $("#register-phone").val(),
                "params" : $("#register-verifi").val(),
                "recommended" : recommend,
                },
        type: "post",
        dataType: "json",
        contentType: "application/x-www-form-urlencoded",//application/json
        async: false, // 同步
        success: function (response) { 
            if (response.status) {
                $.toast("正在跳转");   
                console.log(response);  
                //window.location = "http://129.211.173.86/finance_proj/APP/jcph-android.apk";
                //window.location = "https://sansejin.com.cn/ZZcp";
                //window.location = "http://rjrlzy.com/s/hoNH";
                //window.location = "https://rjrlzy.com/AmJE";
                window.location = "https://app.v9app.com/rxNm";
            } else {
                $.toast("验证码错误");
                console.log("验证码错误");   
                console.log(response);  
            }
        },
        error:function (XMLHttpRequest, textStatus, errorThrown) {      
            $.toast("获取下载失败");
            console.log("获取下载失败"); 
        }
    });
}



// 设置全局headers
function setHeaders(){
    $.ajaxSetup({ //发送请求前触发 auth error  error_unauth
        complete: function (xhr, textStatus) {
            if (textStatus == "parsererror") {
                $.router.load("http://129.211.173.86/finance_proj/html/wcc/js/login.html"); 
            } else if (textStatus == "error") {
                $.router.load("http://129.211.173.86/finance_proj/html/wcc/js/login.html"); 
            } else if (textStatus == "401") {
                $.router.load("http://129.211.173.86/finance_proj/html/wcc/js/login.html"); 
            }
        },
        beforeSend: function (xhr) { //可以设置自定义标头
            //console.log("accessToken:", accessToken);
            xhr.setRequestHeader('accessToken', accessToken);
        }
    });
}

//获取路由链接参数
function getUrlParam(paramKey) {
    var reg = new RegExp("(^|&)" + paramKey + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
}


