document.addEventListener("alpine:init",()=>{

    
    Alpine.data('greetWi',function(){
        
        return{
            makhelwane:"",
            message:"",
            
            greetMe(){
                this.message=greet(this.makhelwane);
                setTimeout(()=>{
                    this.message="";
                    this.makhelwane="";
                },2000);


 }

}

});

})
   