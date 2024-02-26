// Define the Custom Button Element
class CustomButton extends HTMLElement {
    constructor() {
        super();

        // Create a shadow root
        this.attachShadow({ mode: 'open' });

        // Create a button element
        const button = document.createElement('button');
        button.innerHTML = '?';
        button.style.marginRight = "5px";
        button.style.borderRadius = "50%";
        button.style.display = "inline";
        button.style.border = "none";
        button.style.background = "rgb(100, 100, 100)";
        button.style.width = "20px";
        button.style.height = "20px";

        // Set up click event listener
        button.addEventListener('click', () => {
            // Get the value of msg attribute
            const msg = this.getAttribute('msg');

            // Display an alert with the message
            alert(msg);
        });

        // Append the button to the shadow root
        this.shadowRoot.appendChild(button);
    }
}

// Define the custom element
customElements.define('help-btn', CustomButton);