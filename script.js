/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div



// Get number of people from number of people div
let bill = document.getElementById('billTotalInput')
let tip = document.getElementById('tipInput')
let count =  document.getElementById('numberOfPeople')
let amount = document.getElementById('perPersonTotal')


// ** Calculate the total bill per person **
const calculateBill = () => {
    // get bill from user input & convert it into a number
   
  
    // get the tip from user & convert it into a percentage (divide by 100)
    
  
    // get the total tip amount
    
  
    // calculate the total (tip amount + bill)
    
  
    // calculate the per person total (total divided by number of people)
  
  
    // update the perPersonTotal on DOM & show it to user
    let nBill =Number(bill.value)
    let nTip = Number(tip.value)
    tipAmount = Number(nBill*nTip/100);
    let totalAmount = nBill + tipAmount;
    let nCount = Number(count.innerText)
    let perPersonAmout = totalAmount/nCount;
    amount.innerText = perPersonAmout
    //console.log(nCount + " " +tipAmount + " " + totalAmount + " " + perPersonAmout)
  }
  
  // ** Splits the bill between more people **
  const increasePeople = () => {
    // increment the amount of people
  
    let currCount = Number(count.innerText)
    // update the DOM with the new number of people
  
  
    // calculate the bill based on the new number of people
    count.innerText = currCount+1
    calculateBill()
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
  
    
    // decrement the amount of people
    let currCount = Number(count.innerText)
    if(currCount==1)
    return

    count.innerText = currCount-1
  
    // update the DOM with the new number of people
  
  
    // calculate the bill based on the new number of people
    calculateBill()
  }