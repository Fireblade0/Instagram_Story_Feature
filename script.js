var cross=document.querySelector("h5")
var arr=[
     {dp:"https://images.unsplash.com/photo-1475431701177-8a80e7bf2c5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1hbGUlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D",img:"https://plus.unsplash.com/premium_photo-1672322565907-932e7554b1cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1hbGUlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D"}
    ,{dp:"https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWxzfGVufDB8fDB8fHww",img:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWxzfGVufDB8fDB8fHww"}
    ,{dp:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWxzfGVufDB8fDB8fHww",img:"https://images.unsplash.com/photo-1618375531912-867984bdfd87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"}
    ,{dp:"https://images.unsplash.com/photo-1543050047-17cdabbc2d1f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1hbGUlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D",img:"https://images.unsplash.com/photo-1513827379601-9dba5099a3f9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1hbGUlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D"}
    ,{dp:"https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbGUlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D",img:"https://images.unsplash.com/photo-1516446636564-c48e723868fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbGUlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D"}
    ,{dp:"https://images.unsplash.com/photo-1512755051947-dea0029e93ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbGUlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D",img:"https://images.unsplash.com/photo-1488161628813-04466f872be2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbGUlMjBtb2RlbHN8ZW58MHx8MHx8fDA%3D"}
    ,{dp:"https://images.unsplash.com/photo-1622396636133-ba43f812bc35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",img:"https://images.unsplash.com/photo-1581338834647-b0fb40704e21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D"}
    ,{dp:"https://images.unsplash.com/photo-1556347961-f9521a88cb8a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWxzfGVufDB8fDB8fHww",img:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWxzfGVufDB8fDB8fHww"}
]





var clutter=""
arr.forEach(function(elem,idx){
    clutter+=` <div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})
document.querySelector("#storiyan").innerHTML=clutter
var grow=0
document.querySelector("#storiyan").addEventListener("click",function(dets){
               document.querySelector("#full-scr").style.display="block"
              document.querySelector("#full-scr").style.backgroundImage=`url(${arr[dets.target.id].img})`
              setTimeout(function(){
                document.querySelector("#full-scr").style.display="none"
              },3000)

              if(grow<100){
                setInterval(function(){
                          document.querySelector("#growth").style.width=`${grow++}%`
                },30)
                 }else{
                  grow=0
                 }
})
  
 cross.addEventListener("click",function(){
    document.querySelector("#full-scr").style.display="none"
 }) 