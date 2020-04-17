//原生js


window.onload = function(){

    // 顶部导航栏
    let liArr = document.querySelectorAll('.nav ul li');
    let aArr = document.querySelectorAll('.nav ul li a');
    let divArr = document.querySelectorAll('.div_change>div');

    for(let i=0;i<liArr.length;i++){
        liArr[i].onclick = function(){
            for(let x=0;x<aArr.length;x++){
                aArr[x].style.color = '#757575';
                aArr[x].style.borderBottom = '2px solid transparent';
            }
            for(let j=0;j<divArr.length;j++){
                divArr[j].style.display = 'none';
            }
            aArr[i].style.color = '#FB7299';
            aArr[i].style.borderBottom = '2px solid #FB7299';
            divArr[i].style.display = 'block';
        }
    }
}