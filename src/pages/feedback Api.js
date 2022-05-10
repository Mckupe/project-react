async function postData(url = '') {
    try {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(document.getElementsByClassName("inpField").value)
        });
    } catch (err) {
        console.log(err);
    }
}

export {postData};