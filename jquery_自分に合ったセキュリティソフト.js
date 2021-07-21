$(function(){
  
 $(".result").hide();
  
 //ボタンがクリックされた時
 $("button").click(function(){
   var qNum = $("ul li").length;
   
   if( $("ul li input:checked").length < qNum ){
     alert("未回答の問題があります");
   } else {
     var typeANum = $(".typeA:checked").length;
     var typeBNum = $(".typeB:checked").length;
     var typeCNum = $(".typeC:checked").length;
     var typeDNum = $(".typeD:checked").length;
     var typeENum = $(".typeE:checked").length;
     var typeFNum = $(".typeF:checked").length;
     var typeWNum = $(".typeW:checked").length;
     
     if( typeANum >= typeBNum && typeANum >= typeCNum && typeANum >= typeDNum && typeANum >= typeENum && typeANum >= typeFNum && typeWNum == 1) {
       $(".resultA").fadeIn();
     } else if( typeANum >= typeBNum && typeANum >= typeCNum && typeANum >= typeDNum && typeANum >= typeENum && typeANum >= typeFNum && typeWNum != 1) {
       if(typeBNum >= typeCNum && typeBNum >= typeDNum && typeBNum >= typeENum && typeBNum >= typeFNum){
         $(".resultB").fadeIn();
       } else if(typeCNum >= typeBNum && typeCNum >= typeDNum && typeCNum >= typeENum && typeCNum >= typeFNum){
         $(".resultC").fadeIn();
       } else if(typeDNum >= typeBNum && typeDNum >= typeCNum && typeDNum >= typeENum && typeDNum >= typeFNum){
         $(".resultD").fadeIn();
       } else if(typeENum >= typeBNum && typeENum >= typeCNum && typeENum >= typeDNum && typeENum >= typeFNum){
         $(".resultE").fadeIn();
       } else if(typeFNum >= typeBNum && typeFNum >= typeCNum && typeFNum >= typeDNum && typeFNum >= typeENum){
         $(".resultF").fadeIn();
       }
     } else if( typeBNum >= typeANum && typeBNum >= typeCNum && typeBNum >= typeDNum && typeBNum >= typeENum && typeBNum >= typeFNum && typeWNum == 1) {
       $(".resultB").fadeIn();
     } else if( typeBNum >= typeANum && typeBNum >= typeCNum && typeBNum >= typeDNum && typeBNum >= typeENum && typeBNum >= typeFNum && typeWNum != 1) {
       if(typeANum >= typeCNum && typeANum >= typeDNum && typeANum >= typeENum && typeANum >= typeFNum){
         $(".resultA").fadeIn();
       } else if(typeCNum >= typeANum && typeCNum >= typeDNum && typeCNum >= typeENum && typeCNum >= typeFNum){
         $(".resultC").fadeIn();
       } else if(typeDNum >= typeANum && typeDNum >= typeCNum && typeDNum >= typeENum && typeDNum >= typeFNum) {
         $(".resultD").fadeIn();
       } else if(typeENum >= typeANum && typeENum >= typeCNum && typeENum >= typeDNum && typeENum >= typeFNum) {
         $(".resultE").fadeIn();
       } else if(typeFNum >= typeANum && typeFNum >= typeCNum && typeFNum >= typeDNum && typeFNum >= typeENum) {
         $(".resultF").fadeIn();
       }
     } else if( typeCNum >= typeANum && typeCNum >= typeBNum && typeCNum >= typeDNum && typeCNum >= typeENum && typeCNum >= typeFNum) {
       $(".resultC").fadeIn();
     } else if( typeDNum >= typeANum && typeDNum >= typeBNum && typeDNum >= typeCNum && typeDNum >= typeENum && typeDNum >= typeFNum && typeWNum == 1) {
       $(".resultD").fadeIn();
     } else if( typeDNum >= typeANum && typeDNum >= typeBNum && typeDNum >= typeCNum && typeDNum >= typeENum && typeDNum >= typeFNum && typeWNum != 1) {
       if(typeANum >= typeBNum && typeANum >= typeCNum && typeANum >= typeENum && typeANum >= typeFNum){
         $(".resultA").fadeIn();
       } else if(typeBNum >= typeANum && typeBNum >= typeCNum && typeBNum >= typeENum && typeBNum >= typeFNum){
         $(".resultB").fadeIn();
       } else if(typeCNum >= typeANum && typeCNum >= typeBNum && typeCNum >= typeENum && typeCNum >= typeFNum){
         $(".resultC").fadeIn();
       } else if(typeENum >= typeANum && typeENum >= typeBNum && typeENum >= typeCNum && typeENum >= typeFNum){
         $(".resultE").fadeIn();
       } else if(typeFNum >= typeANum && typeFNum >= typeBNum && typeFNum >= typeCNum && typeFNum >= typeENum){
         $(".resultF").fadeIn();
       }
     } else if( typeENum >= typeANum && typeENum >= typeBNum && typeENum >= typeCNum && typeENum >= typeDNum && typeENum >= typeFNum) {
       $(".resultE").fadeIn();
     } else if( typeFNum >= typeANum && typeFNum >= typeBNum && typeFNum >= typeCNum && typeFNum >= typeDNum && typeFNum >= typeENum) {
       $(".resultF").fadeIn();
     }
     
   }
 });
  
});
