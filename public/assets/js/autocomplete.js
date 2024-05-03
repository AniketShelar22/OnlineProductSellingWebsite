let availableKeywords = [
    "Men Belt",
    "Men footWear",
    "Men Pant",
    "Men ShortPant",
    "Men FullTshirt",
    "Men Tshirt",
    "Men JeansPant",
    "Men Wallet",
    "Men FormalShirt",
    "Men SportShoe",
    "Men Shirt",
    "Men Watch",
    "Men Sunglasses",
    "Men FormalShoe",
    "Men Shoe",
    "Men TrackPant",
    "Women bellies",
    "Women Saree",
    "Women JwellarySet",
    "Women flats",
    "Women earrings",
    "Women Bengle",
    "Women juti",
    "Women kurti",
    "Kids girlsFootware",
    "Kids NightWear",
    "Kids boysFootWare",
    "Kids game",
    "Kids hardToys",
    "Kids BottomWear",
    "Kids softToys",
    "Kids TopWear",
    "Mobile adapter",
    "Mobile powerBank",
    "Mobile storageDevice",
    "Mobile speaker",
    "Mobile typec",
    "Mobile wiredEarphone",
    "Mobile wirelessEarphone",
    "Mobile USB",
    "Mobile lightningcable",
    "Computer ethernet",
    "Computer HDD",
    "Computer monitor",
    "Computer wirelessMouse",
    "Computer pendrive",
    "Computer SSD",
    "Computer wiredMouse",
    "Computer wirelessKeyboard",
    "Computer HDMI",
    "Computer VGI",
    "Computer wiredKeyboard",
    "Bag laptopBag",
    "Bag travellingBag",
    "Bag menBag",
    "Bag womenBag",
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        // console.log(result);
    }
    display(result);

    if(!result.length){
        resultBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onClick = selectInput(this)>" + list + "</li>";
    })
    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = '';
}
