import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const RoadMap = () => {
  return (
    <section className="section bg-light" id="about">
      <h3 className="font-weight-normal text-dark">
      </h3>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Q1 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            Launch 9700 {" "}
            <span className="text-primary font-weight-medium">NFTs</span>{" "}
          </h3>
          <p>
            1. Special manga panel giveaway
          </p>
          <p>
            2. Fix the defective bots and replace bad parts with new rare parts
          </p>
          <p>
            3. 3D Mr.97 Airdrops to 10 NFT Holders and will be shipped a physical Mr.97 keychains on a later date (First Edition probably nothing...)
          </p>
          <p>
            4. Release first music single and animated music video for Mr. 97. NFT holders will receive a percentage of royalties quarterly 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Q2 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h4 className="vertical-timeline-element-title">
            Every holder will receive an original e-copy manga book of the origin story (Airdrop)
          </h4>
          <p>
            1. Release second music single and animated music video for Mr. 97. NFT holders will receive a percentage of royalties quarterly 
          </p>
          <p>
            2. Add DEX and Liquidity Pools to the official website
          </p>
          <p>
            3. Release first episode to Mr.97 official cartoon show (Pilot Episode)
          </p>
          <p>
            4. Giveaway 10 more 3D NFTs of Mr.97 and will receive keychain on a later date (Second Edition)
          </p>
          <p>
            5. Host AMAs for NFT Holders to be up-to-date with hold progress is going on the Pacman like Mr.97 game. Also sneak peek on what we will be building after its completion. (Maybe a token or staking wink wink)
          </p>
          <p>
            6.  Launch Webtoon series for Mr. 97
          </p>
          <p>
            7. Deviant Art Competition, prize is $3000 and a chance to join the graphic arts team 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Q3 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h4 className="vertical-timeline-element-title">
            Release Dr. Universe NFTs to public and only Mr. 97NFT holders will only be whitelisted
            {/* <span className="text-primary font-weight-medium">HackNOLA</span> */}
          </h4>
          <p>
            1. Release physical comic book of origin story, NFT holders get 50% off purchase (discount code will be in NFTs unlockable content)
          </p>
          <p>
            2. Launch two Mr. 97 mini games
          </p>
          <p>
            3. Physical Mr. 97 keychain to all Holders (have to sign up)
          </p>
          <p>
            4. Auction off manga manuscripts to the public
          </p>
          <p>
            5. Release third music single or Album for Mr. 97. NFT holders will receive a percentage of royalties quarterly           </p>
          <p>
            6. Start production on live-action movie
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Q4 2022"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <h4 className="vertical-timeline-element-title">
            Giveaway 10 more 3D NFTs of Mr.97 and ship keychains on a later date (Third Edition)
            {/* <span className="text-primary font-weight-medium">Web 3.0</span>{" "} */}
          </h4>
          <p>
            1. Pitch cartoon to Netflix, Hulu, Cartoon Network and more!
          </p>
          <p>
            2. Release second comic book, 55% off to all NFT Holders (have to sign up)
          </p>
          <p>
            3.  Look to collab with Veve, Recur and more licensed NFT apps with big user bases
          </p>
          <p>
            4. Auction off manga manuscripts to the public
          </p>
          <p>
            5. Release OVA episode and special comic (Christmas eve)
          </p>
          <p>
            6. Second Deviant art competition: top 3 winners share a $4000 prize!
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default RoadMap;
