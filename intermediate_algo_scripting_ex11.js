// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    let entities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&apo;'
    };
    
    let regex = new RegExp(/[&<>"']/g);
    return str.replace(regex,match => entities[match]);

}

convertHTML("Schindler's List");
