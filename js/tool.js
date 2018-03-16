/* 
* @Author: mrzou
* @Date:   2017-03-06 14:12:38
*/
;(function($){
    $.extend($,{
        urlConFig:{
            ipAddress:'http://tipsoft.3322.org:5483/'
        },
        validateIdCard: function (idCard){
            //15位和18位身份证号码的正则表达式
            var regIdCard=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;

            //如果通过该验证，说明身份证格式正确，但准确性还需计算
            if(regIdCard.test(idCard)){
                if(idCard.length==18){
                    var idCardWi=new Array( 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ); //将前17位加权因子保存在数组里
                    var idCardY=new Array( 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
                    var idCardWiSum=0; //用来保存前17位各自乖以加权因子后的总和
                    for(var i=0;i<17;i++){
                        idCardWiSum+=idCard.substring(i,i+1)*idCardWi[i];
                    }

                    var idCardMod=idCardWiSum%11;//计算出校验码所在数组的位置
                    var idCardLast=idCard.substring(17);//得到最后一位身份证号码

                    //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
                    if(idCardMod==2){
                        if(idCardLast=="X"||idCardLast=="x"){
                            //alert("恭喜通过验证啦！");
                            return 1;
                        }else{
                           // alert("身份证号码错误！");
                            return 0;
                        }
                    }else{
                        //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
                        if(idCardLast==idCardY[idCardMod]){
                            //alert("恭喜通过验证啦！");
                            return 1;
                        }else{
                            //alert("身份证号码错误！");
                            return 0;
                        }
                    }
                }
            }else{
                //alert("身份证格式不正确!");
                return 2;
            }
        },
        regEmail:function(Email){
            var reg=/^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+(\.[a-zA-Z]{2,3})+$/;
            return reg.test(Email);
        },
        regMobile:function(tel){
            var reg=/^1[3,5,8]\d{9}$/;
            return reg.test(tel);
        },
        regNumber:function(num){
            var reg=/^\d+$/;
            return reg.test(num);
        },
        downLoadPath:function(savepath,filename,suffix) {
                uexOffice.onDownloadDocuments(savepath,filename,suffix);
                uexOffice.cbDocDownload = function(code, type, data) {
                    $.hideIndicator();
                    if(code == 200 || type == 200){
                        if(suffix == "word" || suffix == "wordx"){
                            uexOpenFile.onOpenWord(filename,suffix);
                        }else if(suffix == "excel"){
                            uexOpenFile.onOpenExcel(filename);
                        }else if(suffix == "ppt"){
                            uexOpenFile.onOpenPPT(filename);
                        }else if(suffix == "pdf"){
                            uexOpenFile.onOpenPDF(filename);
                        }
                    }else if(code == 403 || type == 403){
                        $.toast("服务器未返回内容",1000);
                    }
                }
            },
        photoView:function(pathlist){
            $.hideIndicator();
            var myPhotoBrowserPopup = $.photoBrowser({
                photos : pathlist,
                type: 'popup'
            });
            myPhotoBrowserPopup.open();
            $('.bar.bar-nav .title .center.sliding').text('图片浏览');
        },
        slideFun: function(obj) {
            require(['Flipsnap'],function(Flipsnap){
                var flipsnap = [],flag = true,move,_this = obj.this,delOn = obj.delete,chaOn = obj.change;
                var addWidth = delOn && chaOn  ? 200 : 100;
                var content = $('#wSlider');
                //content.css("width","");
                $(_this).each(function(i,e){
                    var item = $(e);
                    var height = parseFloat(item.css('height'));
                    if((delOn && item.children('.deleteButton').length == 0) || (chaOn && item.children('.changeButton').length == 0)){
                        var style = 'height: ' + height + 'px; line-height: ' + height + 'px;width:100px;text-align: center;color:#ffffff;position: absolute;z-index: 20;top:0;'
                        var delbtn = $('<div class="deleteButton" style="'+style+';background: red;right:-'+addWidth+'px;">删除</div>');
                        var chabtn = $('<div class="changeButton" style="'+style+';background: #FDA619;right:-100px;">修改</div>');
                        item.children().each(function(i,child){
                            $(child).width($(child).width());
                        });
                        chaOn && item.append(chabtn);
                        delOn && item.append(delbtn);
                        delOn && delbtn.on("click",delOn);
                        chaOn && chabtn.on("click",chaOn);
                        item.append('<div class="delete-overlay" style="position: absolute;left: 0;top: 0;width: 100%;height: 100%;background: rgba(0, 0, 0, 0.4);z-index: 10;visibility: hidden;opacity: 0;"></div>');
                    };
                    flipsnap[i] = Flipsnap(e,{
                        distance:addWidth,
                        maxPoint:1
                    });
                    flipsnap[i].element.addEventListener('fstouchmove',function(ev){
                        flag = true;
                        $.each(flipsnap, function(i,e){
                            if(e.currentPoint == 1){
                                flag = false;
                                $('.delete-overlay').css("visibility","visible");
                                move && move.toPrev();
                                (move !== e) && (move = e);
                            }
                        });
                        if(flag){
                            move = null;
                            $('.delete-overlay').css("visibility","hidden");
                        }
                    },false);

                });
                $(document).on("click",function(){
                    if(move){
                        move.toPrev();
                        move = null;
                    }
                });
                $.refreshScroller();
            })
        }
    });
})(Zepto);