
function hide(ele){
    ele.classList.add("hidden")
}

function getNumFromClass(ele){
    let num = ele[1]
    if (num === '-'){
        // get the actual num (not the hyphen) and make it negative
        num = parseInt(ele[2])
        return num * -1
    } 
    num = parseInt(ele[1])
    return num
}


function moveToSide(dir){
    let move;
    // LEFT = 0 | RIGHT = 1
    dir === 0 ? move = -1 : move = 1

    for (let i = 1; i < 3; i++) {
        let picBox = document.getElementById(`pics${i}`)
        // make sure display is not invisible
        picBox.style.display="flex"; 
        curClassName = picBox.className
        realCNum = getNumFromClass(curClassName)
                
        // if the number is 4, set it to negative 4
        if(realCNum === 4 && dir ){ 
            picBox.style.display="none";
            realCNum = -8; 
            picBox.style.transition= "0s";
        }
        if(realCNum === -6 && !dir ){ 
            picBox.style.display="none";
            realCNum = 6; 
            picBox.style.transition= "0s";
        }
        // set the new margin
        picBox.style.marginLeft = `${100 * (realCNum + move)}px`
        // set the new class
        picBox.className = `p${realCNum + move}`
        picBox.style.zIndex = 'auto'
        picBox.style.transition= "0.2s";

    }
}

function toggleWindow(){
    let window = document.getElementById(`window`)
    if(window.style.overflow === ''){
        window.style.overflow = 'hidden';
    } else {
        window.style.overflow = '';
    }
}

