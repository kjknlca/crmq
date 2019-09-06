
//|||||||||||||||  FORMATTING FUNCTIONS  ||||||||||||||||||||||||||
//function to truncate numbers, no rounding, cut at three decimal places
Number.prototype.toFixedDown = function(digits) {
    var re = new RegExp("(\\d+\\.\\d{" + digits + "})(\\d)"),
    m = this.toString().match(re);
    return m ? parseFloat(m[1]) : this.valueOf();
};
//end toFixedDone

//function to format currency and to use trailing zeros for display
function formatMoney(number, decPlaces, decSep, thouSep) {
    decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
    decSep = typeof decSep === "undefined" ? "." : decSep;
    thouSep = typeof thouSep === "undefined" ? "," : thouSep;
    var sign = number < 0 ? "-" : "";
    var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
    var j = (j = i.length) > 3 ? j % 3 : 0;

    return sign +
    (j ? i.substr(0, j) + thouSep : "") +
    i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
    (decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : "");
};
//End formatMoney

 //convert values to mentric based on unit 
 function toMetric(impAmt,impUnit){

    impUnit = $.trim(impUnit);
    
    var meters = 0
    
    if ($.isNumeric(impAmt)){
        if (impUnit=="ft"){
            meters = impAmt * milsFeet   
        } else if (impUnit=="in") {
            meters = impAmt * milsInch
        } else if (impUnit=="sf"){
            meters = impAmt * metricSF                            
        }
    }else{
                    
    }
    //truncate to 3 places and add trailing zeros

    return formatMoney(meters.toFixedDown(3),3)

}
//convert values to mentric based on unit 