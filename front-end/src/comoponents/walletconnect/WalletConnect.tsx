import { Button } from "react-bootstrap";
import "./walletconnect.scss";
import CloseIcon from "@mui/icons-material/Close";
function WalletConnect({ connectWallet, setConnectWallet }: any) {
  return (
    <>
      <div className="walletwrapper shadow  d-flex flex-column align-items-center justify-content-around">
        <div className="wallet-close-btn">
          <CloseIcon onClick={() => setConnectWallet(!connectWallet)} />
        </div>
        <div>
          <h5>Connect Wallet</h5>
        </div>
        <div className="connect-btns d-flex flex-column ">
          <Button className="mb-2" variant="secondary">
            MetaMask
          </Button>
          <Button className="mb-2" variant="secondary">
            KaiKas
          </Button>
        </div>
      </div>
    </>
  );
}

export default WalletConnect;
