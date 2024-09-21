document.getElementById('training-btn').classList.add('training-li-active');
document.getElementById('training-all').style.display='block';
document.getElementById('awards-all').style.display='none';
function trainingAward(event){
    if(event == 'training'){
        document.getElementById('training-btn').classList.add("training-li-active");
        document.getElementById('awards-btn').classList.remove("training-li-active");
        document.getElementById('training-all').style.display ='block';
        document.getElementById('awards-all').style.display ='none';
    }else if(event == 'awards'){
        document.getElementById('training-btn').classList.remove("training-li-active");
        document.getElementById('awards-btn').classList.add("training-li-active");
        document.getElementById('training-all').style.display ='none';
        document.getElementById('awards-all').style.display ='block';
    }
}