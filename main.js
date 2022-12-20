let len=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let a=[];
let b=[]
let c=0;
let d=0;
for(i=0;i<len.length;i++){
if(len[i]%2==0){
    b[d]=len[i];
    d++;
}
else{
    a[c]=len[i];
    c++;
}
}
document.write(b+"<br>");
document.write(a);

