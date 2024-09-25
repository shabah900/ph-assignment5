//          function for hide section and button color 
function hideDiv(toshow,tohide,green,white){
  document.getElementById(toshow).classList.remove('hidden');
  document.getElementById(tohide).classList.add('hidden');
  document.getElementById(green).classList.remove('bg-white');
  document.getElementById(green).classList.add('bg-lime-400');
  document.getElementById(white).classList.remove('bg-lime-400');



}


// blog page  

function goToBlogPage() {
    window.location.href = '/blog.html';
}
// donate button for Noakhali 
document.getElementById('btn-donate-noakhali').addEventListener('click', function (event) {
    event.preventDefault();
    const donateAmount = document.getElementById('donate-amount-noakhali').value;
    const mainInitial = document.getElementById('main-initial').innerText;
    if(parseFloat(donateAmount)<=0 || isNaN(parseFloat(donateAmount)) ){
        alert('Please Enter Valid Amount !!');
     }
     else{
    const totalPresent = parseFloat(mainInitial) - parseFloat(donateAmount);

    const noakhaliBeforeDonate = document.getElementById('noakhali-total-donate').innerText;
    const noakhaliTotalDonate = parseFloat(noakhaliBeforeDonate) + parseFloat(donateAmount);
    // update noakhali after donate 
    document.getElementById('noakhali-total-donate').innerText = noakhaliTotalDonate;

    //  update total  balance 
    document.getElementById('main-initial').innerText = totalPresent;
    document.getElementById('donate-amount-noakhali').value='' ;
    // history adding 
    const history=document.createElement('div');
    const bdTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka', hour12: true });
    history.innerHTML=` <div class="w-[400px] lg:w-[1024px] mx-auto p-6 bg-white border border-[#1111111A] rounded-lg   items-center space-x-4 mb-6">
        
          <p class="text-black font-normal text-lg"><span class="quota-tk"></span> Taka is Donated for Flood Relief in Noakhali,Bangladesh</p> <br>
              <p class="text-black font-normal text-lg">Time: ${bdTime}</p> 

        </div>` ;
        document.getElementById('history-container').appendChild(history);
        const quotaTk=history.querySelector('.quota-tk');
    quotaTk.innerText=donateAmount;
} 

})


// donate button for feni 
document.getElementById('btn-donate-feni').addEventListener('click', function (event) {
    event.preventDefault();
    const donateAmount = document.getElementById('donate-amount').value;
    const mainInitial = document.getElementById('main-initial').innerText;
    if(parseFloat(donateAmount)<=0 || isNaN(parseFloat(donateAmount)) ){
        alert('Please Enter Valid Amount !!');
     }
     else{
    const totalPresent = parseFloat(mainInitial) - parseFloat(donateAmount);

    const feniBeforeDonate = document.getElementById('feni-total-donate').innerText;
    const feniTotalDonate = parseFloat(feniBeforeDonate) + parseFloat(donateAmount);
    // update feni after donate 
    document.getElementById('feni-total-donate').innerText = feniTotalDonate;

    //  update total  balance 
    document.getElementById('main-initial').innerText = totalPresent;
    document.getElementById('donate-amount').value='' ;
    // history adding 
    const history=document.createElement('div');
    const bdTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka', hour12: true });
    history.innerHTML=` <div class="w-[400px] lg:w-[1024px] mx-auto p-6 bg-white border border-[#1111111A] rounded-lg   items-center space-x-4 mb-6">
        
          <p class="text-black font-normal text-lg"><span class="quota-tk"></span> Taka is Donated for Flood Relief in Feni,Bangladesh</p> <br>
              <p class="text-black font-normal text-lg">Time: ${bdTime}</p> 

        </div>` ;
        document.getElementById('history-container').appendChild(history);
        const quotaTk=history.querySelector('.quota-tk');
    quotaTk.innerText=donateAmount;
}
    
})    

               // donate button for Quota 
document.getElementById('btn-donate-quota').addEventListener('click', function (event) {
    event.preventDefault();
    const donateAmount = document.getElementById('donate-amount-quota').value;
    const mainInitial = document.getElementById('main-initial').innerText;
     if(parseFloat(donateAmount)<=0 || isNaN(parseFloat(donateAmount)) ){
        alert('Please Enter Valid Amount !!');
     }
     else{
        const totalPresent = parseFloat(mainInitial) - parseFloat(donateAmount);

        const quotaBeforeDonate = document.getElementById('quota-total-donate').innerText;
        const quotaTotalDonate = parseFloat(quotaBeforeDonate) + parseFloat(donateAmount);
        // update quota after donate 
        document.getElementById('quota-total-donate').innerText = quotaTotalDonate;
    
        //  update total  balance 
        document.getElementById('main-initial').innerText = totalPresent;
        document.getElementById('donate-amount-quota').value='' ;
    
        // history adding 
        const history=document.createElement('div');
        const bdTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka', hour12: true });
        history.innerHTML=` <div class="w-[400px] lg:w-[1024px] mx-auto p-6 bg-white border border-[#1111111A] rounded-lg   items-center space-x-4 mb-6">
            
              <p class="text-black font-normal text-lg"><span class="quota-tk"></span> Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</p> <br>
                  <p class="text-black font-normal text-lg">Time: ${bdTime}</p> 
    
            </div>` ;
            document.getElementById('history-container').appendChild(history);
            const quotaTk=history.querySelector('.quota-tk');
        quotaTk.innerText=donateAmount;
     }
    
    

})
