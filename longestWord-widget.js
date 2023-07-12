document.addEventListener('alpine:init',()=>{

    
    Alpine.data('longestWord',()=>{
        return {
        
            str:'',
            longestWordResults:'',

            longestWord_(){
                this.longestWordResults=longestWord(this.str);
                setTimeout(()=>{
                    this.str='';
                },7000);

            

         }
    }
    });

})

