if ('CSS' in window && 'supports' in window.CSS) {
    var support = window.CSS.supports('mix-blend-mode', 'difference');
    // tests for mix-blend-mode support
    support = support ? 'mix-blend-mode' : 'no-mix-blend-mode';
    document.documentElement.className += support;
}