//Element Selectors
const ram1Btn = document.querySelector('#ram8');
const ram2Btn = document.querySelector('#ram16');
const ssd1Btn = document.querySelector('#ssd256');
const ssd2Btn = document.querySelector('#ssd512');
const ssd3Btn = document.querySelector('#ssd1');
const deli1Btn = document.querySelector('#deliFree');
const deli2Btn = document.querySelector('#deliCharge');
const promoBtn = document.querySelector('#apply');
const promoInput = document.querySelector('input');
const memoryCost = document.querySelector('#memoryCost');
const storageCost = document.querySelector('#storageCost');
const deliCost = document.querySelector('#deliCost');
const total   = document.querySelector('#totalCost');
const grandTotal   = document.querySelector('#gTotal');
const error   = document.querySelector('h4');

//Global Variable
let bestPrice = 1299;
let memoryPrice = 0;
let storagePrice = 0;
let deliPrice = 0;
//Event Listeners
ram1Btn.addEventListener('click', memoryCostReduce);
ram2Btn.addEventListener('click', memoryCostAdd);
ssd1Btn.addEventListener('click', storageCostReduce);
ssd2Btn.addEventListener('click', storageCostAdd);
ssd3Btn.addEventListener('click', storageCostAddMore);
deli1Btn.addEventListener('click', deliCostReduce);
deli2Btn.addEventListener('click', deliCostAdd);
promoBtn.addEventListener('click', checkPromoCode);
//Functions
function sumTotal(){
	const sum = bestPrice + memoryPrice + storagePrice + deliPrice;
	memoryCost.textContent = '$' + memoryPrice;
	storageCost.textContent = '$' + storagePrice;
	deliCost.textContent = '$' + deliPrice;
	total.textContent = '$' + sum;
	grandTotal.textContent = '$' + sum;
}
function memoryCostReduce(){
	memoryPrice = 0;
	sumTotal();
}
function memoryCostAdd(){
	memoryPrice = 180;
	sumTotal();
}
function storageCostReduce(){
	storagePrice = 0;
	sumTotal();
}
function storageCostAdd(){
	storagePrice = 100;
	sumTotal();
}
function storageCostAddMore(){
	storagePrice = 180;
	sumTotal();
}
function deliCostReduce(){
	deliPrice = 0;
	sumTotal();
}
function deliCostAdd(){
	deliPrice = 20;
	sumTotal();
}
function checkPromoCode(){
	if(promoInput.value === 'discount'){
		bestPrice = 1299 - (1299 * (15/100));
		promoInput.value = '';
		sumTotal();
	} else{
		error.textContent = 'Invalid Promo Code'
		setTimeout(function(){ error.textContent = ''}, 3000)
	}
}