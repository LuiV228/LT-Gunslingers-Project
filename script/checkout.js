let checkout = JSON.parse(localStorage.getItem('cart')) || []
let checkoutItems = Object.groupBy(checkout, item=> item.id)
let totalPrice= 0;
let cTable = document.querySelector('[checkout-table]')
function displayCheckout(){
    cTable.innerHTML = ''
    if(checkoutItems){
        for(let i in checkoutItems){
            cTable.innerHTML += `
              <tr>
                <td class="w-25" id="tableSpacing"><img src="${checkoutItems[i][0].image}" id="checkoutImage"></td>
                <td id="tableSpacing">${checkoutItems[i][0].name}</td>
                <td id="tableSpacing">${checkoutItems[i][0].category}</td>
                <td id="tableSpacing">${checkoutItems[i].length}</td>
                <td id="tableSpacing">R${checkoutItems[i][0].price * checkoutItems[i].length}</td>
              </tr>
            `
        totalPrice += +checkoutItems[i][0].price * checkoutItems[i].length;
        }
        document.getElementById("totalPrice").textContent = `${totalPrice}`;

    }else{
    cTable.innerHTML = 'Add Items'
    }
}

displayCheckout()

let btn1 = document.querySelector(`[data-removeAllItems]`)
function removeAllItems(){
    localStorage.removeItem('cart')
    location.reload()
}
btn1.addEventListener('click', removeAllItems)

let btn2 = document.querySelector(`[data-purchase]`)
function purchase(){
    if (totalPrice == 0) {
        alert(`Go bye a gun man!`)
        location.href=`/html/products.html`
    }else {
        alert(`Thanks for your purchase and keep shooting!`)
        localStorage.removeItem('cart')
        location.reload()
    }
}
btn2.addEventListener('click', purchase)






