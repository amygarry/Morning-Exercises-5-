var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
]



function guesseTheGift (wishlist, presents){
 
  for (let i = 0; i < wishlist.length; i++) {
    let wsize = wishlist[i].size
    let wclatter = wishlist[i].clatters
    let wweight = wishlist[i].weight
    let psize = presents[i].size
    let pclatter = presents[i].clatters
    let pweight = presents[i].weight
    let presentName = wishlist[i].name 
    if(wsize === psize && wclatter === pclatter && wweight === pweight)
    return presentName
  }
    
   }
console.log(guesseTheGift(wishlist,presents))