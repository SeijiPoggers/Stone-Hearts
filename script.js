let header = document.getElementById('header')
let ja = document.getElementById('jewela')
let jt = document.getElementById('jewelt')
let jj = document.getElementById('jewelj')
let jo = document.getElementById('jewelo')
let jewel = document.getElementById('jewel')
let size = document.getElementById('size')
let weight = document.getElementById('weight')
let og = document.getElementById('origin')

ja.onclick = function(){
    header.style.backgroundImage = 'url(./image-1.png)'
    jewel.innerHTML = "Aventurine"
    size.innerHTML = "10cm"
    weight.innerHTML = "750g"
    og.innerHTML = "India"
}

jt.onclick = function(){
    header.style.backgroundImage = 'url(./image-2.png)'
    jewel.innerHTML = "Topaz"
    size.innerHTML = "2cm"
    weight.innerHTML = "140g"
    og.innerHTML = "Germany"
}

jj.onclick = function(){
    header.style.backgroundImage = 'url(./image-3.png)'
    jewel.innerHTML = "Jade"
    size.innerHTML = "5cm"
    weight.innerHTML = "360g"
    og.innerHTML = "Spain"
}

jo.onclick = function(){
    header.style.backgroundImage = 'url(./image-4.png)'
    jewel.innerHTML = "Opal"
    size.innerHTML = "3cm"
    weight.innerHTML = "260g"
    og.innerHTML = "Brazil"
}