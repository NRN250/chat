// create emojies for me//

const emoticons = {
    ":)": "😀",
    ":(": "😁",
    ":D": "😂",
}
const messageInput = document.querySelector(".input input");
const sendButton = document.querySelector(".input button");

sendButton.addEventListener("click", function() {
    
    const messageText = messageInput.value.trim();

    if (messageText !== "") {

        const messageElement = document.createElement("div");
        messageElement.classList.add("message");

        const now = new Date();
        const date = now.toLocaleDateString("fr-FR");
        const time = now.toLocaleTimeString("fr-FR");

        const timeElement = document.createElement("span");
        timeElement.classList.add("time");
        timeElement.textContent = `${date} ${time}`;

        const authorElement = document.createElement("span");
        authorElement.classList.add("author");
        authorElement.innerHTML = "&lt;Me&gt;";

        const textNode = document.createTextNode(messageText);

        for (const [emoticon, imageName] of Object.entries(emoticons)) {
            if (messageText.includes(emoticon)) {
            
                const imageElement = document.createElement("span");
                imageElement.classList.add("emoji");
                imageElement.style.backgroundImage = `url(${imageName})`;

                const regex = new RegExp(emoticon, "g");
                messageText = messageText.replace(regex, ` ${imageName} `);

               
                messageElement.appendChild(imageElement);
            }
        }

        textNode.textContent = messageText;

    
        messageElement.appendChild(timeElement);
        messageElement.appendChild(authorElement);
        messageElement.appendChild(textNode);

        const messagesContainer = document.querySelector(".messages");
        messagesContainer.appendChild(messageElement);

    
        messageInput.value = "";
    }
});

