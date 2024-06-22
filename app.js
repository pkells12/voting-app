
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(registration => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, error => {
            console.log('ServiceWorker registration failed: ', error);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const voteNowBtn = document.getElementById('vote-now-btn');
    if (voteNowBtn) {
        voteNowBtn.addEventListener('click', () => {
            window.location.href = 'vote.html';
        });
    }
});

function vote(option) {
    let sats = prompt("How many sats do you want to contribute?");
    if (sats !== null) {
        let tally = document.getElementById(`${option}-tally`);
        tally.innerText = parseInt(tally.innerText) + parseInt(sats);
        alert(`You voted ${sats} sats for ${option}!`);
    }
}
