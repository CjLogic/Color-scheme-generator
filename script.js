document.getElementById("schemeBtn").addEventListener("click", () => {
const colorValue = document.getElementById("color-input").value.slice(1, 7);
const schemeValue = document.getElementById("color-scheme").value;

fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${schemeValue}&count=5`
)
    .then((response) => response.json())
    .then((data) => {
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`color-${i}`).style.backgroundColor =
        data.colors[i - 1].hex.value;
        document.getElementById(`hex-${i}`).textContent =
        data.colors[i - 1].hex.value;
    }
    });
});

function copyToClipboard(element) {
    const text = element.textContent;
    navigator.clipboard.writeText(text).then(() => {
        const originalText = element.textContent;
        element.textContent = 'Copied!';
        setTimeout(() => {
            element.textContent = originalText;
        }, 500);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

for (let i = 1; i <= 5; i++) {
    document.getElementById(`hex-${i}`).addEventListener('click', function() {
        copyToClipboard(this);
    });
}