
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, error => {
            console.log('ServiceWorker registration failed: ', error);
        });
    });
}

function vote(option) {
    let sats = prompt("How many sats do you want to contribute?");
    if (sats !== null) {
        alert(`You voted ${sats} sats for ${option}!`);
    }
}
