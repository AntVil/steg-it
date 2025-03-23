async function validate(validationElement) {
    let message = validationElement.value

    console.log(validationElement)

    if(message.length == 0) {
        validationElement.setAttribute("class", "")
        return
    }
    if(message.length < 8) {
        validationElement.setAttribute("class", "invalid");
        return
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(message);
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hash = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");

    const expectedHash = validationElement.getAttribute("data-validation-hash");

    console.log(hash)
    if (hash == expectedHash) {
        validationElement.setAttribute("class", "valid");
    } else {
        validationElement.setAttribute("class", "invalid");
    }
}
