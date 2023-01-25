let secretNumber = Math.trunc(Math.random()*20)+1;

let score = 0;
let hscore = 0;
let counter = 0;

document.querySelector('.btn').addEventListener('click', function(){
    
    const guess = Number(document.querySelector('.number').value);

    if(!guess){
        document.querySelector('.guessing').textContent = 'No Number!';
        counter++;
    }
    
    else if(guess==secretNumber){
        document.querySelector('.guessing').textContent = 'Congratulations!!🎉 Correct Number ';

        document.querySelector('.symbol').textContent = secretNumber; 

        document.querySelector('.btn').style.display = 'none';
        score++;
        if(counter<=1){
        score = score * 100;
        document.querySelector('.score').textContent = score;  
        

        if(hscore<score){
            hscore = score;
            document.querySelector('.hscore').textContent = hscore;
        }

        }else if(counter==2){
            score = score * 80;
            document.querySelector('.score').textContent = score;
            if(hscore<score){
                hscore = score;
                document.querySelector('.hscore').textContent = hscore;
            }
        }
        else if(counter==3){
            score = score * 60;
            document.querySelector('.score').textContent = score;
            if(hscore<score){
                hscore = score;
                document.querySelector('.hscore').textContent = hscore;
            }
        }
        else if(counter==4){
            score = score * 40;
            document.querySelector('.score').textContent = score;
            if(hscore<score){
                hscore = score;
                document.querySelector('.hscore').textContent = hscore;
            }
        }
        else if(counter==5){
            score = score * 20;
            document.querySelector('.score').textContent = score;
            if(hscore<score){
                hscore = score;
                document.querySelector('.hscore').textContent = hscore;
            }
        }
        else{
            score = score * 0;
            document.querySelector('.score').textContent = score;
            if(hscore<score){
                hscore = score;
                document.querySelector('.hscore').textContent = hscore;
            }
        }

        
        
    }

    else if(guess>secretNumber){
        document.querySelector('.guessing').textContent = 'Your Guess Is High!';

        if(score>0){
            score--;
        document.querySelector('.score').textContent = score;
        }
        counter++;
    }

    else if(guess<secretNumber){
        document.querySelector('.guessing').textContent = 'Your Guess Is Low!';

        if(score>0){
            score--;
        document.querySelector('.score').textContent = score;
        }
        counter++;
    }
})


document.querySelector('.btn2').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random()*20)+1;

    score = 0;
    counter = 0;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').value = '';
    document.querySelector('.symbol').textContent = '?'; 
    document.querySelector('.btn').style.display = 'inline-block';

})

