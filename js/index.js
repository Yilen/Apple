/**
 * Created by Dell on 2017/4/23.
 */
window.onload=function(){
    //section-btm-script-begin

    var oDiv1=document.getElementById('btm');
    var oDiv2=oDiv1.getElementsByTagName('div');
    var aTitle=oDiv1.getElementsByTagName('a');
    for( var i=0;i<oDiv2.length;i++){
        oDiv2[i].onmouseover=function(){
            for( var i=0;i<oDiv2.length;i++){
                oDiv2[i].style.background='#fff';
            }
            this.style.background='#ae3b4a';
        }
        oDiv2[i].onmouseout=function(){
            this.style.background='#fff';
        }
    }

}
