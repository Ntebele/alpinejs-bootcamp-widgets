document.addEventListener("alpine:init",()=>{

    
    Alpine.data('greetWidget',function greetWidget(){
        
        return {
            name: '',
            selectedLanguage: 'en',
            greeting: '',
            
          
      greet() {
        switch (this.selectedLanguage) {
          case 'en':
            this.greeting = 'Hello, ' + this.name + '!';
            break;
          case 'fr':
            this.greeting = 'Bonjour, ' + this.name + '!';
            break;
          case 'es':
            this.greeting = '¡Hola, ' + this.name + '!';
            break;
          case 'ses':
                this.greeting = 'Dumela, ' + this.name + '!';
                break;
          case 'xh':
            this.greeting = 'Molo, ' + this.name + '!';
            break;
          case 'zu':
                this.greeting = 'Sawubona, ' + this.name + '!';
                break;
          default:
            this.greeting = 'Hello, ' + this.name + '!';
            break;

         
        } setTimeout(()=>{
          this.greeting='';
      },5000);


}

}

});

})

   