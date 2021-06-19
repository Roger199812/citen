
    simplyCountdown('#cumpleaños', {
        year:2022 , 
        month: 03, 
        day:19 ,
        hours:22 , 
        minutes:58 ,
        seconds:05 ,
        words: { 
            days:'Dia',
            hours: 'Hora',
            minutes:'Minuto',
            seconds:'Segundo',
            pluralLetter: 's'
        },

        plural: true, 
        inline: false, 
        inlineClass: 'simply-countdown-inline',
        
        enableUtc: false, 
        onEnd: function() { 
            alert('feliz cumpleaños')
            return; 
        }, 
        refresh: 1000, 
        sectionClass: 'simply-section', 
        amountClass: 'simply-amount', 
        wordClass: 'simply-word', 
        zeroPad: false,
        countUp: true
});


let myElement = document.querySelector('.my-countdown');
simplyCountdown(myElement, { /* options */ });

let multipleElements = document.querySelectorAll('.my-countdown');
simplyCountdown(multipleElements, { /* options */ });
