document.addEventListener('alpine:init',()=>{

    Alpine.data('shortestWord',function shortestWord(){

        return{
            str:'',
            shortestWordResults:'',
            
            shortestWord_(){
                this.shortestWordResults=shortestWord_(this.str);
                setTimeout(()=>{
                    this.str='';
                },5000);
            }
        }
    });
})