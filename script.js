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