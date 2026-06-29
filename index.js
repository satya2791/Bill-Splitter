const button = document.querySelector('.start-btn');

button.addEventListener("click", function () {

    const person = document.getElementById('person').value;
    const amount = document.getElementById('amount').value;
    const percentage = document.getElementById('percentage').value;

    const tip_cal =
        Number(amount) +
        (Number(amount) * Number(percentage) / 100);

    const final_amount =
        Number(tip_cal) / Number(person);

    document.getElementById('output').textContent =
        "Everyone pays ₹" + final_amount.toFixed(2);

});