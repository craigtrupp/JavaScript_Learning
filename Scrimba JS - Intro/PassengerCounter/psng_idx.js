

let count = 0

function increment(){
    count += 1
    document.getElementById('count-el').textContent = count
    console.log(count)
}

function save(){
    //alert('The final count is : ' + count.toString())
    document.getElementById('save-el').textContent += count.toString() + " - "
    console.log('The final count is : ' + count.toString())
    document.getElementById('count-el') = 0
    count = 0   
}


console.log(4 + 5) // 9
console.log("2" + "4") // "24"
console.log("5" + 1) // "51"
console.log(100 + "100") // "100100"