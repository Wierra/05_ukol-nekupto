const product1 = {
  image: 'images/destniklobouk.jpg',
  name: 'Deštníklobouk',
  description: 'Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.',
};

const product2 = {
  image: 'images/slepickabelka.jpg',
  name: 'Slepičkabelka',
  description: 'Nejlepší způsob jak zaujmout neotřelou módou v ulíčkách kolem Staroměstkého náměstí.',
};

const product3 = {
  image: 'images/anatoplavky.jpg',
  name: 'Anatoplavky',
  description: 'Aby muži na rozpálených plážích kromě vašeho těla obdivovali také vaše nitro.',
};

/*2. V souboru index.js si na posledním řádku do proměnné uložte kartu s prvním produktem. Pomocí metody classList.add přidejte na tento element třídu border-primary, abychom první produkt na stránce zvýraznili.*/
const card1 = document.querySelector("#product1")
card1.classList.add("border-primary")

/*Do jiné proměnné si uložte tlačítko na druhé kartě. Pomocí metody classList.remove odeberte třídu btn-primary a podívejte se, jak se tlačítko vizuálně změnilo.*/
const product2Button = document.querySelector("#product2 button")
product2Button.classList.remove("btn-primary")

/*Do další proměnné si uložte element s třídou card-title posledního produktu. Pomocí voláni metody classList.toggle přidejte na tento element třídu text-center. Text by se měl tímto zarovnat na střed. Vyzkoušejte si, že když tuto metodu zavoláte znova, třída se z prvku odstraní. Takto můžete přepínat mezi přidáním a odebráním třídy pomocí opakovaného volání této metody.*/
const card3 = document.querySelector("#product3 .card-title")
card3.classList.toggle("text-center")


const product1HTML = `
<img class="card-img-top" src="images/destniklobouk.jpg" alt="Card image cap">
<div class="card-body">
    <h2 class="card-title">Deštníklobouk</h2>
    <p class="card-text">Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.</p>
</div>
    <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>`

const elProduct1 = {
  image: "images/anatoplavky.jpg",
  name: "Divno muž",
  description: "Nečekaná přeháňka? No problem, vás už nikdy nezaskočí a nepřekvapí...",
  button: "Nekup to!"
}

const cardProduct1 = document.querySelector("#product1")
cardProduct1.innerHTML = `
<img class="card-img-top">${elProduct1.image}
<h2 class="card-title">${elProduct1.name}</h2>
<p class="card-text">${elProduct1.description}</p>
<button class="btn btn-lg btn-primary btn-block">${elProduct1.button}</butoon>`