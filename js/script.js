const input = document.querySelector('#inputText');
const qr = document.querySelector('.qr');
const qrcode = new QRCode(qr);

input.addEventListener('blur', () => {
  if(input.value === ''){
    return;
  }else{
    qrcode.makeCode(input.value);
  }
})

input.addEventListener('keydown', (event) => {
  if(input.value === ''){
    return;
  }else{
    if (event.key === 'Enter'){
      qrcode.makeCode(input.value);
    }
  }
})


