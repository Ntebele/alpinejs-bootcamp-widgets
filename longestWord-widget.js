document.addEventListener('alpine:init',()=>{

    
    Alpine.data('longestWord',function longestWord(){
        return {
        
            str:'',
            longestWordResults:'',

            longestWord_(){
                this.longestWordResults=longestWord_(this.str);
                setTimeout(()=>{
                    this.str='';
                },5000);

            

         }
    }
    });

})