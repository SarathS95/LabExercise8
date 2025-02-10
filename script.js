function getRandomInt(max) {
    const randomnumber= Math.floor(Math.random() *max)+1;
    document.getElementById("demo").innerText= randomnumber
  }

  console.log(getRandomInt(6))
  console.log(getRandomInt(600))
  console.log(getRandomInt(842))