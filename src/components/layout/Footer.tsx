import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-8 py-8 border-t border-[#969696]">
      <div className="flex flex-col items-center gap-[86px] max-md:gap-10 max-sm:gap-[30px]">
        <div className="flex items-start gap-[211px] max-md:flex-col max-md:gap-10 max-sm:gap-[30px]">
          <div className="flex flex-col items-start gap-5 max-w-[417px]">
            <div className="text-white text-[23px] leading-[37px]">
              We're here to help turn your ideas into reality. Get in touch with
              our expert team and start your journey with KWS Technology.
            </div>
            <div>
              <svg
                width="320"
                height="70"
                viewBox="0 0 320 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex items-start gap-[6px]"
              >
                <text
                  fill="white"
                  xmlSpace="preserve"
                  style={{ whiteSpace: "pre" }}
                  fontFamily="Clash Display"
                  fontSize="55"
                  fontWeight="bold"
                  letterSpacing="0em"
                >
                  <tspan x="1.00378" y="53.6">
                    Let's Chat
                  </tspan>
                </text>
                <path
                  d="M302.602 2.88281L315.737 3.86386C316.177 3.89668 316.585 4.1027 316.873 4.43659C317.16 4.77048 317.303 5.2049 317.27 5.64428L316.289 18.7794"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M316.885 4.42592L288.78 28.6246"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[34px]">
            <a
              href="#"
              className="text-white text-[23px] leading-[30px] hover:text-[#A35AFF] transition-colors"
            >
              About us
            </a>
            <a
              href="#"
              className="text-white text-[23px] leading-[30px] hover:text-[#A35AFF] transition-colors"
            >
              Contact us
            </a>
            <a
              href="#"
              className="text-white text-[23px] leading-[30px] hover:text-[#A35AFF] transition-colors"
            >
              Privacy policy
            </a>
            <a
              href="#"
              className="text-white text-[23px] leading-[30px] hover:text-[#A35AFF] transition-colors"
            >
              Refund policy
            </a>
          </div>
          <div className="flex flex-col items-start gap-[18px]">
            <a
              href="mailto:support@kws.technology"
              className="text-white text-center text-[23px] hover:text-[#A35AFF] transition-colors"
            >
              support@kws.technology
            </a>
            <div className="text-white text-lg leading-[25px]">
              Kuala Lumpur, Malaysia
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[19px] pt-[19px] border-t border-[#969696] w-full">
        <div className="flex justify-between items-center w-full px-[85px] max-md:px-[30px] max-sm:flex-col max-sm:gap-5 max-sm:px-5">
          <div className="text-white text-lg leading-[25px]">
            © 2024, KWS Technology. All rights reserved.
          </div>
          <div className="flex items-center gap-[18px]">
            <a href="#" aria-label="Facebook">
              <svg
                width="53"
                height="53"
                viewBox="0 0 53 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex w-[52.425px] h-[52.425px] justify-center items-center p-[14px_20px] gap-[10px] rounded-[5px] border border-[#FFF] hover:border-[#A35AFF] transition-colors"
              >
                <rect
                  x="0.950256"
                  y="0.5"
                  width="51.4254"
                  height="51.4254"
                  rx="4.5"
                  stroke="white"
                ></rect>
                <path
                  d="M33.0325 14.4418L29.4934 14.4375C26.0613 14.4375 23.8443 16.7113 23.8443 20.2343V22.9053H20.2934V27.7386H23.8443L23.84 37.9888H28.8083L28.8125 27.7386H32.8869L32.8837 22.9063H28.8125V20.64C28.8125 19.5503 29.0705 18.999 30.489 18.999L33.0218 18.9979L33.0325 14.4418Z"
                  fill="white"
                ></path>
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <div className="flex w-[52px] h-[52px] justify-center items-center border px-3.5 py-[17px] rounded-[5px] border-solid border-white hover:border-[#A35AFF] transition-colors">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[24px] h-[24px]"
                >
                  <g clipPath="url(#clip0_33_639)">
                    <path
                      d="M18.9884 1.36328H22.6704L14.6284 10.5523L24.0884 23.0583H16.6834L10.8794 15.4753L4.24538 23.0583H0.557379L9.15738 13.2273L0.0883789 1.36328H7.68138L12.9224 8.29428L18.9884 1.36328ZM17.6954 20.8573H19.7344L6.57038 3.44928H4.38038L17.6954 20.8573Z"
                      fill="white"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_33_639">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.0883789 0.210938)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg
                width="53"
                height="53"
                viewBox="0 0 53 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex w-[52.425px] h-[52.425px] justify-center items-center p-[14px_17px] rounded-[5px] border border-[#FFF] hover:border-[#A35AFF] transition-colors"
              >
                <rect
                  x="0.801025"
                  y="0.5"
                  width="51.4254"
                  height="51.4254"
                  rx="4.5"
                  stroke="white"
                ></rect>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21.3937 35.1777V23.0813H17.3735V35.1776H21.3937V35.1777ZM19.384 21.4304C20.7855 21.4304 21.6585 20.5007 21.6585 19.34C21.632 18.1534 20.7855 17.25 19.4103 17.25C18.0349 17.25 17.1359 18.1534 17.1359 19.34C17.1359 20.5008 18.0084 21.4304 19.3576 21.4304L19.384 21.4304ZM23.6187 35.1777C23.6187 35.1777 23.6714 24.2163 23.6187 23.0813H27.6394V24.8356H27.6128C28.1414 24.0101 29.0939 22.7973 31.2626 22.7973C33.9084 22.7973 35.8916 24.5262 35.8916 28.2417V35.1777H31.8714V28.7065C31.8714 27.0805 31.2898 25.9709 29.8345 25.9709C28.724 25.9709 28.0623 26.7189 27.7716 27.442C27.6653 27.6994 27.6394 28.0609 27.6394 28.4224V35.1777H23.6187Z"
                  fill="white"
                ></path>
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg
                width="54"
                height="53"
                viewBox="0 0 54 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex w-[52.425px] h-[52.425px] justify-center items-center p-[17px_13px] rounded-[5px] border border-[#FFF] hover:border-[#A35AFF] transition-colors"
              >
                <rect
                  x="1.22644"
                  y="0.5"
                  width="51.4254"
                  height="51.4254"
                  rx="4.5"
                  stroke="white"
                ></rect>
                <path
                  d="M36.7603 17.1401C36.7603 17.1401 33.6281 16.7461 26.9014 16.7461C20.3928 16.7461 17.1167 17.1401 17.1167 17.1401C16.28 17.1404 15.4776 17.4731 14.886 18.0648C14.2945 18.6566 13.9622 19.4591 13.9622 20.2959V32.1332C13.962 32.5476 14.0435 32.958 14.2019 33.341C14.3604 33.7239 14.5927 34.0719 14.8856 34.365C15.1786 34.6582 15.5264 34.8908 15.9092 35.0495C16.292 35.2082 16.7023 35.29 17.1167 35.2902C17.1167 35.2902 20.1628 35.6818 26.9014 35.6818C33.6364 35.6818 36.7603 35.2902 36.7603 35.2902C37.1749 35.2905 37.5855 35.209 37.9686 35.0505C38.3517 34.8919 38.6998 34.6594 38.9929 34.3661C39.286 34.0729 39.5184 33.7248 39.6768 33.3416C39.8352 32.9585 39.9165 32.5478 39.9161 32.1332V20.2935C39.9161 19.8792 39.8344 19.469 39.6758 19.0862C39.5172 18.7035 39.2847 18.3557 38.9916 18.0629C38.6986 17.77 38.3507 17.5378 37.9678 17.3795C37.5849 17.2211 37.1746 17.1398 36.7603 17.1401ZM23.4719 30.9028V21.5299L31.8881 26.2134L23.4719 30.9028Z"
                  fill="white"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
