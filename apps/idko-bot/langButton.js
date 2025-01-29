const translationIcon = document.getElementById('translation-icon');

translationIcon.addEventListener('click', setTheOtherLanguageAndIcon);

function setTheOtherLanguageAndIcon()
{
    loadingIcon();

    if(location.hash === '#es') setTimeout(function(){changeLanguage('en');},20);
    else setTimeout(function(){changeLanguage('es');},20);
}

function loadingIcon()
{
    translationIcon.attributes.src.value = 'img/loading.png';
}

async function changeIcon(flag)
{
    let img;

    if(flag === 'en') img = 'img/spain.png';
    else img = 'img/united-kingdom.png'

    translationIcon.attributes.src.value = img;
}
