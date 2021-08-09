var UserName
const input=document.getElementById('data')
console.log(input)
input.addEventListener('keyup',(e)=>{
     UserName=e.target.value    
})
input.addEventListener('keydown',(e)=>{
   if(e.key=='Backspace'){
       window.location.reload(true)
   }
})

const hit=document.getElementById('btn')
hit.addEventListener('click',(e)=>{
     e.preventDefault()
     const input=document.getElementById('data')
     input.style.backgroundColor='black'
    const xhr=new XMLHttpRequest()
    console.log(xhr.readyState)

    const url=`https://api.github.com/users/${UserName}`
    xhr.open('GET',url)
    console.log(xhr.readyState)
    
    xhr.onreadystatechange=()=>{
        if(xhr.readyState==4 && xhr.status==200)
        {
            const info=JSON.parse(xhr.responseText)

            console.log(info)
            const name=(info.name)
            const username=(info.login)
            const location=(info.location)
            const bio=(info.bio)
            const no_repos=(info.public_repos)
            const no_followers=(info.followers)
            const no_following=(info.following)
            const image=info.avatar_url
            console.log(image)

            const imge=document.createElement('img')
            imge.src=`${info.avatar_url}`
            imge.style.width='100%';
            imge.style.height='100%';
            imge.style.position='absolute'
            imge.style.top='0';
            imge.style.left='0';
            console.log(imge)

            const ap=document.getElementById('photo')
            ap.style.display= 'inline';
            ap.style.height= '400px';
            ap.style.width='25%';
            ap.style.borderRadius= '100%';
            ap.style.boxShadow= '0 0 20px black';
            ap.style.textAlign= 'center';
            ap.style.overflow='hidden';
            ap.style.position= 'relative';
            ap.style.right='2%';
            ap.style.top= '40px';
            ap.appendChild(imge)

            const p1=document.createElement('p')
            p1.className='lead'
            p1.style.color='white'
            p1.style.fontSize='2em'
            p1.textContent=`${username}`

            const p2=document.createElement('p')
            p2.style.color='white'
            p2.style.fontSize='1.5em'
            p2.textContent=`${name}`

            const p3=document.createElement('p')
            p3.style.color='white'
            p3.textContent=`${bio}`

            const p4=document.createElement('p')
            p4.style.color='white'
            p4.textContent=`Location : ${location}`
        
            const p5=document.createElement('p')
            p5.style.color='white'
            p5.textContent=`Number of Repository : ${no_repos}`

            const p6=document.createElement('p')
            p6.style.color='white'
            p6.textContent=`Followers : ${no_followers}`

            const p7=document.createElement('p')
            p7.style.color='white'
            p7.textContent=`Following : ${no_following}`
             
            const app=document.getElementById('info')
            app.style.display='inline';
            app.style.height='370px'
            app.style.width=' 75%';
            app.style.backgroundColor=' rgb(0, 0, 0)';
            app.style.boxShadow='20px 20px 20px -20px rgb(0, 0, 0)'
            app.style.opacity='0.8'
            app.style.position='relative';
            app.style.top='40px';

            app.appendChild(p1)
            app.appendChild(p2)      
            app.appendChild(p3)      
            app.appendChild(p4)      
            app.appendChild(p5)      
            app.appendChild(p6)      
            app.appendChild(p7)      
            
            
        }
    }
    xhr.send()
    
})
