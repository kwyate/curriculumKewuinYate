class Menu{
	constructor(box_principal, btn_ocultar){
		this.box_principal = document.querySelector(box_principal);
		this.btn_ocultar = document.querySelector(btn_ocultar);
		this.box_texto = document.querySelector(".box-texto");
	}
	ocultar(){
		this.btn_ocultar.addEventListener("click", (e)=>{
			console.log("click ----")
			this.box_principal.classList.remove("vh-100");
			this.box_principal.classList.add("bg-img-minimizar");
			// this.box_principal.classList.add("position-sticky");
			this.box_texto.classList.add("d-none");
		})
	}
}
const m = new Menu(".bg-img", ".btn-ocultar");
m.ocultar();