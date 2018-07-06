function LoadPage() {
    var x = document.getElementById("address").value;
	
	if(x.includes("https://")){
		console.log("loading " + x);
		document.getElementById("page").src = x;
	}else{
		console.log("loading https://" + x + ".  forgot to use https://");
		document.getElementById("page").src = "https://" + x;
	}
	
    
}
document.getElementById('clicker').onclick = LoadPage;