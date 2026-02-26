let gross_income = -2

if (gross_income <=5999 && gross_income >= 0) {
    console.log(150)
} else if (gross_income >= 6000 && gross_income <= 7999) {
    console.log(300)
} else if (gross_income >= 8000 && gross_income <=11999) {
    console.log(400)
} else if (gross_income >= 12000 && gross_income <= 14999) {
    console.log(500)
} else if (gross_income >= 15000 && gross_income <= 19999) {
    console.log(600)
} else if (gross_income >= 20000 && gross_income <= 24999) {
    console.log(750)
} else if (gross_income >= 25000 && gross_income <= 29999) {
    console.log(850)
} else if (gross_income >= 30000 && gross_income <= 49999) {
    console.log(1000) 
} else if (gross_income >= 50000 && gross_income <= 99999) {
    console.log(1500)
} else if (gross_income >= 100000) {
    console.log(2000)
} else {
    console.log("Invalid gross income")
}