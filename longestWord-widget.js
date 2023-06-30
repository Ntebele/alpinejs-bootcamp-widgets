document.addEventListener('alpine:init',()=>{
    Alpine.data('longestWord',()=>{
        return {
            lstr:'',
            longestWordResults:'',
            longestWord_(){
                this.longestWordResults=longestWord(this.str);
            }
    }
    });
})