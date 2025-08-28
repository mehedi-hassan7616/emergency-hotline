function numberParseInt(value,id) {
  return parseInt(document.getElementById(id).innerText);

}


// heart-count 
// and love increase


 const hearts= document.getElementsByClassName("heart");
for (const heart of hearts) {
  heart.addEventListener("click", function (e) {
    e.preventDefault();
    const loveCount = parseInt(document.getElementById("love-count").innerText);

   const totalLoveCount = parseInt(loveCount+1);
    document.getElementById("love-count").innerText = totalLoveCount  ;
  });
}