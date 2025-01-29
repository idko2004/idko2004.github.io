if(location.hash === '')
{
    if(navigator.language.startsWith('es')) location.hash = '#es';
    else location.hash = '#en';
}

if(location.hash === '#es') changeLanguage('es');
else changeLanguage('en');
