class Menu{
	constructor(box_principal, btn_ocultar){
		this.box_principal = document.querySelector(box_principal);
		this.btn_ocultar = document.querySelector(btn_ocultar);
		this.box_texto = document.querySelector(".box-texto");
		this.btn_mostrar = document.querySelector("#btn_inicio");
		this.box_informacion = document.querySelector(".box-informacion");
	}
	ocultar(){
		this.btn_ocultar.addEventListener("click", (e)=>{
			this.box_principal.classList.replace("bg-img-maximizar", "bg-img-minimizar");
			this.box_texto.classList.add("d-none");
			this.box_informacion.classList.replace("d-none", "d-block");
		})
	}
	expandir(){
		this.btn_mostrar.addEventListener("click", ()=>{
			this.box_principal.classList.replace("bg-img-minimizar","bg-img-maximizar");
			this.box_texto.classList.remove("d-none");
			this.box_informacion.classList.replace("d-block", "d-none");
		})
	}
}
const m = new Menu(".bg-img", ".btn-ocultar");
m.ocultar();
m.expandir();