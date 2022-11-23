import React, { useEffect, useState, useCallback } from "react";
import {
  connectWallet,
  getCurrentWalletConnected,
  mintNFT,
} from "../../core/nft/interact";
import { createGlobalStyle } from 'styled-components';
import ColumnNewMint from '../components/ColumnNewMint';
import api from "../../core/api";
import Footer from '../components/footer';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #403f83;
    border-bottom: solid 1px #403f83;
  }
  header#myHeader.navbar .search #quick_search{
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }
  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a{
    color: #fff;
  }
  header#myHeader .dropdown-toggle::after{
    color: rgba(255, 255, 255, .5);
  }
  header#myHeader .logo .d-block{
    display: none !important;
  }
  header#myHeader .logo .d-none{
    display: block !important;
  }
  .mainside{
    .connect-wal{
      display: none;
    }
    .logout{
      display: flex;
      align-items: center;
    }
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #fff;
    }
    .item-dropdown .dropdown a{
      color: #fff !important;
    }
  }
`;

const Minter = (props) => {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [url, setURL] = useState("");

  const [manualInput, setManualInput] = useState(false);
  const [isMinting, setisMinting] = useState(false);

  useEffect(() => {
    async function getExistingWallet() {
      const { address, status } = await getCurrentWalletConnected();
  
      setWallet(address);
      setStatus(status);
  
      addWalletListener();
    }

    getExistingWallet();
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          // setStatus("Fill in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" rel="noreferrer" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async () => {
    setisMinting(true);
    const { success, status } = await mintNFT(url, name, description);
    setStatus(status);
    if (success) {
      setName("");
      setDescription("");
      setURL("");
    }
    setisMinting(false);
  };
  
  const toggleInput = () => {
    setManualInput(!manualInput)
    setName("");
    setDescription("");
    setURL("");
  };

  const onSelectNft = (nft) => {
    setName(nft.title);
    setDescription(nft.description);
    setURL(api.baseUrl + nft.preview_image.url);
  }

  const isEmpty = useCallback(() => {
    return url.trim() === '' || name.trim() === '' || description.trim() === '';
  }, [url, name, description]);

  return (
    <div>
      <GlobalStyles/>
      <section className='jumbotron breadcumb no-bg' style={{backgroundImage: `url(${'./img/background/subheader.jpg'})`}}>
        <div className='mainbreadcumb'>
          <div className='container'>
            <div className='row m-10-hor'>
              <div className='col-12'>
                <h1 className='text-center'>NFT Minting</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='container'>
      <div className="Minter">
        <h1>Mint your NFT</h1>
        
        {walletAddress.length === 0 && (
        <button id="walletButton" className="btn-main" onClick={connectWalletPressed}>
            Connect Metamask
        </button>
        )}
        {walletAddress.length > 0 && (
          "Connected Address: " + walletAddress
        )}
        <br/><br/>
        {walletAddress.length === 0 && (
          <p>
            connect to metamask to start minting
          </p>
        )}
        {isMinting ? (
          <h2>Minting in Process</h2>
        ) : (
        <div>
          {
            walletAddress.length > 0 &&
            <>
              <button id="toggleButton" className="btn-main" onClick={() => toggleInput()}>
                Switch to {manualInput ? 'select' : 'manual'} input
              </button>
              <br />
              <br />
              {!manualInput ? (
                <ColumnNewMint onSelectNft={onSelectNft} showLoadMore={false} authorId="1" />
              ) : (
                <form>
                  <h2>Link to image asset: </h2>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
                    onChange={(event) => setURL(event.target.value)}
                  />
                  <h2>Name: </h2>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="e.g. My first NFT!"
                    onChange={(event) => setName(event.target.value)}
                  />
                  <h2>Description: </h2>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="e.g. My Cool NFT!"
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </form>
              )}
              {!isEmpty() &&
                <>
                  <span>NFT Name: { name }</span> 
                  <br />
                  <br />
                  <button id="mintButton" className="btn-main" onClick={onMintPressed}>
                    Proceed to Mint
                  </button>
                  <br />
                </>
              }
              <p id="status">
                {status}
              </p>
            </>
          }
        </div>
        )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Minter;
