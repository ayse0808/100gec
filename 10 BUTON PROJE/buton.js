
  let sayilar = [1, 3, 77, 4, 26, 16, 3, 74, 55, 10];

  const butonlar = document.querySelectorAll(".butonlar button");

  let tiklamaSayisi = 0;
  let toplam = 0;



  function karistir(dizi){
    for (let i = dizi.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [dizi[i], dizi[j]] = [dizi[j],dizi[i]];
    }
  }

  butonlar.forEach((buton, index) => {
    buton.addEventListener("click", () => {
      if (buton.disabled) return;

    



      buton.textContent = sayilar[index];
      buton.disabled = true;
      tiklamaSayisi++;
      toplam += sayilar[index];




      
      if (tiklamaSayisi === 3) {
        setTimeout(() => {
          if (toplam > 100) {
            alert("Tebrikler! Kazandınız ");
          } else {
            alert("Kaybettiniz! Tekrar deneyin.");
          }
          
          sifirla();
        }, 500); 
      }
    });
  });

  function sifirla() {
    tiklamaSayisi = 0;
    toplam = 0;
    butonlar.forEach(b => {
      b.textContent = "";     
      b.disabled = false;     
    });
  }



  karistir(sayilar);
