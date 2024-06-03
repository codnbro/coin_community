import Image from "next/image";
import coinicon from "../icon.ico";
import profile from "../img/profile.png";
import downarrow from "../img/downarrow.png";

const Navbar = () => {
  return (
    <>
      <div className="navline">
        <div className="navbarwrap">
          <a href="/mainpage">
            <Image src={coinicon} alt="coinicon"></Image>
          </a>
          <div className="navbar">
            <a href="/">코인시세</a>
            <a href="/">코인소식</a>
            <a href="/">코인 인트로</a>
            <a href="/">코인 거래소</a>
            <a href="/">코인 지갑 만들기</a>
            <a href="/">코인 리포트</a>
            <a href="/">NFT</a>
            <a href="/">DID</a>
            <a href="/info">서비스</a>
          </div>
          <div className="login">
            <a href="/">
              <div className="profileWrap">
                <Image src={profile} alt="login"></Image>
                <Image
                  src={downarrow}
                  alt="downarrow"
                  className="downarrow"
                ></Image>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
