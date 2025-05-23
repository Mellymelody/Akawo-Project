const paymentForm = document.getElementById('paymentForm');

const header = document.getElementById("h");

const confirm = sessionStorage.getItem("logins");


paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(e) {
  e.preventDefault();

  let handler = PaystackPop.setup({
    key: 'pk_test_9682a6c2b37871ddee23419cd7d85770028cfb88', // Replace with your public key
    email: document.getElementById("email-address").value,
    amount: document.getElementById("amount").value * 100,
    currency: 'NGN',
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });

  handler.openIframe();
}


function pageload() {
    if(confirm){
        const sessionUser = JSON.parse(confirm)
        header.innerHTML = sessionUser.username
    }
    
}
