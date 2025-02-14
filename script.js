function refresh(){
    window.location.reload()
}
function tester(){
    fetch('collection.json')
.then(response => response.json())
.then(data => {
    console.log(data)
    j = [data[0], data[1], data[2], data[3]]
    const contentDiv = document.getElementById('content');
    j.forEach(item => {
        const card = document.createElement('section');
        card.innerHTML = `
            <h2>${item.title}</h2> 
            <img src="${item.imageUrl}" alt="${item.altText}" style="width:20%;">
            <p><strong>Team: ${item.Team}</strong></p>
            <p>${item.text}  <a href = "${item.wikiLink}" target = "_blank">Read More</a></p>`;
        card.style = 'display: block'
        contentDiv.appendChild(card);
        console.log(card)
    });
})
.catch(error => console.error('Error loading the data:', error));
}

function tester2(){
    fetch('collection.json')
.then(response => response.json())
.then(data => {
    console.log(data)
    j = [data[4], data[5], data[6], data[7]]
    const contentDiv = document.getElementById('content');
    j.forEach(item => {
        const card = document.createElement('section');
        card.innerHTML = `
            <h2>${item.title}</h2> 
            <img src="${item.imageUrl}" alt="${item.altText}" style="width:20%;">
            <p><strong>Team: ${item.Team}</strong></p>
            <p>${item.text}  <a href = "${item.wikiLink}" target = "_blank">Read More</a></p>`;
        card.style = 'display: block'
        contentDiv.appendChild(card);
        console.log(card)

    });
})
.catch(error => console.error('Error loading the data:', error));
}

function tester3(){
    fetch('collection.json')
.then(response => response.json())
.then(data => {
    console.log(data)
    j = [data[8], data[9], data[10], data[11]]
    const contentDiv = document.getElementById('content');
    j.forEach(item => {
        const card = document.createElement('section');
        card.innerHTML = `
            <h2>${item.title}</h2> 
            <img src="${item.imageUrl}" alt="${item.altText}" style="width:20%;">
            <p><strong>Team: ${item.Team}</strong></p>
            <p>${item.text}  <a href = "${item.wikiLink}" target = "_blank">Read More</a></p>`;
        card.style = 'display: block'
        contentDiv.appendChild(card);
        console.log(card)

    });
})
.catch(error => console.error('Error loading the data:', error));
}

function tester4(){
    fetch('collection.json')
.then(response => response.json())
.then(data => {
    console.log(data)
    j = [data[12], data[13], data[14], data[15]]
    const contentDiv = document.getElementById('content');
    j.forEach(item => {
        const card = document.createElement('section');
        card.innerHTML = `
            <h2>${item.title}</h2>
            <img src="${item.imageUrl}" alt="${item.altText}" style="width:20%;">
            <p><strong>Team: ${item.Team}</strong></p>
            <p>${item.text}  <a href = "${item.wikiLink}" target = "_blank">Read More</a></p>`;
        card.style = 'display: block'
        contentDiv.appendChild(card);
        console.log(card)

    });
})
.catch(error => console.error('Error loading the data:', error));
}

function tester5(){
    fetch('collection.json')
.then(response => response.json())
.then(data => {
    console.log(data)
    j = [data[16], data[17], data[18], data[19]]
    const contentDiv = document.getElementById('content');
    j.forEach(item => {
        const card = document.createElement('section');
        card.innerHTML = `
            <h2>${item.title}</h2> 
            <img src="${item.imageUrl}" alt="${item.altText}" style="width:20%;">
            <p><strong>Team: ${item.Team}</strong></p>
            <p>${item.text}  <a href = "${item.wikiLink}" target = "_blank">Read More</a></p>`;
        card.style = 'display: block'
        contentDiv.appendChild(card);
        console.log(card)

    });
})
.catch(error => console.error('Error loading the data:', error));
}

function tester6(){
    fetch('collection.json')
.then(response => response.json())
.then(data => {
    console.log(data)
    j = [data[20], data[21], data[22], data[23]]
    const contentDiv = document.getElementById('content');
    j.forEach(item => {
        const card = document.createElement('section');
        card.innerHTML = `
            <h2>${item.title}</h2> 
            <img src="${item.imageUrl}" alt="${item.altText}" style="width:20%;">
            <p><strong>Team: ${item.Team}</strong></p>
            <p>${item.text}  <a href = "${item.wikiLink}" target = "_blank">Read More</a></p>`;
        card.style = 'display: block'
        contentDiv.appendChild(card);
        console.log(card)

    });
})
.catch(error => console.error('Error loading the data:', error));
}

function tester7(){
    fetch('collection.json')
.then(response => response.json())
.then(data => {
    console.log(data)
    j = [data[24], data[25], data[26], data[27]]
    const contentDiv = document.getElementById('content');
    j.forEach(item => {
        const card = document.createElement('section');
        card.innerHTML = `
            <h2>${item.title}</h2> 
            <img src="${item.imageUrl}" alt="${item.altText}" style="width:20%;">
            <p><strong>Team: ${item.Team}</strong></p>
            <p>${item.text}  <a href = "${item.wikiLink}" target = "_blank">Read More</a></p>`;
        card.style = 'display: block'
        contentDiv.appendChild(card);
        console.log(card)

    });
})
.catch(error => console.error('Error loading the data:', error));
}

function tester8(){
    fetch('collection.json')
.then(response => response.json())
.then(data => {
    console.log(data)
    j = [data[28], data[29], data[30], data[31]]
    const contentDiv = document.getElementById('content');
    j.forEach(item => {
        const card = document.createElement('section');
        card.innerHTML = `
            <h2>${item.title}</h2> 
            <img src="${item.imageUrl}" alt="${item.altText}" style="width:20%;">
            <p><strong>Team: ${item.Team}</strong></p>
            <p>${item.text}  <a href = "${item.wikiLink}" target = "_blank">Read More</a></p>`;
        card.style = 'display: block'
        contentDiv.appendChild(card);
        console.log(card)

    });
})
.catch(error => console.error('Error loading the data:', error));
}

document.addEventListener('DOMContentLoaded', function() {});