function truncate(str,len)
{
    if(str.length > len)
        {
            return str.substring(0,len-1) + "…";
        }
    return str;
}
alert(truncate("What I'd like to tell on this topic is:", 20));
alert(truncate("Hi everyone!", 20));