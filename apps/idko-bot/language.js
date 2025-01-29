const elements = document.getElementsByTagName('span');

async function changeLanguage(lang)
{    
    for(let i = 0; i < elements.length; i++)
    {
        let txt = elements[i].attributes.txt;
        console.log(lang,txt);
        if(txt === undefined) continue;

        let textID = txt.value;
        let text = texts[textID][lang];
        elements[i].innerText = text;
    }
    location.hash = lang;
    changeIcon(lang);
}
