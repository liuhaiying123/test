function remSize(){
    // 获取当前设备的宽度，由于IE和谷歌不一样所以我们俩种都要考虑
    var deviceWidth  = document.documentElement.clientWidth || window.innerWidth;
    // 这里我们按照Iphone的宽度750px 
    // 识别屏幕宽度，不能让它太大或太小，导致项目样式变形
    if(deviceWidth >=750){
        deviceWidth = 750
    }
    if(deviceWidth <=320){
        deviceWidth = 320
    }
    // 通过屏幕大小设置字体大小
 	// 这里让 1rem = 100px   
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';
    // 默认的字体大小
    document.querySelector('body').style.fontSize = 0.3 + 'rem'
}

remSize()

// 窗口发生变化时调用
window.onresize = function(){
    remSize()
}
