const productsBtn = document.querySelectorAll('.card-button');
const cart = document.querySelector('.balance-heading');
const fullPrice = document.querySelector('.fullprice');
let balance = 0;
const priceWithoutSpaces = (str) => {
	return str.replace(/\s/g, '');
};
const normalPrice = (str) => {
	return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
};
const plusFullPrice = (currentPrice) =>{
    return balance += currentPrice;
};
const printFullPrice = () =>{
    fullPrice.textContent = `${normalPrice(balance)}$`;

};
productsBtn.forEach(el =>{
    el.addEventListener('click', (e) =>{
        let self = e.currentTarget;
		let parent = self.closest('.card');
        let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.balance-coin').textContent));
        plusFullPrice(priceNumber)
        console.log(balance);
        printFullPrice();
        // self.disabled = true;
    });
});




