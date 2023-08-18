function Panel() {
    return (
        <div className="bordered">
            <div className="">
                <table>
                    <tr>
                        <th>Month</th>
                        <th>Savings</th>
                    </tr>
                    <tr>
                        <td>January</td>
                        <td>$100</td>
                    </tr>
                </table>
            </div>
            <div className="email-item email-item-unread pure-g">
                <div className="pure-u">
                    <img width="64" height="64" alt="Eric Ferraiuolo&#x27;s avatar" className="email-avatar" src="/img/common/ericf-avatar.png" />
                </div>
                <div className="pure-u-3-4">
                    <h5 className="email-name">Eric Ferraiuolo</h5>
                    <h4 className="email-subject">Re: Pull Requests</h4>
                    <p className="email-desc">
                        Hey, I had some feedback for pull request #51. We should center the menu so it looks better on mobile.
                    </p>
                </div>
            </div>
            <div className="email-item pure-g">
                <div className="pure-u">
                    <img width="64" height="64" alt="Reid Burke&#x27;s avatar" className="email-avatar" src="/img/common/reid-avatar.png" />
                </div>
                <div className="pure-u-3-4">
                    <h5 className="email-name">Reid Burke</h5>
                    <h4 className="email-subject">Re: Design Language</h4>
                    <p className="email-desc">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa.
                    </p>
                </div>
            </div>
            <div className="email-item pure-g">
                <div className="pure-u">
                    <img width="64" height="64" alt="Yahoo! Finance&#x27;s Avatar" className="email-avatar" src="/img/common/yfinance-avatar.png" />
                </div>
                <div className="pure-u-3-4">
                    <h5 className="email-name">Yahoo! Finance</h5>
                    <h4 className="email-subject">How to protect your finances from winter storms</h4>
                    <p className="email-desc">
                        Mauris tempor mi vitae sem aliquet pharetra. Fusce in dui purus, nec malesuada mauris.
                    </p>
                </div>
            </div>
            <div className="email-item pure-g">
                <div className="pure-u">
                    <img width="64" height="64" alt="Yahoo! News&#x27; avatar" className="email-avatar" src="/img/common/ynews-avatar.png" />
                </div>
                <div className="pure-u-3-4">
                    <h5 className="email-name">Yahoo! News</h5>
                    <h4 className="email-subject">Summary for April 3rd, 2021</h4>
                    <p className="email-desc">
                        We found 10 news articles that you may like.
                    </p>
                </div>
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