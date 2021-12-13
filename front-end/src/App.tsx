import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Detailsform from "./comoponents/detailsform/Detailsform";
import WalletConnect from "./comoponents/walletconnect/WalletConnect";
import Header from "./comoponents/header/Header";
function App() {
  const [connectWallet, setConnectWallet] = useState(false);

  return (
    <div className="App">
      <Header
        setConnectWallet={setConnectWallet}
        connectWallet={connectWallet}
      />
      <Detailsform />
      {connectWallet && (
        <WalletConnect
          connectWallet={connectWallet}
          setConnectWallet={setConnectWallet}
        />
      )}
    </div>
  );
}

export default App;
