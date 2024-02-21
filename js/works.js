function getConvertedValue(id){
    const values =document.getElementById(id).innerText;
    const convertedValue = parseInt(values)
    return convertedValue;
}

//Append Selected Players
const allBtn = document.getElementsByClassName('add-btn');
for(let btn of allBtn)
{
    btn.addEventListener('click' , function(event){
        const name =event.target.parentNode.parentNode.childNodes[1].innerText;
        const price = event.target.parentNode.parentNode.childNodes[3].childNodes[0].innerText;
        const category = event.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
        
        const selectPlayers = document.getElementById('selected-players');
        const div = document.createElement('div');
        div.classList.add('selected-players')

        
        //Limit
        const cartCount = getConvertedValue('cart-count');
        if(cartCount + 1 > 6)
        {
            alert('You have exceeded your limit');
            return;
        }

        //Disabled
        event.target.setAttribute('disabled' , true);
        event.target.parentNode.parentNode.style.backgroundColor = 'gray'


        //Budget Count
        const budget = getConvertedValue('budget')
        document.getElementById('budget').innerText = budget - parseInt(price);
       
        //Cart Count
        const cart = getConvertedValue('cart-count')
        document.getElementById('cart-count').innerText = cart+1;
        
        //Left Count
        const left = getConvertedValue('left-count')
        document.getElementById('left-count').innerText = left-1;

        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')

        p1.innerText = name;
        p2.innerText = price;
        p3.innerText = category;

        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);

        selectPlayers.appendChild(div);
        updatedTotalCost(price);
        updatedGrandTotal();
    })
}

//Total Cost
function updatedTotalCost(value){
    const totalCost = getConvertedValue('total-cost');
    const sum = totalCost + parseInt(value);
    document.getElementById('total-cost').innerText = sum;
}

//Grand Total
function updatedGrandTotal(status){
    let totalCost = getConvertedValue('total-cost');
    if(status == undefined){
        document.getElementById('grand-total').innerText = totalCost;
    }
    else{
        const couponCode =  document.getElementById('coupon-input').value;
        
        if(couponCode == 'player420')
        {
            const discount = totalCost * 0.2;
            totalCost = totalCost - discount;
            document.getElementById('grand-total').innerText = totalCost;
        }
        else{
            alert('Please Enter Valid Coupon Code');
        }
    }
}


