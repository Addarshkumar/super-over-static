var strikebutton =document.querySelector("#strike")
var resetbutton = document.querySelector("#reset")

var team1score_tag=document.getElementById("score-team1")
var team2score_tag=document.getElementById("score-team2")

var team1wicket_tag=document.getElementById("wicket-team1")
var team2wicket_tag=document.getElementById("wicket-team2")

var strikeaudio=new Audio("http://bit.ly/so-ball-hit")
var gameOverAudio=new Audio("http://bit.ly/so-crowd-cheer")

var team1score=0
var team2score=0
var team1wicket=0
var team2wicket=0
var team1ballfaced=0
var team2ballfaced=0
var turn=1

var possibleoutcomes=[0,1,2,3,4,6,"W"];

strikebutton.addEventListener("click",strikebuttonclicked);
    function strikebuttonclicked(){
    strikeaudio.pause()
    strikeaudio.currentTime=0  //pause the previous audio and start from beginning
    strikeaudio.play();
    
    // using randomvalue
    var randomness=Math.random();
    // console.log(randomness)
    var random1=randomness * possibleoutcomes.length
    var randomindex=Math.floor(random1)
    // console.log(randomindex)
    var randomvalue=possibleoutcomes[randomindex]
    console.log(randomvalue)
    //pak batting
    if(turn==2){
        team2ballfaced++;
        var ball=document.querySelector(`#team2-superover div:nth-child(${team2ballfaced})`)
        ball.innerHTML=randomvalue;
    
    if(randomvalue=="W"){
    team2wicket++}
    else{
        team2score+=randomvalue;
    }
    if(team2score>team1score ||team2wicket===2 ||team2ballfaced===6){
        turn==3;
        setTimeout(() => {
            gameOver();
          },10);
    
        
    }
    updatescore()


}

    
  //india batting
    if(turn==1){
        team1ballfaced++;
        var ball=document.querySelector(`#team1-superover div:nth-child(${team1ballfaced})`)
        ball.innerHTML=randomvalue;

        if(randomvalue=="W"){
            team1wicket++

        }else{
            team1score+=randomvalue;
        }
        if(team1ballfaced==6 || team1wicket==2){
            turn=2;
        }
        updatescore()

    }
}
function updatescore(){
    team1score_tag.innerHTML=team1score;
    team1wicket_tag.innerHTML=team1wicket;
    team2score_tag.innerHTML=team2score;
    team2wicket_tag.innerHTML=team2wicket;    



}
function gameOver(){
    if(team1score>team2score){
        alert("India won")
    }
    else if(team2score>team1score){
        alert("Pakistan won")

    }
    else{
        alert("tie")
    }
    document.querySelectorAll(".ball").forEach(e=>{
        if(e.innerHTML == "")
        {
          e.innerHTML = "X"
          e.style.backgroundColor = "grey"
        }
      })
    

  gameOverAudio.pause(); //pause the previuos playing audio
  gameOverAudio.currentTime = 0; // bring the time to 0
  gameOverAudio.play();

}
resetbutton.addEventListener("click",resetfunction)
function resetfunction(){
    window.location.reload()
}










