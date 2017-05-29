/*
 * 自己的JS脚步
 * @Author: iceStone
 * @Date:   2015-12-12 10:59:26
 * @Last Modified by:   fw
 * @Last Modified time: 2017-05-08 16:48:16
 */

'use strict';

window.onload=function(){

        /*nav导航栏*/
    function fun(obj,a) {
        var header=document.getElementById("header");
        var tegle = document.getElementById(obj);
        var box = document.getElementById(a);
        var spns = tegle.getElementsByTagName("span");
        var lis = box.getElementsByTagName("div");
        for ( var i = 0; i < spns.length; i++) {
            spns[i].index = i;
            spns[i].onmouseover = function () {
                for (i = 0; i < spns.length; i++) {
                    spns[i].className = "";
                    lis[i].className = "";
                };
                this.className = "bom";
                lis[this.index].className = "dis-black";
            };
            lis[i].onmouseover = function () {
                for (i = 0; i < lis.length; i++) {
                    lis[i].className = "";
                };
                this.className = "dis-black";
            }
            header.onmouseout = function () {
                for (i = 0; i < lis.length; i++) {
                    lis[i].className = "";
                    spns[i].className = "";
                }
            }
        }
    }
    fun("nav","boox");
    /*轮播*/
};