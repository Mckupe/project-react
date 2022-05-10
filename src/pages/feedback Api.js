async function postData(url = 'Url моего будующего сервера') {
    const values = [].slice.call(document.getElementsByClassName("inpField")).map((n) => {return n.value})
    console.log('try to post massage from : ' + values);
    try {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });
    } catch (err) {
        console.log(err);
    }
}

export {postData};