let activities = [["Ажил","-" ,"10"], ["Идэх" ,"-" ,"1"], ["Ярилцах", "-", "2"], ["Тоглох", "-", "3"],["Унтах", "-" ,"8"]];
console.table(activities)
console.log(activities)

let data = [];
for (let i=0; i<activities.length; i++) {
    data[i][i+1] = activities[i][3] * 100 /24 
}
console.table(data)