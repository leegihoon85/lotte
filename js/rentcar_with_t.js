


function popUp() {
    document.getElementById('popUp').classList.toggle('popUp')
    document.querySelector('.bar1_f_js').classList.toggle('bar1')
    document.querySelector('.bar2_f_js').classList.toggle('bar2')
    document.querySelector('.bar3_f_js').classList.toggle('bar3')
}
let top_box_ss = document.querySelectorAll('.top_box_s');
let bottom_box_ss =document.querySelectorAll('.bottom_box_s');
top_box_ss.forEach(function(doIt, i){
    doIt.addEventListener('click',function(){
        for(d=0;d<top_box_ss.length; d++){
            top_box_ss[d].classList.remove('active')
            bottom_box_ss[d].classList.remove('open')
        }
        top_box_ss[i].classList.add('active')
        bottom_box_ss[i].classList.add('open')
    
    })
})
let crosses = document.querySelectorAll('.cross')
let hides = document.querySelectorAll('.hide')
let transFs = document.querySelectorAll('.transF')
transFs.forEach(function(hover,i){
    hover.addEventListener('mouseenter',function(){
        for(z=0; z<transFs.length; z++){
            crosses[z].classList.remove('cross_hover')
            hides[z].classList.remove('hide_hover')
        }
        crosses[i].classList.add('cross_hover')
        hides[i].classList.add('hide_hover')
    })
    hover.addEventListener('mouseleave',function(){
        crosses[i].classList.remove('cross_hover')
        hides[i].classList.remove('hide_hover')
    })
})
let nav_transs = document.querySelectorAll('.nav_trans')
let pagess = document.querySelectorAll('.pages')
let Pagewraps = document.querySelector('.PageWrap')
let gnbs = document.querySelector('.gnb')
let navigators = document.querySelector('.navigator')
let search_wraps=document.querySelector('.search_wrap')
let underbars = document.querySelectorAll('.underbar')

nav_transs.forEach(function(Hover,i){
    Hover.addEventListener('mouseenter',function(){
        for(H =0; H<nav_transs.length;H++){
            pagess[H].classList.remove('open_pageWrap')
            nav_transs[H].classList.remove('text_red')
            underbars[H].classList.remove('underbar_open')
        }
        pagess[i].classList.add('open_pageWrap')        
        Pagewraps.classList.add('PageWrap_open')
        nav_transs[i].classList.add('text_red')
        underbars[i].classList.add('underbar_open')
    })
})    
navigators.addEventListener('mouseleave', function(){
    for(i=0; i<pagess.length; i++){
        pagess[i].classList.remove('open_pageWrap')
        nav_transs[i].classList.remove('text_red')
        underbars[i].classList.remove('underbar_open')}       
        Pagewraps.classList.remove('PageWrap_open')
    })
search_wraps.addEventListener('mouseenter', function(){
    for(i=0; i<pagess.length; i++){
        pagess[i].classList.remove('open_pageWrap')
        nav_transs[i].classList.remove('text_red')
        underbars[i].classList.remove('underbar_open')}       
        Pagewraps.classList.remove('PageWrap_open')
})
