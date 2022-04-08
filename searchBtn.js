

$(function () {
    $("#searchBtn").click(function () {
        var sn=$.trim($("#search-name").val());
        // alert(sn);
        if(sn=="") {
            alert("名字不能为空");
            return;
        }
        else if(sn=="李朵朵")
            window.location.href="/hxy/liduoduo.html";
        else
            alert("抱歉，没有找到你的名字，请踢hxy让他快点写");
        // window.location("songci.html");
    });
});
