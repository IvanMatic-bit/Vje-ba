var a,b,c;
var O,P,R1;


function IzracunajObim()
{
    PrezuzmiVrijednosti()
    O = a+b+c;
    document.getElementById("Obim").innerText = O;
    console.log(a,b,c); 
}

function IzracunajPovrsinu()
{
    PrezuzmiVrijednosti()
    P = (a*b)/2;
    document.getElementById("Povrsina").innerText = P;
    console.log(a,b,c); 
}

function IzracunajOpisanuKr()
{
    PrezuzmiVrijednosti()
    R1= a+b-c;
    document.getElementById("OpKr").innerText= R1;
}

function PrezuzmiVrijednosti()
{
    a = parseInt(document.getElementById("a").value);
    b = parseInt(document.getElementById("b").value);
    c = parseInt(document.getElementById("c").value);
}

function Proslijedi(e,f,g)
{

    console.log(e,f,g);
}

function Pitagora()
{
     a = parseInt(document.getElementById("a").value);
    b = parseInt(document.getElementById("b").value);
    c = parseInt(document.getElementById("c").value);
    console.log(a,b,c);
    if(isNaN(a) && b > 0 && c>0)
    {
        console.log("trazi se a");
        //treba izracunati a
       // a = Math.sqrt((c*c)-(b*b));
        console.log("Racuna se a = ",Math.sqrt(c*c-b*b));
    }
     if(a != NaN && isNaN(b) && c!= NaN)
    {
        //izracunati b
        console.log("trazi se b");
        console.log("Racuna se b= ",Math.sqrt((c*c)-(a*a)));
    }
     if(a != NaN && b !=NaN && isNaN(c))
    {
        //izracnuati c
        console.log("trazi se c");
        c = Math.sqrt((a*a)+(b*b));
        console.log("Racuna se c = ",c);
    }
    else{
        console.log("Nisu unijete potrebne vrijednosti");
    }
}

