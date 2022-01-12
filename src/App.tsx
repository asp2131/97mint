import "./App.css";
import { useState, useMemo } from "react";

import Minter from "./Minter";
import Roadmap from "./Roadmap";

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
  getMathWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { Button, CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const themeLight = createTheme({
  palette: {
    background: {
      default: "#e4f0e2",
    },
  },
});

const themeDark = createTheme({
  palette: {
    background: {
      default: "#222222",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

const candyMachineId = process.env.REACT_APP_CANDY_MACHINE_ID
  ? new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID)
  : undefined;

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

// const getDesignTokens = (mode: PaletteMode) => ({
//   palette: {
//     mode,
//     ...(mode === 'light'
//       ? {
//           // palette values for light mode
//           primary: amber,
//           divider: amber[200],
//           text: {
//             primary: grey[900],
//             secondary: grey[800],
//           },
//         }
//       : {
//           // palette values for dark mode
//           primary: deepOrange,
//           divider: deepOrange[700],
//           background: {
//             default: deepOrange[900],
//             paper: deepOrange[900],
//           },
//           text: {
//             primary: '#fff',
//             secondary: grey[500],
//           },
//         }),
//   },
// });

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);
  const [light, setLight] = useState(false);

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSolletWallet(),
      getMathWallet(),
    ],
    []
  );

  function toggleMenu() {
    const menu = document.getElementById("mobileNavContainer")!;
    menu.classList.toggle("open-menu");
    console.log("pressed");
  }

  // const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={light ? themeLight : themeDark}>
      {" "}
      \ <CssBaseline />
      {/* <GlobalStyles
        styles={{
          body: { backgroundColor: "gray" },
        }}
      /> */}
      {window.screen.width > 1000 ? (
        <img
          style={{
            width: "375px",
            float: "left",
            paddingTop: "300px",
            position: "fixed",
          }}
          src="/img/back_to_back_97.png"
        />
      ) : null}
      {window.screen.width > 1000 ? (
        <img
          style={{
            width: "375px",
            float: "right",
            paddingTop: "300px",
            right: "150px",
            position: "fixed",
          }}
          src="/img/97comic.png"
        />
      ) : null}
      <div>
        <div id="mobileNavContainer" className="mobile-nav">
          <div className="mobile-nav-close-button">
            <img src="/icons/close.svg" alt="" onClick={toggleMenu} />
          </div>
          <ul>
            <li>
              <img
                className="mobile-nav-logo"
                src="/img/97logo.png"
                alt=""
                style={{ width: "75px" }}
              />
            </li>
            <li>
              <a href="/#link1" onClick={toggleMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="/#link2" onClick={toggleMenu}>
                Roadmap
              </a>
            </li>
            <li>
              <a href="/#link3" onClick={toggleMenu}>
                Meet the Team
              </a>
            </li>
            <li>
              <a href="/#link4" onClick={toggleMenu}>
                FAQ
              </a>
            </li>
            <li>
              <div className="social-icons">
                <img className="nav-social" src="/icons/twitter.svg" alt="" />
                <img className="nav-social" src="/icons/discord.svg" alt="" />
              </div>
            </li>
          </ul>
        </div>
        <div className="mobile-menu-button" onClick={toggleMenu}>
          <img src="/icons/menu.svg" alt="" />
        </div>
        <nav>
          <div className="nav-container">
            { window.screen.width > 1000 ? <img
              // className="nav-logo"
              src="/img/banner97.svg"
              alt=""
              style={{width: "250px"}}
            /> : <img
            // className="nav-logo"
            src="/img/97_universe.svg"
            alt=""
            style={{width: "200px", marginBottom: "20px"}}
          /> }
            <a className="hide-800" href="/#link1">
              Home
            </a>
            <a className="hide-800" href="/#link2">
              Roadmap
            </a>
            <a className="hide-800" href="/#link3">
              Meet the Team
            </a>
            <a className="hide-800" href="/#link4">
              FAQ
            </a>
            <div className="social-icons hide-800">
              <img className="nav-social" src="/icons/twitter.svg" alt="" />
              <img className="nav-social" src="/icons/discord.svg" alt="" />
            </div>
          </div>
        </nav>
        <div className="content-wrapper">
          <header className="card" id="link1">
            <div style={{ padding: "0 24px 0 24px 0" }}>
              <h3 className="text-secondary-color">Welcome To 97 Unvierse</h3>
              <h1 className="pb-3">Entertainment DEX</h1>
              <p className="text-secondary-color">
                A web series of the nfts then adapted to a animated series. The
                creator, Mr. 97, is the live action representation of the
                cartoon and a music artist; so there will be royalties given to
                holders from album streams/sales. There will eventually start a
                tv show/movie and liveaction/animated music videos.
              </p>
            </div>
            <div>
              <ConnectionProvider endpoint={endpoint}>
                <WalletProvider wallets={wallets} autoConnect>
                  <WalletDialogProvider>
                    <Minter
                      candyMachineId={candyMachineId}
                      connection={connection}
                      startDate={startDateSeed}
                      txTimeout={txTimeout}
                      rpcHost={rpcHost}
                    />
                  </WalletDialogProvider>
                </WalletProvider>
              </ConnectionProvider>
            </div>
          </header>
          {/* <div id="link2" className="container">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            velit aliquet, semper sapien sed, ornare augue. Phasellus sed velit
            interdum, sagittis metus quis, facilisis lectus. Cras sollicitudin
            purus at magna eleifend maximus. Nulla nec nulla in nunc maximus
            viverra in at mauris. Fusce sodales dolor nisi, et vehicula orci
            porta id. In placerat nunc sed erat lacinia tincidunt. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Vestibulum commodo
            eget metus vitae tempus. Aliquam pharetra mi at efficitur accumsan.
            Curabitur venenatis libero a ex porttitor, at auctor turpis
            hendrerit. Nam commodo, risus non consequat pretium, erat ante
            auctor purus, a cursus dolor erat at velit. Maecenas dignissim,
            dolor sed laoreet aliquam, tortor lacus faucibus urna, eget mattis
            massa sem ac dui. Nam semper hendrerit interdum. Etiam at dictum
            nisi.
          </div> */}
          <div id="link3" className="container card">
            <h1 className="pb-3">Roadmap</h1>
            <Roadmap />
          </div>

          <div id="link3" className="container card">
            <h1 className="pb-3">Meet the Team</h1>
          </div>

          <div id="link4" className="container faq">
            <h1 style={{ padding: "0 0 24px 0" }}>FAQ</h1>
            <div>
              <h4>What’s an NFT?</h4>
              <p>
                An NFT stands for “Non-fungible token” and is a fancy way of
                saying it’s a unique, one of a kind digital item that users can
                buy, own, and trade. How can I mint (buy) the Mr.97 NFTs? In
                order to buy an NFT, you need to have a crypto-wallet such as
                Phantom where you could store your crypto currencies and NFTs
                tokens from the Solana blockchain. Each wallet comes with a
                unique address with which your NFTs and crypto-coins are
                associated. Learn more about Phantom and get the install link
                here -{" "}
                <a href="https://chrome.google.com/webstore/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa">
                  https://phantom.app/downloadOnce
                </a>{" "}
                you have your wallet installed, Mr.97 will be available for
                purchase on the official website. What is the Price to mint
                Mr.97? A Mr.97 will cost you 1 SOL.
              </p>

              <hr />
            </div>

            <div>
              <h4>Where will I see my Mr.97(s) after minting?</h4>
              <p>
                Your Mr.97(s) will appear in your collectibles tab on Phantom
                wallet.
              </p>

              <hr />
            </div>

            <div>
              <h4>What will I gain by holding a Mr.97?</h4>
              <p>
                Every Mr.97 is unique and some are much more rare than the
                others. Mr.97 holders could gain from the demand for Mr.97 on
                secondary markets. In addition Mr.97 holders qualify for
                exclusive access, free drops, discounts, or more! Head over to
                roadmap to see why you will be bullish
              </p>
              <hr />
            </div>

            <div>
              <h4>What are the future plans for 97 Universe?</h4>
              <p>
                We plan on creating an universe bigger than any other! One that
                insights inspiration, happiness, music, movies, innovation,
                mentorship and much much more!
              </p>
              <hr />
            </div>

            <div>
              <h4>What are the future plans for 97 Universe?</h4>
              <p>
                We plan on creating an universe bigger than any other! One that
                insights inspiration, happiness, music, movies, innovation,
                mentorship and much much more!
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
