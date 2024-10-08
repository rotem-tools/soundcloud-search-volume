document.getElementById('esvForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const plays1 = parseInt(document.getElementById('plays1').value);
    const plays2 = parseInt(document.getElementById('plays2').value);
    const plays3 = parseInt(document.getElementById('plays3').value);
    const followers = parseInt(document.getElementById('followers').value);

    // Fixed alpha and beta values
    const alpha = 0.7;
    const beta = 0.3;

    // Calculate average plays
    const averagePlays = (plays1 + plays2 + plays3) / 3;

    // Calculate ESV
    let esv = alpha * averagePlays + beta * followers;

    // Round up to the nearest thousand
    esv = Math.ceil(esv / 1000) * 1000;

    // Display the result as Monthly ESV
    document.getElementById('result').innerText = `Monthly Estimated Search Volume (ESV): ${esv}`;
});