import './Chat.css'
import Navbar from '../navbar/Navbar'
import "@fontsource/blinker";
const Chat = () => {
  return (
    <div className=' container max-w-full max-h-full'>
        <Navbar />
        <div className='background'>

        </div>
        <div className="chat-page">
{/*             
            <svg width="1920" height="802" viewBox="0 0 1920 882" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.2" clip-path="url(#clip0_137_1009)" filter="url(#filter0_d_137_1009)">
            <path d="M0 310.777C0 301.626 2.53298 292.475 7.17678 284.38C12.2427 276.989 22.3747 261.855 153.668 261.855V265.374C25.3298 265.374 14.7757 280.156 10.9763 286.14C6.33245 293.883 4.22164 302.33 4.22164 311.128H0V310.777Z" fill="#235666"/>
            <path d="M1.68848 337.173L5.91011 336.821C7.59877 347.732 10.1317 358.642 13.0869 369.553L8.86526 370.257C5.91011 359.346 3.37713 348.436 1.68848 337.173Z" fill="#235666"/>
            <path d="M49.3935 432.553C66.7022 458.246 104.275 465.989 139.314 458.246C170.132 451.207 336.043 427.274 351.24 422.698C382.903 430.793 418.787 462.117 418.787 462.117C414.143 430.441 386.702 299.162 325.488 284.38C280.317 273.469 37.1507 264.67 19.842 290.011C1.68899 316.76 32.0848 406.86 49.3935 432.553Z" fill="#235666"/>
            <path d="M74.3012 326.966C68.8131 327.318 63.7471 323.799 63.325 318.871C62.9028 314.296 67.1244 310.073 73.0347 309.721C190.396 295.642 325.911 305.849 327.177 305.849C332.665 306.201 336.887 310.425 336.465 315.352C336.043 319.927 330.977 323.447 325.066 323.095C323.8 323.095 190.818 313.24 75.5677 326.966C75.1455 326.966 74.7234 326.966 74.3012 326.966Z" fill="white"/>
            <path d="M79.7889 364.978C79.3667 360.402 83.5884 356.179 89.0765 355.827C173.509 343.86 259.631 339.285 345.33 342.1C350.818 342.452 355.462 346.324 355.04 351.251C354.617 355.827 349.974 359.698 344.063 359.346C260.053 356.531 175.62 361.106 92.4538 373.073C92.0316 373.073 91.1873 373.073 90.7651 373.073C85.277 373.073 80.211 369.553 79.7889 364.978Z" fill="white"/>
            <path d="M159.156 419.883C154.513 419.883 150.713 417.419 149.447 413.547C147.758 408.972 151.135 404.045 156.623 402.989C222.059 387.503 289.605 380.816 357.573 382.575C363.061 382.927 367.705 386.799 367.283 391.726C366.861 396.302 362.217 400.173 356.307 399.821C290.872 398.061 225.436 404.749 162.534 419.531C160.845 419.883 160.001 419.883 159.156 419.883Z" fill="white"/>
            <path d="M1464.06 384.335C1462.8 385.743 1461.95 385.743 1459.84 385.391C1444.64 381.168 1429.87 376.944 1414.67 372.721C1413.83 372.369 1412.98 372.721 1412.56 373.073C1406.23 378.352 1399.89 383.631 1393.56 388.911C1393.14 389.263 1392.72 389.614 1392.3 389.614C1391.03 390.318 1388.92 389.615 1388.92 388.207C1388.92 387.855 1388.92 387.503 1388.92 387.151C1388.92 380.112 1388.92 373.425 1388.92 366.385C1388.92 366.033 1388.92 365.682 1388.92 365.33C1388.5 365.33 1388.07 364.978 1387.65 364.978C1374.14 361.106 1360.21 357.235 1346.7 353.363C1345.44 353.011 1344.59 352.659 1344.17 351.251C1344.17 350.196 1345.01 349.492 1346.28 349.14C1384.27 332.95 1422.69 316.76 1460.69 300.922C1460.69 300.922 1460.69 300.922 1461.11 300.57C1461.95 300.57 1463.22 300.57 1464.06 300.57C1464.06 328.374 1464.06 356.179 1464.06 384.335ZM1459.42 309.369C1438.31 326.966 1416.78 344.564 1394.83 362.514C1412.14 367.441 1429.45 372.369 1446.75 377.296C1446.75 376.944 1446.75 376.592 1446.75 376.24C1446.75 370.257 1446.75 364.626 1446.75 358.642C1446.75 358.29 1446.75 357.587 1446.75 357.235C1447.18 356.531 1448.02 355.827 1448.87 355.827C1449.71 355.827 1450.55 356.179 1450.98 357.235C1450.98 357.587 1450.98 357.939 1450.98 358.642C1450.98 361.81 1450.98 364.978 1450.98 368.145C1450.98 371.665 1450.98 375.184 1450.98 378.704C1453.51 379.408 1456.04 380.112 1459 380.816C1459.42 356.883 1459.42 332.95 1459.42 309.369ZM1352.61 350.547C1353.03 350.899 1353.46 350.899 1353.88 350.899C1365.28 354.067 1377.1 357.587 1388.5 360.754C1389.34 361.106 1389.76 360.754 1390.61 360.402C1410.87 343.156 1431.56 326.263 1452.24 309.017C1452.67 308.665 1452.67 308.665 1453.09 308.313C1419.74 322.391 1386.39 336.469 1352.61 350.547ZM1393.56 382.927C1398.63 379.056 1403.27 374.832 1408.34 370.609C1403.69 369.201 1398.63 367.793 1393.56 366.385C1393.56 372.017 1393.56 377.296 1393.56 382.927Z" fill="black" fill-opacity="0.75"/>
            <path d="M1377.94 374.128C1377.52 374.832 1377.1 375.536 1376.68 375.888C1371.19 380.464 1365.7 385.391 1359.79 389.966C1358.52 391.022 1357.26 391.022 1355.99 390.318C1355.15 389.614 1355.15 388.207 1356.41 387.503C1361.9 382.927 1367.81 378 1373.3 373.424C1374.14 372.721 1374.99 372.369 1375.83 372.721C1376.68 373.073 1377.1 373.776 1377.94 374.128Z" fill="black" fill-opacity="0.75"/>
            <path d="M1426.07 383.983C1425.65 384.687 1425.22 385.391 1424.8 385.743C1419.31 390.318 1413.83 394.894 1408.34 399.469C1407.07 400.525 1405.8 400.525 1404.96 399.821C1404.12 399.117 1404.12 397.709 1405.38 397.006C1410.87 392.43 1416.36 387.855 1421.85 383.279C1422.69 382.575 1423.54 382.223 1424.38 382.575C1424.8 382.575 1425.22 383.279 1426.07 383.983Z" fill="black" fill-opacity="0.75"/>
            <path d="M1352.19 395.598C1350.92 395.598 1350.08 394.894 1349.66 393.838C1349.66 392.782 1350.5 392.078 1351.77 391.726C1353.03 391.726 1353.88 392.43 1354.3 393.486C1354.3 394.894 1353.46 395.598 1352.19 395.598Z" fill="black" fill-opacity="0.75"/>
            <path d="M1448.87 348.436C1450.13 348.436 1450.98 349.492 1450.98 350.195C1450.98 351.251 1449.71 351.955 1448.87 351.955C1447.6 351.955 1446.75 350.899 1446.75 350.195C1446.75 349.492 1447.6 348.436 1448.87 348.436Z" fill="black" fill-opacity="0.75"/>
            <path d="M292.56 482.883C315.356 535.324 359.261 581.43 415.409 611.346C429.341 618.737 444.116 625.425 460.159 626.832C476.201 628.24 493.932 624.017 504.064 613.106C519.684 595.86 507.019 567.704 482.955 559.961C458.892 552.218 430.185 562.777 415.831 580.726C401.478 598.676 400.211 622.257 406.966 643.022C416.676 673.642 442.428 699.335 473.246 717.989C504.064 736.642 539.525 748.257 574.987 758.816C645.91 779.229 718.945 794.363 793.246 803.162C831.24 807.737 870.924 810.905 908.074 801.754C954.512 790.14 992.085 759.519 1013.19 722.916C1048.23 661.324 1034.3 581.782 977.309 533.212C920.317 484.642 823.219 472.676 753.14 507.52C688.971 539.195 653.932 605.363 660.264 667.659C666.596 729.955 710.924 787.676 770.871 824.279C831.24 861.235 905.963 878.48 980.686 880.592C1119.58 884.816 1262.27 834.134 1345.86 740.866C1429.45 647.598 1447.18 512.447 1378.79 410.732" stroke="black" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-dasharray="10 10"/>
            <path d="M1913.67 72.5028C1913.67 59.8324 1910.29 47.162 1903.54 35.5475C1897.63 27.1006 1882.43 4.92737 1692.03 4.92737V0C1886.23 0 1901.85 22.5251 1909.02 33.4357C1916.2 45.7542 1920 59.1285 1919.58 72.8547H1913.67V72.5028Z" fill="url(#paint0_linear_137_1009)"/>
            <path d="M1906.91 160.844L1901 159.788C1905.65 143.95 1909.02 127.76 1911.56 111.218L1917.47 111.922C1914.93 128.464 1911.56 144.654 1906.91 160.844Z" fill="url(#paint1_linear_137_1009)"/>
            <path d="M1890.45 41.8827C1864.7 4.2235 1504.17 17.2458 1437.05 33.4358C1346.7 55.257 1305.75 249.888 1299 297.05C1299 297.05 1352.19 250.592 1399.05 238.626C1421.43 245.313 1667.55 280.86 1713.14 291.067C1765.49 302.682 1821.21 291.067 1846.54 253.056C1872.3 215.397 1917.47 81.3017 1890.45 41.8827Z" fill="url(#paint2_linear_137_1009)"/>
            <path d="M1809.82 96.4357C1808.97 96.4357 1808.55 96.4357 1807.71 96.4357C1637.15 76.0223 1439.58 90.4525 1437.47 90.8044C1429.02 91.5084 1421.43 86.229 1421 79.1899C1420.16 72.1508 1426.49 65.8156 1434.93 65.4637C1437.05 65.4637 1638 50.6815 1811.93 71.4469C1820.37 71.7989 1826.7 78.1341 1826.28 85.1732C1825.86 92.2123 1818.26 96.7877 1809.82 96.4357Z" fill="white"/>
            <path d="M1784.91 164.363C1784.06 164.363 1783.22 164.363 1782.37 164.363C1659.1 146.765 1534.14 140.078 1409.18 143.95C1400.74 144.302 1393.56 139.022 1393.14 131.983C1392.72 124.944 1399.05 118.961 1407.49 118.609C1534.56 114.385 1662.06 121.073 1787.86 139.022C1796.31 139.726 1802.64 145.709 1801.79 152.749C1800.95 159.788 1793.35 165.067 1784.91 164.363Z" fill="white"/>
            <path d="M1684.01 234.402C1682.74 234.402 1681.06 234.402 1679.79 234.05C1586.49 212.229 1489.39 202.374 1392.3 204.838C1383.85 205.19 1376.68 199.911 1375.83 192.871C1375.41 185.832 1381.74 179.849 1390.18 179.145C1490.66 176.33 1591.13 186.184 1687.81 209.061C1695.83 211.173 1700.48 218.212 1698.36 224.899C1696.68 230.531 1690.77 234.402 1684.01 234.402Z" fill="white"/>
            </g>
            <defs>
            <filter id="filter0_d_137_1009" x="-4" y="0" width="1928" height="890" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_137_1009"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_137_1009" result="shape"/>
            </filter>
            <linearGradient id="paint0_linear_137_1009" x1="1739.51" y1="36.4274" x2="1890.96" y2="36.4274" gradientUnits="userSpaceOnUse">
            <stop stop-color="#92CAAD"/>
            <stop offset="0.307292" stop-color="#93D2E6"/>
            <stop offset="0.862525" stop-color="#EEBAA5"/>
            <stop offset="0.947917" stop-color="#EEBAA5"/>
            </linearGradient>
            <linearGradient id="paint1_linear_137_1009" x1="1904.44" y1="136.031" x2="1915.39" y2="136.031" gradientUnits="userSpaceOnUse">
            <stop stop-color="#92CAAD"/>
            <stop offset="0.307292" stop-color="#93D2E6"/>
            <stop offset="0.862525" stop-color="#EEBAA5"/>
            <stop offset="0.947917" stop-color="#EEBAA5"/>
            </linearGradient>
            <linearGradient id="paint2_linear_137_1009" x1="1424.13" y1="157.24" x2="1823.26" y2="157.24" gradientUnits="userSpaceOnUse">
            <stop stop-color="#92CAAD"/>
            <stop offset="0.307292" stop-color="#93D2E6"/>
            <stop offset="0.862525" stop-color="#EEBAA5"/>
            <stop offset="0.947917" stop-color="#EEBAA5"/>
            </linearGradient>
            <clipPath id="clip0_137_1009">
            <rect width="1920" height="882" fill="white"/>
            </clipPath>
            </defs>
            </svg> */}
            

        </div>
        <div className="chat-page-body">
                <div className="chat-page-body-left">
                    <div className="chat-menu-header">
                        <div className="chat-menu-header-title">
                            Chats
                        </div>
                       
                    </div>
                    <div  className="chat-menu-body">
                            <div   className="chat-elment">
                                <div className="chat-elment-top">
                                    <img  src='https://img.freepik.com/free-vector/meta-icon-social-media-flat-graphic-vector-3-november-2021-bangkok-thailand_53876-157871.jpg?w=2000' alt="offer" />
                                    <div className="chat-elment-company-titls">
                                        <span className='chat-elment-company-name'>Company Name</span>
                                        <span className='chat-elment-subtitle'>Subtitle</span>
                                    </div>
                                </div>
                                <div className="chat-elment-bottom">
                                    <svg  width="250" height="1" viewBox="0 0 240 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0.5H240" stroke="#386775"/>
                                    </svg>
                                </div>


                            </div>

                            <div   className="chat-elment">
                                <div className="chat-elment-top">
                                    <img  src='https://img.freepik.com/free-vector/meta-icon-social-media-flat-graphic-vector-3-november-2021-bangkok-thailand_53876-157871.jpg?w=2000' alt="offer" />
                                    <div className="chat-elment-company-titls">
                                        <span className='chat-elment-company-name'>Company Name</span>
                                        <span className='chat-elment-subtitle'>Subtitle</span>
                                    </div>
                                </div>
                                <div className="chat-elment-bottom">
                                    <svg  width="250" height="1" viewBox="0 0 240 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0.5H240" stroke="#386775"/>
                                    </svg>
                                </div>


                            </div>

                            <div   className="chat-elment">
                                <div className="chat-elment-top">
                                    <img  src='https://img.freepik.com/free-vector/meta-icon-social-media-flat-graphic-vector-3-november-2021-bangkok-thailand_53876-157871.jpg?w=2000' alt="offer" />
                                    <div className="chat-elment-company-titls">
                                        <span className='chat-elment-company-name'>Company Name</span>
                                        <span className='chat-elment-subtitle'>Subtitle</span>
                                    </div>
                                </div>
                                <div className="chat-elment-bottom">
                                    <svg  width="250" height="1" viewBox="0 0 240 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0.5H240" stroke="#386775"/>
                                    </svg>
                                </div>


                            </div>

                            <div  className="chat-elment">
                                <div className="chat-elment-top">
                                    <img  src='https://img.freepik.com/free-vector/meta-icon-social-media-flat-graphic-vector-3-november-2021-bangkok-thailand_53876-157871.jpg?w=2000' alt="offer" />
                                    <div className="chat-elment-company-titls">
                                        <span className='chat-elment-company-name'>Company Name</span>
                                        <span className='chat-elment-subtitle'>Subtitle</span>
                                    </div>
                                </div>
                                <div className="chat-elment-bottom">
                                    <svg  width="250" height="1" viewBox="0 0 240 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0.5H240" stroke="#386775"/>
                                    </svg>
                                </div>


                            </div>

                            <div   className="chat-elment">
                                <div className="chat-elment-top">
                                    <img  src='https://img.freepik.com/free-vector/meta-icon-social-media-flat-graphic-vector-3-november-2021-bangkok-thailand_53876-157871.jpg?w=2000' alt="offer" />
                                    <div className="chat-elment-company-titls">
                                        <span className='chat-elment-company-name'>Company Name</span>
                                        <span className='chat-elment-subtitle'>Subtitle</span>
                                    </div>
                                </div>
                                <div className="chat-elment-bottom">
                                    <svg  width="250" height="1" viewBox="0 0 240 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0.5H240" stroke="#386775"/>
                                    </svg>
                                </div>


                            </div>

                            
                            
                            
                    </div>
                </div>
                <div className="chat-page-body-right">
                    <div className="messaging-container">
                        <div className="messaging-top">
                            <div className="messaging-top-headr">
                                Company Name
                            </div>

                            <div className="messaging-top-subtitle">
                                Subtitle | chatting with HR 
                            </div>

                        
                         </div>    

                         <div className="messaging-middel-container">
                                <div className="messaging-middel">
                                    <div className="messaging-middel-left">
                                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis commodi nulla debitis omnis eligendi ullam possimus ea saepe aliquid! Nam doloremque molestias incidunt eaque nisi enim dicta amet, reprehenderit error.</p>
                                       
                                    </div>
                                    <div className="messaging-middel-left">
                                        <p> this is the other person message</p>
                                       
                                    </div>
                                    <div className="messaging-middel-right">
                                        <p> this is my message</p>
                                    </div>
                                </div>
                         </div>

                            <div className="messaging-bottom">
                                <div className="messaging-bottom-input">
                                    <input type="text" placeholder="Write a message" />
                                </div>
                                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_142_1665)">
                                    <path d="M39.0106 0C26.1484 7.27273 13.4276 14.5455 0.706714 21.8182C0.282685 21.9763 0 22.2925 0 22.7668C0 23.2411 0.424028 23.5573 0.848057 23.7154C5.37103 25.4545 10.0353 27.1937 14.5583 28.9328C14.6996 28.9328 14.841 29.0909 14.9823 29.0909V38.8933C14.9823 39.0514 14.9823 39.2095 14.9823 39.3676C15.1237 40 15.689 40.3162 16.1131 40C16.2544 39.8419 16.3958 39.6838 16.5371 39.6838C18.6572 37.3123 20.7774 34.9407 22.8975 32.5692C23.1802 32.253 23.3216 32.253 23.6042 32.4111C28.6926 34.3083 33.6396 36.2055 38.7279 38.1028C39.4346 38.419 39.576 38.2609 40.1413 37.6285V0H39.0106ZM16.5371 37.1542C16.5371 36.996 16.5371 36.996 16.5371 37.1542L16.3958 29.7233C18.0919 30.3557 19.788 30.9881 21.3428 31.6206C19.788 33.3597 18.0919 35.2569 16.5371 37.1542ZM38.4452 36.0474C37.5972 35.7312 36.6078 35.415 35.7597 35.0988V26.087C35.7597 25.9289 35.7597 25.7708 35.7597 25.4545C35.6184 25.1383 35.3357 24.8221 35.053 24.8221C34.629 24.8221 34.4876 24.9802 34.3463 25.4545C34.3463 25.6126 34.3463 25.9289 34.3463 26.087C34.3463 28.7747 34.3463 31.3043 34.3463 33.9921V34.4664C28.5512 32.253 22.7562 30.0395 16.9611 27.8261C24.1696 19.7628 31.3781 11.8577 38.5866 3.95257V36.0474H38.4452Z" fill="#396675"/>
                                    <path d="M35.0534 21.502C35.4774 21.502 35.7601 21.9763 35.7601 22.2925C35.7601 22.7668 35.3361 23.083 35.0534 23.083C34.6294 23.083 34.3467 22.6087 34.3467 22.2925C34.3467 21.9763 34.6294 21.502 35.0534 21.502Z" fill="url(#paint0_linear_142_1665)"/>
                                    </g>
                                    <defs>
                                    <linearGradient id="paint0_linear_142_1665" x1="34.6416" y1="22.2925" x2="35.5822" y2="22.2925" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#92CAAD"/>
                                    <stop offset="0.307292" stop-color="#93D2E6"/>
                                    <stop offset="0.862525" stop-color="#EEBAA5"/>
                                    <stop offset="0.947917" stop-color="#EEBAA5"/>
                                    </linearGradient>
                                    <clipPath id="clip0_142_1665">
                                    <rect width="40" height="40" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>

                            </div>

                    </div>

                </div>
             </div>

    </div>
  )
}

export default Chat