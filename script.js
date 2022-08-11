const xhr = new XMLHttpRequest()
const url = `https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`
xhr.open('GET', url)

xhr.onreadystatechange  = () => {
    if( xhr.status === 200 && xhr.readyState === 4) {
        const objectResponse = JSON.parse( xhr.responseText )
        console.log(objectResponse)
        var output = ''
        for(let i=0; i < objectResponse.length; i++) {
                output += `
               <div style="width: 30%; margin:0.5em; padding:3% ;background-color: rgba(238, 244, 243, 0.323); border-radius: 35px;>
                <h1>${objectResponse[i].title}</h1>
                    ${objectResponse[i].body} 
               </div>
            `
        }
        console.log(output)
        document.querySelector('#BOX').innerHTML = output
    }
}
xhr.send()

//navbar Slide
const navslide=()=>{
    const burger =document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
    });
}



//blog creater
    const create=document.getElementById('create');
    const title=document.getElementById('input_title');
    const body=document.getElementById('input_body');

    create.addEventListener('click',()=>{
    const div = document.createElement('div')
    const div2 = document.createElement('div')
    div.setAttribute('class', 'title_blog')
    div2.setAttribute('class', 'body_blog')
    div.textContent = title.value;
    div2.textContent = body.value;
    console.log(div)
    div.appendChild(div2);
    document.getElementById('BOX').prepend(div)

    })


navslide();
