function tax(income)
{
    if(income < 150000)
    {
        tax = income * 0;
    }
    else if(income >= 150000 && income <= 300000)
    {
        tax = ((income - 150000) * 5)/100;
    }
    else if (income >= 300000 && income <= 500000)
    {
   
        tax = ((income - 300000) * 10)/100 + (150000 * 5)/100
    }
    else if(income > 500000)
    {
        tax = ((income - 500000) * 15)/100 +  (200000 * 10)/100 +(150000 * 5)/100;
    }
    return tax;
}

alert(tax(600000));


function taxCalculator(income) {
    let currentTax = 0;
    let currentIncome = 0;
    if (income > 150000 && income <= 300000) {
      //Step 1 -- 5%
      currentTax += (income - 150000) * 0.05;
    } else if (income > 300000 && income <= 500000) {
      // Call currentIncome
      currentIncome = income - 300000;
      // Step 1 -- 5%
      currentTax += (300000 - 150000) * 0.05;
      // Step 2 -- 10%
      currentTax += currentIncome * 0.1;
    } else if (income > 500000) {
      // Call currentIncome
      currentIncome = income - 500000;
      // Step 1 -- 5%
      currentTax += (300000 - 150000) * 0.05;
      // Step 2 -- 10%
      currentTax += (500000 - 300000) * 0.1;
      //Step 3 -- 15%
      currentTax += currentIncome * 0.15;
    }
    return currentTax;
  }