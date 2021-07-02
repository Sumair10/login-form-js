var user= document.getElementById("user")
var pass= document.getElementById("formGroupExampleInput2")
var email= document.getElementById("formGroupExampleInput3")
var male= document.getElementById("inlineRadio1")
var female= document.getElementById("inlineRadio2")
var button= document.getElementById("button")
var arr =[]

button.addEventListener('click', function add(e)
{
    if(user.value==="" || pass.value ==="" || email.value === "" || ( male.checked ===false && female.checked===false))
    {
        alert("please fill missing fields")
        e.preventDefault()
    }
    else if (  arr.find(function(o)
    {
        if(o.Username === user.value && o.Password === pass.value && o.Email === email.value)
        {
        return true
        }
    }))
    {
        alert("duplicate data found")
        e.preventDefault()
    }
    else
    {
        var data ={
            Username : user.value,
            Password : pass.value,
            Email : email.value,
            gender : gender()
        }
        arr.push(data)
        console.log(data)
        console.log(arr)
        e.preventDefault()
        alert("Submitted successfully")
    }
})

function gender()
{
    if(male.checked)
    {
        return male.value
    }
    else if (female.checked)
    {
        return female.value
    }

}
