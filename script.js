const xhr = new XMLHttpRequest()
const url = `https://jsonplaceholder.typicode.com/posts?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`
xhr.open('GET', url)

xhr.onreadystatechange  = () => {
    if( xhr.status === 200 && xhr.readyState === 4) {
        const objectResponse = JSON.parse( xhr.responseText )
        console.log(objectResponse)
        var output = objectResponse[0].title
        console.log(output)
        document.querySelector('#BOX').innerHTML = output
    }
}
xhr.send()