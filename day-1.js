function countNotes(amount) {
    let a  = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    let notesCount = {};
  
    for (let b of a) {
     let count = Math.floor(amount / b);
      if (count > 0) {
        notesCount[b] = count;
        amount -= count * b;
      }
    }
  
    return notesCount;
  }
  
  let  totalAmount = 256039;
  let notesCount = countNotes(totalAmount);
  
  console.log("Amount:", totalAmount);
  console.log("a:");
  
  for (let b in notesCount) {
    console.log(b + ": " + notesCount[b]);
  }
  