let n = prompt("enter a number");
let n0,n1,n2,n3,n4,n5,n6,n7,n8,n9;
n0=n1=n2=n3=n4=n5=n6=n7=n8=n9=0;
for (let i = 0; i < n.length; i++) {
  if(n[i]== 0) n0 ++;
  if(n[i]== 1) n1 ++;
  if(n[i]== 2) n2 ++;
  if(n[i]== 3) n3 ++;
  if(n[i]== 4) n4 ++;
  if(n[i]== 5) n5 ++;
  if(n[i]== 6) n6 ++;
  if(n[i]== 7) n7 ++;
  if(n[i]== 8) n8 ++;
  if(n[i]== 9) n9 ++;
}
console.log("0: ",n0,"\n","1: ",n1,"\n","2: ",n2,"\n","3: ",n3,"\n","4: ",n4,"\n","5: ",n5,"\n","6: ",n6,"\n","7: ",n7,"\n","8: ",n8,"\n","9: ",n9)
