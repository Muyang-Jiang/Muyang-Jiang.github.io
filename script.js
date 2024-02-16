document.getElementById('showDate').addEventListener('click', function() {
    const dateElement = document.getElementById('date');
    const currentDate = new Date();
    dateElement.innerText = `Today's date is: ${currentDate.toDateString()}`;
});
