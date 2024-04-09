var curent=0;
var requir=1;
 function myFunction()
{
    var img=document.getElementById('myImage');
    curent +=1;
    console.log(curent);
    if(requir ==curent)
    {
        // img.src="lampon.gif";
        requir +=1;
        curent = 0;
        console.log(img.src, "img-src")
        if(img.src.includes("lampon.gif"))
        {
            img.src=("lamp.gif");
            console.log(img);
        }
        else{
            img.src="lampon.gif";
        }
    }
}