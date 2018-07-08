function copyEmail(str) {
    copyToClipboard(str);
    el = document.getElementsByClassName('copy-notif');
    if (el[0].classList.contains('hidden-first')){
        el[0].classList.remove('hidden-first')
    }
    else {
        el[0].classList.toggle('hidden');
    }
    el[0].classList.toggle('fade-in');
    setTimeout(function(){
        el[0].classList.toggle('fade-in');
        el[0].classList.toggle('hidden');
    }, 2000);
}

function copyToClipboard(str) {
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}