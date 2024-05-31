function checkSpam(str)
{   str=str.toLowerCase();
    if(str.includes('viagra')||str.includes('xxx'))
        {
            alert('true');
        }
        else
        {
            alert('false');
        }
}
checkSpam('buy ViAgRA now')
checkSpam('free xxxxx') 
checkSpam("innocent rabbit")