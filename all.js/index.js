
// blog page  

function goToBlogPage() {
    window.location.href = '/blog.html';
}
// donate button for Noakhali 
document.getElementById('btn-donate-noakhali').addEventListener('click', function (event) {
    event.preventDefault();
    const donateAmount = document.getElementById('donate-amount-noakhali').value;
    const mainInitial = document.getElementById('main-initial').innerText;

    const totalPresent = parseFloat(mainInitial) - parseFloat(donateAmount);

    const noakhaliBeforeDonate = document.getElementById('noakhali-total-donate').innerText;
    const noakhaliTotalDonate = parseFloat(noakhaliBeforeDonate) + parseFloat(donateAmount);
    // update noakhali after donate 
    document.getElementById('noakhali-total-donate').innerText = noakhaliTotalDonate;

    //  update total  balance 
    document.getElementById('main-initial').innerText = totalPresent;
    document.getElementById('donate-amount-noakhali').value='' ;
})


// donate button for feni 
document.getElementById('btn-donate-feni').addEventListener('click', function (event) {
    event.preventDefault();
    const donateAmount = document.getElementById('donate-amount').value;
    const mainInitial = document.getElementById('main-initial').innerText;

    const totalPresent = parseFloat(mainInitial) - parseFloat(donateAmount);

    const feniBeforeDonate = document.getElementById('feni-total-donate').innerText;
    const feniTotalDonate = parseFloat(feniBeforeDonate) + parseFloat(donateAmount);
    // update feni after donate 
    document.getElementById('feni-total-donate').innerText = feniTotalDonate;

    //  update total  balance 
    document.getElementById('main-initial').innerText = totalPresent;
    document.getElementById('donate-amount').value='' ;
})    

// donate button for Quota 
document.getElementById('btn-donate-quota').addEventListener('click', function (event) {
    event.preventDefault();
    const donateAmount = document.getElementById('donate-amount-quota').value;
    const mainInitial = document.getElementById('main-initial').innerText;
     if(parseFloat(donateAmount)<=0 || isNaN(parseFloat(donateAmount)) ){
        alert('Please Enter Valid Amount !!');
     }
    const totalPresent = parseFloat(mainInitial) - parseFloat(donateAmount);

    const quotaBeforeDonate = document.getElementById('quota-total-donate').innerText;
    const quotaTotalDonate = parseFloat(quotaBeforeDonate) + parseFloat(donateAmount);
    // update quota after donate 
    document.getElementById('quota-total-donate').innerText = quotaTotalDonate;

    //  update total  balance 
    document.getElementById('main-initial').innerText = totalPresent;
    document.getElementById('donate-amount-quota').value='' ;
})
