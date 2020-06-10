const urlEncode = function(text) {
    let url = 'https://www.google.com/search?q=';
    for (let i = 0; i < text.length; i++){
        if (text[i] === ' '){
            url = url + '%20';
        }
        else {
            url = url + text[i];
        }

    }
    return url;
  };
  
  console.log(urlEncode("best movies")); // best%20movies
  console.log(urlEncode(" Lotus Labs ")); // %20Lotus%20Labs%20
  console.log(urlEncode("blue is greener than purple for sure")); // blue%20is%20greener%20than%20purple%20for%20sure
  console.log(urlEncode('wachu wachu wa'));
  console.log(urlEncode('the man behind the slaughter windows xp'));
  console.log(urlEncode('hayasaka hey hey'));
  console.log(urlEncode('ishigami corriendo'));