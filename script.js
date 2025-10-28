 document.getElementById('btn').addEventListener('click', function() {
    // Read the current values *when the button is clicked*
    const textValue = document.getElementById('text').value; 
    const delayValue = document.getElementById('delay').value;

    // Convert delayValue to a number (it comes as a string)
    // The delay is in milliseconds, so we multiply by 1000
    const delayInMilliseconds = delayValue ; 

    setTimeout(() => {
        //console.log("Text:", textValue);
        //console.log("Delay:", delayValue);
        // Assuming there is an element with the id 'output'
        document.getElementById("output").innerText = textValue;
    }, delayInMilliseconds); 
});