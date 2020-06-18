class Conocimiento{
	constructor(datosArreglo){
		this.boxBack = document.querySelector(".box-backend");
		this.boxFront = document.querySelector(".box-frontend");
		this.elementoBarra;
		this.datos = datosArreglo;
	}
	crearElemento(indice, capa){
		if(capa == "back"){
			var dates = this.datos.back
		}else{
			var dates = this.datos.front
		}
		let barra = document.createElement("div");
		let p = document.createElement("p");
		let boxSkill = document.createElement("div");
		let small = document.createElement("small");
		let img = document.createElement("img");
		let restante = 100 - dates[indice].porcentaje ;
		p.classList.add("font-weight-bold");
		p.innerText = dates[indice].lenguaje;
		boxSkill.classList.add("box-skill");
		boxSkill.classList.add("flex-center");
		console.log("Datos indice", dates[indice].porcentaje)
		console.log("Restante", restante/2);
		boxSkill.style.background = "linear-gradient(to right, #018786 "+ dates[indice].porcentaje + "%, #fff " + restante/2 + "%, #fff "+ restante/2 +"%)";
		small.innerText = dates[indice].msj;
		small.classList.add("text-center", "font-weight-bold", "mr-2");
		img.setAttribute("src", "img/logosSkill/logo-"+capa+"_"+(indice+1)+".png");
		boxSkill.appendChild(small);
		boxSkill.appendChild(img);
		barra.appendChild(p);
		barra.appendChild(boxSkill);
		if(capa == "back"){
			this.boxBack.appendChild(barra);
		}else{
			this.boxFront.appendChild(barra);
		}
	}
	pintardatos(){
		for(let i = 0; i< this.datos.front.length; i++){
			this.crearElemento(i, "front");
		}
		for(let i = 0; i< this.datos.back.length; i++){
			this.crearElemento(i, "back");
		}
	}
}
let datosArreglo ={
	front:[{
			lenguaje: "HTMl5",
			porcentaje: 80,
			msj: "Se practica con ejercicios."
		},{
			lenguaje: "CSS3",
			porcentaje: 70,
			msj: "Se practica en ejercicios."
		},{
			lenguaje: "JavaScript",
			porcentaje: 50,
			msj: "Se practica con ejercicios"
		},{
			lenguaje: "Angular 7++",
			porcentaje: 30,
			msj: "En proceso de certificación."
		},{
			lenguaje: "React",
			porcentaje: 10,
			msj: "En proceso de certificación."
		}],
	back: [
		{
			lenguaje: "Python",
			porcentaje: 30,
			msj: "En proceso de certificación."
		},{
			lenguaje: "Java",
			porcentaje: 50,
			msj: "En proceso de certificación."
		},{
			lenguaje: "c# .NET",
			porcentaje: 30,
			msj: "En formacion (Especializacion)"
		},{
			lenguaje: "Node Js",
			porcentaje: 30,
			msj: "En proceso de certificación."
		},{
			lenguaje: "php",
			porcentaje: 50,
			msj: "En proceso de certificación."
		}
	]
}

const c = new Conocimiento(datosArreglo);
c.pintardatos();