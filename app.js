const home = document.getElementById('container').innerHTML
const controls = document.getElementById('controls').innerHTML
display_saved_note();
document.getElementById('home').onclick = function() 
{

    document.getElementById('container').innerHTML = home;
    document.getElementById('controls').innerHTML = controls
    document.getElementById('menu').className = 'hiddenmenu'
    display_saved_note();
}


window.onload = function() 
{
    document.getElementById('menulink').onclick = function() 
    {
        const menu = document.getElementById('menu')
        
        if(menu.className != 'shownmenu') 
        {
            menu.className = 'shownmenu'
    	}
        else 
        {
            menu.className = 'hiddenmenu'
        }
    }
}


function check_web_storage_support() 
{
    if(typeof(Storage) !== "undefined") 
    {
        return(true)
    }

    else 
    {
        alert("Web storage unsupported!")
        return(false);
    }
}

function display_saved_note() 
{
    if(check_web_storage_support() == true) 
    {
        result = localStorage.getItem('note')
    }
    if(result === null) 
    {
        result = "No note saved"
    }
    
    document.getElementById('area').value = result

}

function save() 
{
    if(check_web_storage_support() == true) 
    {
        const area = document.getElementById("area")
        if(area.value != '') 
        {
            localStorage.setItem("note", area.value)
        }
        else 
        {
            alert("Nothing to save")
        }
    }
}
function clear() {
    document.getElementById('area').value = ""
}