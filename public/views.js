$("#minus").on("click",()=>{
    if ($("#amount").val()>1){
        $("#amount").val(parseInt($("#amount").val())-1);
    }
})
$("#plus").on("click",()=>{
    if ($("#amount").val()<4){
        $("#amount").val(parseInt($("#amount").val())+1);
    }
})
