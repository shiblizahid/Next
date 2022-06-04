function si(){
    var am = parseInt(document.getElementById("amount").value);
    var ra = parseFloat(document.getElementById("rate").value);
    var ti = parseInt(document.getElementById("time").value);

    var i = am * (1 + (ra * ti));
    document.getElementById("h").innerHTML = " Interest Amount Is <br/> Rs." + i;

}