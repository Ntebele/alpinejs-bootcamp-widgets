document.addEventListener('alpine:init',()=>{

    Alpine.data('shortestWord',()=>{
        return{
            str:'',
            shortestWordResults:'',
            
            shortestWord_(){
                this.shortestWordResults=shortestWord(this.str);
                setTimeout(()=>{
                    this.str='';
                },7000);
       
         }
    }
    });

})
