// Data in JavaScript object
var data = [
    {
        topic: 'Gmail',
        link: "google.com",
        description: 'Compose Mail'
    },
    {
        topic: 'iGrid',
        link: 25,
        description: 'My In Progress Test Cases'
    }
];

// Function to add data dynamically to HTML
function addDataToHTML() {
    var container = document.getElementById('container');

    // Clear previous content
    container.innerHTML = '';

    // Loop through data and create HTML elements dynamically
    data.forEach(function (item) {
        var card = document.createElement('div');
        card.id = 'card'
        card.classList.add('card');

        var topic = document.createElement('h3');
        topic.id = 'topic';
        topic.textContent = item.topic;

        var link = document.createElement('a');
        link.id = 'link';
        link.target = '_blank'
        link.href = item.link;
        link.textContent = item.description;


        card.appendChild(topic);
        card.appendChild(link);

        container.appendChild(card);
    });
}

// Call the function to initially populate the data
addDataToHTML();

// Function to search cards by name
function searchByName() {
    var input, filter, container, cards, card, i, txtValue,error_text;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    container = document.getElementById('container');
    cards = container.getElementsByClassName('card');
    error_text = document.getElementById('error_msg')


    // Loop through all cards, hide those that don't match the search query
    for (i = 0; i < cards.length; i++) {
        card = cards[i];
        txtValue = card.textContent || card.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1 || filter == '') { // If filter is empty, show all cards
            error_text.style.display = 'none';
            card.style.display = '';
        } else {
            error_text.textContent = "Invalid search";
            error_text.style.color = 'red';
            error_text.style.display = 'inline';
            card.style.display = 'none';
        }
    }
}

// Search by pressing Enter key
document.getElementById("searchInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        searchByName();
    }
});

function updateCurrentTimeStamp() {
    var currentDate = new Date();
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    var formattedDate = currentDate.toLocaleString('en-US', options);

    document.getElementById('current_time_stamp').textContent = formattedDate;
}

// Call the function to update the current timestamp immediately and every second
updateCurrentTimeStamp();
setInterval(updateCurrentTimeStamp, 1000); // Update every second
