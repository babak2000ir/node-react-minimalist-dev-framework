function Panel() {
    return (
        <div>
            <div class="card" style={{ width: '18rem' }}>
                <img src="/logo.png" class="card-img-top" alt="..." />
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="card" style={{ width: '18rem' }}>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
            <div class="card" style={{ width: '18rem' }}>
                <div class="card-header">
                    Featured
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
            </div>
        </div>
    );
}

function PanelAction() {
    return (
        <div className="row">
            <div className="pure-u">
                <img width="64" height="64" alt="Tilo Mitra&#x27;s avatar" className="email-avatar" src="/img/common/tilo-avatar.png" />
            </div>
            <div className="pure-u-3-4">
                <h5 className="email-name">Tilo Mitra</h5>
                <h4 className="email-subject">Hello from Toronto</h4>
                <p className="email-desc">
                    Hey, I just wanted to check in with you from Toronto. I got here earlier today.
                </p>
            </div>
        </div>
    );
}

export default Panel;