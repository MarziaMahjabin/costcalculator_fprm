import React from "react";

const Header: React.FC = () => {
  return (
    <div className="flex w-full justify-between items-center px-[51px] py-[42px] max-md:px-[30px] max-sm:px-5">
      <div className="flex items-center gap-[100px] max-md:gap-[50px] max-sm:gap-5">
        <div className="flex items-end gap-3">
          <svg
            width="36"
            height="40"
            viewBox="0 0 36 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 0L35.3205 10V30L18 40L0.679492 30V10L18 0Z"
              fill="#913BFF"
            />
          </svg>
          <div className="text-white text-3xl font-semibold leading-[31px]">
            KWS
          </div>
        </div>
        <div className="flex items-center gap-[27px] max-md:hidden">
          <div className="text-white text-lg font-medium leading-5 gap-[9px]">
            HOME
          </div>
          <div>
            <svg
              width="101"
              height="20"
              viewBox="0 0 101 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex items-center gap-[5px]"
            >
              <text
                fill="white"
                xmlSpace="preserve"
                style={{ whiteSpace: "pre" }}
                fontFamily="Clash Display"
                fontSize="18"
                letterSpacing="0px"
              >
                <tspan x="0" y="15.76">
                  PROJECT
                </tspan>
              </text>
              <path
                d="M95.3681 11.6565L99.8188 7.20473C99.9196 7.10394 100.056 7.04732 100.199 7.04732C100.341 7.04732 100.478 7.10394 100.579 7.20473C100.68 7.30551 100.736 7.44221 100.736 7.58474C100.736 7.72727 100.68 7.86397 100.579 7.96476L95.7481 12.7954C95.6983 12.8454 95.639 12.8851 95.5738 12.9121C95.5086 12.9392 95.4387 12.9531 95.3681 12.9531C95.2975 12.9531 95.2276 12.9392 95.1624 12.9121C95.0972 12.8851 95.0379 12.8454 94.9881 12.7954L90.1574 7.96476C90.0566 7.86397 90 7.72727 90 7.58474C90 7.44221 90.0566 7.30551 90.1574 7.20473C90.2582 7.10394 90.3949 7.04732 90.5374 7.04732C90.68 7.04732 90.8166 7.10394 90.9174 7.20473L95.3681 11.6565Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <div className="text-white text-lg font-medium leading-5 gap-[5px]">
            CONTACT
          </div>
          <div>
            <svg
              width="111"
              height="20"
              viewBox="0 0 111 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex items-center gap-[5px]"
            >
              <text
                transform="translate(0.736206)"
                fill="white"
                xmlSpace="preserve"
                style={{ whiteSpace: "pre" }}
                fontFamily="Clash Display"
                fontSize="18"
                letterSpacing="0px"
              >
                <tspan x="0" y="15.76">
                  COMPANY
                </tspan>
              </text>
              <path
                d="M105.104 11.6565L109.555 7.20473C109.656 7.10394 109.792 7.04732 109.935 7.04732C110.078 7.04732 110.214 7.10394 110.315 7.20473C110.416 7.30551 110.472 7.44221 110.472 7.58474C110.472 7.72727 110.416 7.86397 110.315 7.96476L105.484 12.7954C105.434 12.8454 105.375 12.8851 105.31 12.9121C105.245 12.9392 105.175 12.9531 105.104 12.9531C105.034 12.9531 104.964 12.9392 104.899 12.9121C104.833 12.8851 104.774 12.8454 104.724 12.7954L99.8936 7.96476C99.7928 7.86397 99.7362 7.72727 99.7362 7.58474C99.7362 7.44221 99.7928 7.30551 99.8936 7.20473C99.9944 7.10394 100.131 7.04732 100.274 7.04732C100.416 7.04732 100.553 7.10394 100.654 7.20473L105.104 11.6565Z"
                fill="white"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[21px]">
        <div>
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[37px] h-[37px]"
          >
            <path
              d="M7.97885 14.375H29.5622M23.3955 28.25V23.625M14.1455 28.25H14.1609M18.7705 28.25H18.7859M18.7705 23.625H18.7859M14.1455 23.625H14.1609M23.3955 19H23.4109M18.7705 19H18.7859M14.1455 19H14.1609M12.9122 32.875H24.6289C26.3557 32.875 27.2192 32.875 27.8787 32.5389C28.4588 32.2434 28.9306 31.7716 29.2261 31.1915C29.5622 30.532 29.5622 29.6685 29.5622 27.9417V10.0583C29.5622 8.33151 29.5622 7.46809 29.2261 6.80853C28.9306 6.22836 28.4588 5.75667 27.8787 5.46107C27.2192 5.125 26.3557 5.125 24.6289 5.125H12.9122C11.1854 5.125 10.3219 5.125 9.66238 5.46107C9.08221 5.75667 8.61052 6.22836 8.31492 6.80853C7.97885 7.46809 7.97885 8.3315 7.97885 10.0583V27.9417C7.97885 29.6685 7.97885 30.532 8.31492 31.1915C8.61052 31.7716 9.08221 32.2434 9.66238 32.5389C10.3219 32.875 11.1853 32.875 12.9122 32.875Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <div>
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex w-[37.279px] h-[37.279px] p-[14px_12px] items-start gap-[10px] rounded-[18.639px] border-[1.5px] border-[rgba(255,255,255,0.7)] max-sm:hidden"
          >
            <rect
              x="1.02051"
              y="1.10938"
              width="35.779"
              height="35.779"
              rx="17.8895"
              stroke="white"
              strokeOpacity="0.7"
              strokeWidth="1.5"
            ></rect>
            <path
              d="M25.6569 14.3594H12.2705"
              stroke="white"
              strokeLinecap="round"
            ></path>
            <path
              d="M25.6569 18.543H12.2705"
              stroke="white"
              strokeLinecap="round"
            ></path>
            <path
              d="M25.6569 22.7266H12.2705"
              stroke="white"
              strokeLinecap="round"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;
