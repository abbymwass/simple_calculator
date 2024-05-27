function addition(){
	let a= parseFloat(document.getElementById("num1").value)
	let b= parseFloat(document.getElementById("num2").value)

	 let result =(a+b);
	 document.getElementById("result").innerHTML=result; 
}
function subraction(){
	let a= parseFloat(document.getElementById("num1").value)
	let b= parseFloat(document.getElementById("num2").value)

	let result =(a-b);
	document.getElementById("result").innerHTML=result; 

}
function multiplication(){
	let a= parseFloat(document.getElementById("num1").value)
	let b= parseFloat(document.getElementById("num2").value) 

	let result =(a*b);
	document.getElementById("result").innerHTML=result; 
}
function division(){
	let a= parseFloat(document.getElementById("num1").value)
	let b= parseFloat(document.getElementById("num2").value) 


	let result =(a/b);
	document.getElementById("result").innerHTML=result; 
}

