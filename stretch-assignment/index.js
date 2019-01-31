let total = 0

function begin() {

let timer = setInterval(function(){ 
    if (total > 10000) {
      document.querySelectorAll('.digits')
      .forEach(link=> link.style.color = "red" )
      clearInterval(timer)
    } else {
      if (total % 10000 === 0) {
        document.getElementById('secondTens').textContent = (total / 10000)
      }
    
      if (total % 1000 === 0) {
        document.getElementById('secondOnes').textContent = ((total / 1000) % 10)
      }
    
      if (total % 100 === 0) {
        document.getElementById('msHundreds').textContent = ((total / 100) % 10)
      }
    
      if (total % 10 === 0) {
        document.getElementById('msTens').textContent = ((total / 10) % 10)
      }
    
      total += 10
    }
    
  }, 10);

}  

let btn = document.querySelector("button");

btn.addEventListener('click', function() {
  begin()
})