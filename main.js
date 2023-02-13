const socialcreditbutton=document.getElementById("socialcreditbutton")
const socialcredittext=document.getElementById("socialcredittext")
var socialcredit=0
socialcreditbutton.onclick= function() {
    // socialcredit=socialcredit+1
    socialcredit++
    socialcredittext.innerHTML=`social credit: ${socialcredit}`
}
