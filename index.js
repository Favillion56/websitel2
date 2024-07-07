window.addEventListener('load' , function(event){
    PrintText()
    PrintinputText()
    Sendcontactdetails()
})

function PrintText(){
    const button = document.getElementById('click btn')
        button.addEventListener ('click' , () => {
        const gitprofile = document.getElementById ('gitprofile')
        const company = document.getElementById ('company')
        const website = document.getElementById ('website')

        fetch("https://api.github.com/users/Favillion56")
        .then((Response) => Response.json())
        .then((data) => {
            console.log("data we collected", data)
            gitprofile.innerHTML = data.login
            company.innerHTML = data.blog
            website.innerHTML = data.website
        })
})


}
