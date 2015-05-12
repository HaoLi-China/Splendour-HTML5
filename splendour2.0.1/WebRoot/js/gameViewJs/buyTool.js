//用金币买道具onclick响应的js文件
function buyRemovebee(){

    if(getmoney>=600){
        game.player.updateCoin(-600,true);
        toolnum[0]++;
        updateBT("tool", "toolnum", 1 , "tool1")
    }else{
        alert("金币数量不足!");
    }
}
function buyButterflygod(){
    if(getmoney>=700){
        game.player.updateCoin(-600,true);
        toolnum[1]++;
        updateBT("tool", "toolnum", 1 , "tool2")
    }else{
        alert("金币数量不足!");
    }
}
function buyNet(){
    if(getmoney>=150){
        game.player.updateCoin(-150,true);
        toolnum[2]++;
        updateBT("tool", "toolnum", 1 , "tool3")
    }else{
       alert("金币数量不足!");
    }
}
function buyClock(){
    if(getmoney>=150){
        game.player.updateCoin(-150,true);
        toolnum[3]++;
        updateBT("tool", "toolnum", 1 , "tool4")
    }else{
        alert("金币数量不足!");
    }
}
function buyLure(){
    if(getmoney>=200){
        game.player.updateCoin(-200,true);
        toolnum[4]++;
        updateBT("tool", "toolnum", 1 , "tool5")
    }else{
       alert("金币数量不足!");
    }
}