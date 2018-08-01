import * as React from 'react';
import '../App.css';
import SendMoney from './SendMoney';
import * as Clipboard from '../assets/clipboard.svg';

class MetaMaskWallet extends React.Component {
  state = {
    activeTab: 0,
    isVisible: false,
  };

  activateTab = tab => {
    this.setState({activeTab: tab});
  };

  render() {
    switch (this.state.activeTab) {
      default:
        return (
          <div>
            <div className="wallet-header">Your Wallet</div>

            <div className="back-box">
              <div
                className={`tab ${
                  this.state.activeTab === 0 ? 'active' : 'inactive'
                }`}
                onClick={() => {
                  this.activateTab(0);
                }}
              >
                Address
              </div>
              <div
                className={`tab t1 ${
                  this.state.activeTab === 1 ? 'active' : 'inactive'
                }`}
                onClick={() => {
                  this.activateTab(1);
                }}
              >
                Send Money
              </div>

              <div
                className={`content-container ${
                  this.state.activeTab === 0 ? 'forward' : 'behind'
                }`}
              >
                <div className="blue-container">
                  <h1>Your Public Address</h1>
                  <div className="public-address-box">
                    <div className="public-address-box-content">
                      {this.props.publicAddress}
                      <div className="tooltip">
                        <div
                          className={
                            'tooltip-text metamask-tooltip-position' +
                            (this.props.fade ? ' fadeout' : '')
                          }
                        >
                          Copied!
                        </div>
                        <img
                          className="clipboard"
                          src={Clipboard}
                          onClick={this.props.copyToClipboard}
                          alt="icon"
                        />
                      </div>
                    </div>
                  </div>
                  <br />
                  To use another account associated with your Metamask account
                  go to the extension and choose an account there, then refresh
                  this page.
                </div>
              </div>
              <div
                className={`content-container ${
                  this.state.activeTab === 1 ? 'forward' : 'behind'
                }`}
              >
                <div className="blue-container">
                  <SendMoney browseth={this.props.browseth} />
                </div>
              </div>
            </div>
          </div>
        );
    }
  }
}

export default MetaMaskWallet;
