var timeout	= 1000;
var closetimer	= 0;
var ddmenuitem	= 0;

// open hidden layer
function menuopen(id)
{	
	// cancel close timer
	menucancelclosetime();

	// close old layer
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';

	// get new layer and show it
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.visibility = 'visible';

}
// close showed layer
function menuclose()
{
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}

// go close timer
function menuclosetime()
{
	closetimer = window.setTimeout(mclose, timeout);
}

// cancel close timer
function menucancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

// close layer when click-out
document.onclick = mclose; 

function simpleShowPuppyName(puppy)
{
    var puppyName = "";
    if (puppy == "1")
    {
    puppyName = "Baylee";
    document.getElementById('myid').style.color = "red";
    } else if (puppy == "2")
    {
    puppyName = "Gray";
    document.getElementById('myid').style.color = "blue"
    }
    return puppyName;          
}