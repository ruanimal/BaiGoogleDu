/*
网址：https://github.com/ruanima/BaiGoogleDu
功能：谷歌百度一键搜索修改版
创建：2015.11.25
作者：ponder.work
反馈：190127701@qq.com
forked from: raywill/BaiGoogleDu
*/

var isOpen = true;

chrome.extension.sendRequest({action: "getIsOpen"}, function(response) {
    isOpen = response.isOpen ;
    //alert("Hi tehre");
    if( isOpen ){
        googleBaiduer();
    }
});

function insertAfter(newElement, targetElement) {
    var parentEl = targetElement.parentNode;
    if(parentEl.lastChild == targetElement) {
        parentEl.appendChild(newElement);
    } else {
        parentEl.insertBefore(newElement,targetElement.nextSibling);
    }
};

function googleBaiduer(){
    //日志输出
    //console.log('【Google Baidu搜索穿越】日志输出');
    // console.log('执行时刻：' + getTime() );
    // console.log('\n');
    //alert("Hi tehre");
    //var s = document.getElementsByClassName('d_sign_split');
    var s1 =  document.getElementsByName("btnK");
    //var s2 =  document.getElementsByName("q") ;
    var s2 = document.getElementById("_fZl");
    //var s2 = document.getElementById("tsf");

    var b1 =  document.getElementById("su");
    var result = document.getElementById('wrapper_wrapper');

    if (b1 && result.children.length > 0 ) {
        // Search Google in Baidu
        var BaiduBtn = document.createElement("input");
        BaiduBtn.type = "submit";
        BaiduBtn.value = "Google";
        BaiduBtn.className = "s_btn btn";
        BaiduBtn.style.marginLeft = "1px";
        BaiduBtn.onclick = function(){
            //alert("clicked");
            var keyword_input = document.getElementById("kw");
            //alert(keyword_input.value);
            setKeywordLog(keyword_input.value, "G");
            window.location.href="https://www.google.com.hk/search?q="+keyword_input.value;
            return false;
        };
        insertAfter(BaiduBtn, b1);

    } else if(s1 || s2) {
        var BaiduBtn = document.createElement("input");
        BaiduBtn.type = "submit";
        BaiduBtn.value = "Baidu Search";
        BaiduBtn.name = "btnK";
        BaiduBtn.onclick = function(){
            //alert("clicked");
            var keyword_input = document.getElementsByName("q");
            //alert(keyword_input[0].value);
            setKeywordLog(keyword_input[0].value, "B");
            window.location.href='http://www.baidu.com/s?wd=' + keyword_input[0].value;
            return false;
        };
        insertAfter(BaiduBtn, s1[0]);

        var BaiduBtn2 = document.createElement("input");
        BaiduBtn2.type = "submit";
        BaiduBtn2.value = "du";
        BaiduBtn2.className = "sbico-c";
        BaiduBtn2.style.float = 'right';
        BaiduBtn2.style.border = "none";
        BaiduBtn2.style.fontSize = '1.5em';
        BaiduBtn2.style.fontWeight = '500';
        BaiduBtn2.style.color = "#4487F7";
        BaiduBtn2.style.margin = "0 0 0 -14px";
        BaiduBtn2.style.padding = "0 0 1 0";
        BaiduBtn2.style.width = "44px";
        BaiduBtn2.style.height = "44px";
        BaiduBtn2.style.background = 'white';
        BaiduBtn2.style.cursor = 'pointer';
        BaiduBtn2.onclick = function(){
            //alert("clicked");
            var keyword_input = document.getElementsByName("q");
            //alert(keyword_input[0].value);
            setKeywordLog(keyword_input[0].value, "B");
            window.location.href='http://www.baidu.com/s?wd=' + keyword_input[0].value;
            return false;
        };
        s2.parentNode.insertBefore(BaiduBtn2, s2);
    }
}

function getTime(){
    var str = '',
        d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds();
    str = h + ':' + ( m < 10 ? '0' + m : m ) + ':' + ( s < 10 ? '0' + s : s );
    return str;
}


function setKeywordLog( kw, flag ){
    chrome.extension.sendRequest({action: "setKeywordLog", keyword: kw, flag: flag }, function(response) {
    });
};

function setKilledNum( n ){
    chrome.extension.sendRequest({action: "setKilledNum",killedNum: n+'' }, function(response) {
    });
};
