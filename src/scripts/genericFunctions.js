const selector = {
    $All: (param) => document.querySelectorAll(param),
    $One: (param) => document.querySelector(param),
};

function $Creator(param) {
    return document.createElement(param);
}

export { selector, $Creator };
