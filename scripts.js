
function translatePigLatin(str) {
  var lowstr=str.toLowerCase();
  var result;
  if(isVowel(str[0]))
     {
     result=lowstr+"way";
     }
  else if(isVowel(str[1]))
    {
      var temp=lowstr.split("");
    var tempchar=temp.splice(0,1);
      temp.push(tempchar+"ay");
      result=temp.join("");
    }else if(isVowel(str[2]))
      {
              var temp1=lowstr.split("");
    var tempchar1=temp1.splice(0,2);
      temp1.push(tempchar1+"ay");
      result=temp1.join("");
        result=result.replace(",","");
      }
  return result;
}
function isVowel(str)
{
  result=false;
  if(str=="a"||str=="e"||str=="i"||str=="o"||str=="u")
    {
      result=true;
    }
  return result;
}
translatePigLatin("glove");
