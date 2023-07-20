
 
 
 
 
 
 class Capo{
    constructor (
        public id:number,
        public codprod:number,
        public collezione:string,
        public capo:string,
        public modello:number,
        public quantita:number,
        public colore:string,
        public prezzoivaesclusa:number,
        public prezzoivainclusa:number,
        public disponibile:string,
        public saldo:number,


        ){
            this.getsaldocapo()
            this.getacquistocapo()
        }


        getsaldocapo():number{
            return  (this.prezzoivainclusa*this.saldo)/100
        }

        getacquistocapo():number{
         return this.prezzoivainclusa-this.getsaldocapo()
        }
}


let arr:Capo[]=[]

let  url:string = './Abbigliamento.json'
 fetch(url)
 .then((res)=>{
    if(res.ok){
        console.log(res)
        return res.json()
    
        
    }else{
        console.log('errore')
    }
 })

 .then((data)=>{
    console.log(data)
    data.forEach((dat:any,i:any)=>{
    dat= new Capo(dat.id,dat.codprod,dat.collezione,dat.capo,dat.modello,dat.quantita,dat.colore,dat.prezzoivaesclusa,dat.prezzoivainclusa,dat.disponibile,dat.saldo)
    arr.push(dat)
    console.log(arr[i].getacquistocapo())
    
})
arr.forEach((abbigliamento,i)=>{
    console.log(abbigliamento)
    let divcontainer=document.createElement('div') as HTMLDivElement
    divcontainer.classList.add('d-flex','flex-column','align-items-center','border-bottom')
    divcontainer.innerHTML=`<p class=' fw-bold m-0'>tipologia capo: <span class='text-danger'> ${abbigliamento.capo}</span> </p> 
    <p class=' fw-bold m-0'>collezione: <span class='text-danger'> ${abbigliamento.collezione}</span> </p>  
    <p class=' fw-bold m-0'>colore: <span class='text-danger'> ${abbigliamento.colore} </span> </p> 
    <p class=' fw-bold mb-4 '>modello: <span class='text-danger'>${abbigliamento.modello} </span> </p> 
    <p class=' fw-bold mb-4 '>prezzo totale già scontato: <span class='text-danger'>${abbigliamento.getacquistocapo().toFixed(2)+'€'}  </span> </p>
    `
    let x= document.querySelector('.target') as HTMLDivElement
    x.appendChild(divcontainer)
})






    
 })
 .catch((err)=>{
    throw new Error(err)
 })



