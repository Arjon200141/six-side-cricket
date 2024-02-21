function getConvertedValue(id){
    const values =document.getElementById(id).innerText;
    const convertedValue = parseInt(values)
    return convertedValue;
}

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
    })
}
