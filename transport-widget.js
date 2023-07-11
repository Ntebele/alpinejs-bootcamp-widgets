document.addEventListener('alpine:init',()=>{
    Alpine.data("fee",()=>{
        return{
            
            shiftInput:'',
            results:'',
            
            Fee(){
                this.results=transportFee(this.shiftInput);
            }
        }
    })
})