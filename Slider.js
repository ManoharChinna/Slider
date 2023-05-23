var num=0;
var imageArr=["0.jpeg","1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg","6.jpeg","7.jpeg"]
console.log(imageArr)
console.log(imageArr.length)
var headerTag=document.querySelector("header")
function autoSlide()
{
    num++;
    if(num<=imageArr.length-1)
    {
        headerTag.style.backgroundImage=`url(${imageArr[num]})`
    }
    else{
        num=0;
        headerTag.style.backgroundImage=`url(${imageArr[num]})`
    }
    setTimeout(autoSlide,3000)
}
autoSlide()
function sliderRight(){
    num++;
    if(num<=imageArr.length-1)
    {
        headerTag.style.backgroundImage=`url(${imageArr[num]})`
    }
    else{
        num=0;
        headerTag.style.backgroundImage=`url(${imageArr[num]})`
    }
}
function sliderLeft(){
    num--;
    if(num<0)
    {
        num=imageArr.length-1
        headerTag.style.backgroundImage=`url(${imageArr[num]})`
    }
    else{
        headerTag.style.backgroundImage=`url(${imageArr[num]})`
    }
}