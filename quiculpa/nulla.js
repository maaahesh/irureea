return String(base64).replace(/[^A-Za-z0-9_-]/g, m => {
    // Replace the matched character 'm' with a suitable replacement.
    // For simplicity, let's assume we are encoding the character as its Unicode code point.
    return '%' + m.charCodeAt(0).toString(16).toUpperCase();
});
