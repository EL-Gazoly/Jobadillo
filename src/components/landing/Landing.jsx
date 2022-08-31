import './Landing.css';
import React from"react";
function Landing(){
  return<Desktop3{... desktop3Data}/>;
}
export default Landing;
function Desktop3(props){
  const{intern,internships,courses,jobs,login,register,title,myApplications,pleaseLogInToReviewYourHistory}=props;
  return(
    <div className="container-center-horizontal">
      <div className="window screen">
        <div className="flex-col">
          <div className="flex-row">
            <div className="website-name valign-text-middle">
              {intern}
            </div>
            <div className="container inter-normal-black-24px">
              <div className="internship-group">
                <div className="internship-title valign-text-middle">
                   {internships}
                </div>
                <svg className='internship-icon' width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8.55607V8.28429C0.124441 8.19024 0.255371 8.10517 0.391806 8.02971C5.89755 5.39094 11.4045 2.75187 16.9126 0.1125C17.0427 0.0396582 17.1891 0.00096819 17.3381 1.79371e-05C17.487 -0.000932316 17.6338 0.035888 17.7649 0.107064C23.2273 2.73254 28.6924 5.35259 34.1602 7.9672C34.3361 8.06305 34.5064 8.16892 34.6703 8.28429V8.55607C34.5396 8.65927 34.4014 8.75254 34.2568 8.83511C33.1012 9.3959 31.9421 9.94854 30.7829 10.5021C30.5121 10.6316 30.2413 10.7558 29.9316 10.9007C29.9776 10.4849 29.7592 10.3734 29.4387 10.3155C26.1803 9.71631 22.923 9.11234 19.667 8.50353C18.9186 8.36401 18.1693 8.23174 17.4019 8.09131C17.3586 8.32415 17.3216 8.52074 17.2828 8.73183C17.4065 8.76263 17.5139 8.79525 17.6231 8.81608C21.4112 9.51851 25.1995 10.2221 28.9882 10.927C29.1092 10.9496 29.2148 11.052 29.3981 11.1571L29.9343 10.9125V11.3292C29.9343 12.8549 29.9343 14.3805 29.9298 15.9062C29.9298 16.1254 29.9767 16.2368 30.2006 16.3256C30.8434 16.5793 31.2361 17.1944 31.1458 17.8839C31.098 18.2571 30.9021 18.6086 30.7613 19.0091C31.3733 19.4032 31.7967 20.0138 31.8184 20.8473C31.8365 21.5476 31.8184 22.2488 31.8247 22.9491C31.8247 23.2599 31.6884 23.4093 31.3778 23.4084C30.1934 23.4084 29.009 23.4084 27.8245 23.4084C27.4788 23.4084 27.3614 23.2852 27.3596 22.9355C27.3551 22.257 27.3506 21.5766 27.3596 20.9007C27.3704 20.1651 27.6819 19.5753 28.2624 19.1278C28.3391 19.0689 28.4176 19.0127 28.5034 18.9466L28.4077 18.8215C27.681 17.9065 27.9735 16.7378 29.0568 16.2948C29.2374 16.2196 29.2527 16.1191 29.2527 15.9623C29.2527 14.4711 29.2527 12.979 29.2527 11.4878C29.2478 11.4052 29.2385 11.3229 29.2247 11.2413C28.3274 11.6717 27.4679 12.092 26.6003 12.4925C26.3945 12.5876 26.3295 12.7027 26.3295 12.9264C26.3385 15.108 26.3115 17.2896 26.3467 19.4693C26.3602 20.3526 26.028 21.0321 25.3265 21.4833C24.6883 21.8937 24.0049 22.2832 23.2872 22.5142C19.7907 23.6413 16.2374 23.6621 12.6678 22.8947C11.4716 22.6375 10.3206 22.2461 9.3275 21.4968C8.65854 20.9922 8.30194 20.3535 8.31549 19.4711C8.35069 17.3022 8.32271 15.1316 8.33264 12.9618C8.33264 12.7163 8.27306 12.5876 8.03924 12.4771C5.48438 11.2661 2.93343 10.0461 0.386389 8.81699C0.251277 8.73983 0.122119 8.65261 0 8.55607H0ZM8.99708 12.9464C8.99708 14.0643 9.03139 15.127 8.98444 16.187C8.95285 16.9118 9.26611 17.3919 9.81681 17.7779C10.5092 18.2635 11.2847 18.5633 12.0882 18.7971C14.1357 19.3923 16.2319 19.5472 18.3499 19.4566C19.9992 19.386 21.6269 19.1586 23.1915 18.595C23.9137 18.3341 24.6359 18.0415 25.1776 17.4762C25.3861 17.2588 25.6217 16.9525 25.629 16.678C25.6786 15.4523 25.6506 14.2238 25.6506 12.9636C25.5107 13.0243 25.3988 13.0696 25.2895 13.1221C22.7479 14.3361 20.2078 15.5525 17.6692 16.7713C17.5624 16.8303 17.4426 16.8613 17.3207 16.8613C17.1988 16.8613 17.079 16.8303 16.9722 16.7713C15.5756 16.0873 14.1736 15.4206 12.7689 14.7483L8.99708 12.9464Z" fill="black"/>
                <path d="M0 26.9354C0.0505556 26.7542 0.0947917 26.5658 0.154375 26.3846C0.356705 25.7738 0.746072 25.2427 1.26694 24.867C1.78781 24.4914 2.41358 24.2904 3.055 24.2927C5.13139 24.2837 7.20778 24.2927 9.28417 24.2927H31.2704C33.131 24.2927 34.144 25.0718 34.6351 26.8783C34.6433 26.8994 34.6539 26.9195 34.6667 26.9381V27.7535C34.6506 27.7825 34.637 27.8128 34.626 27.8441C34.134 29.6252 33.1319 30.3989 31.2803 30.3989H18.0095V30.803C18.0095 31.9101 18.0158 33.0162 18.0032 34.1224C18.0032 34.3036 17.9192 34.4848 17.8741 34.666H17.5356C17.0571 34.3036 16.5813 33.9412 16.0965 33.5788C16.061 33.5613 16.0218 33.5525 15.9822 33.5533C15.9426 33.5541 15.9038 33.5644 15.869 33.5834C15.3815 33.9367 14.9022 34.3009 14.4246 34.6624H14.1538C14.086 34.4939 13.9624 34.3272 13.9597 34.1587C13.9425 33.0298 13.9506 31.9001 13.9506 30.7713V30.3889H13.5083C10.047 30.3889 6.58637 30.3889 3.12632 30.3889C1.73785 30.3889 0.575972 29.5618 0.157986 28.2953C0.0984028 28.1141 0.0550694 27.9284 0.00361111 27.7453L0 26.9354ZM29.25 27.3186C29.2445 27.789 29.3781 28.2504 29.6341 28.6445C29.89 29.0386 30.2567 29.3477 30.6877 29.5326C31.1187 29.7174 31.5947 29.7698 32.0554 29.6831C32.5161 29.5964 32.9408 29.3745 33.2758 29.0454C33.6108 28.7164 33.8409 28.295 33.9372 27.8346C34.0334 27.3743 33.9914 26.8956 33.8164 26.4592C33.6414 26.0228 33.3413 25.6483 32.9542 25.3831C32.567 25.118 32.1102 24.974 31.6415 24.9695C31.0145 24.9649 30.4112 25.2093 29.9632 25.6494C29.5152 26.0895 29.2588 26.6895 29.25 27.3186ZM15.7616 24.9749C15.1459 24.9749 14.5961 24.9459 14.0463 24.9803C12.8944 25.0537 11.9961 25.9769 11.8797 27.1628C11.7812 28.2663 12.5342 29.3951 13.6319 29.6171C14.3 29.7511 15.0033 29.7077 15.7797 29.7539C14.1556 28.1757 14.4598 26.1382 15.7616 24.9749ZM14.6458 30.4107V33.6441C14.9988 33.3868 15.3274 33.1712 15.6262 32.9193C15.8844 32.7028 16.0947 32.7245 16.343 32.9256C16.6454 33.1703 16.9677 33.3895 17.3153 33.6459V30.4089L14.6458 30.4107Z" fill="black"/>
                </svg>

              </div>
              <div className="courses-group">
                <div className="courses-title valign-text-middle">
                   {courses}
                </div>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33.1915 1.2966C32.8451 2.32779 32.4987 3.35638 32.16 4.39015C31.3944 6.73689 30.6418 9.08882 29.8641 11.4321C29.7785 11.6721 29.6251 11.8822 29.4224 12.0372C28.4282 12.7805 27.4184 13.5023 26.4025 14.2171C26.2085 14.3528 26.1687 14.485 26.2189 14.7029C26.4294 15.6096 26.9767 16.2284 27.8428 16.5275C28.2957 16.684 28.785 16.7436 29.2613 16.8266C29.3789 16.8289 29.4948 16.799 29.5965 16.7401C30.1083 16.5102 30.6133 16.2665 31.1251 16.0374C31.8725 15.7029 32.5679 16.136 32.6069 16.9562C32.6147 17.1291 32.6268 17.302 32.6268 17.4749C32.6316 17.6316 32.599 17.7873 32.5317 17.929C32.4645 18.0707 32.3645 18.1945 32.2399 18.2901C32.1153 18.3857 31.9698 18.4504 31.8153 18.479C31.6608 18.5075 31.5017 18.499 31.3511 18.4542C31.2645 18.4317 31.1874 18.3997 31.1052 18.3721C30.2469 18.0886 29.393 17.8206 28.4845 17.6927C26.9395 17.4749 25.7997 16.6822 25.3217 15.1117C25.3156 15.0944 25.2922 15.0823 25.2576 15.0503C24.9475 15.2716 24.6332 15.4955 24.3205 15.7202C23.1883 16.5344 22.0578 17.3489 20.9291 18.1638C20.6944 18.3366 20.4622 18.4559 20.1955 18.2502C19.9417 18.0557 19.9989 17.805 20.0846 17.544C20.5419 16.1507 20.9862 14.753 21.4513 13.3631C21.5275 13.1349 21.4799 13.0225 21.2937 12.8886C20.4778 12.3017 19.688 11.6784 18.8626 11.1097C18.3309 10.7415 18.162 10.2566 18.33 9.67745C18.4911 9.12167 18.6764 8.55378 18.9579 8.05677C20.1219 6.01342 21.5015 4.1222 23.1739 2.46176C23.5505 2.10754 23.9663 1.79725 24.4132 1.53689C24.8757 1.25166 25.3355 1.28969 25.7911 1.64494C26.6511 2.31396 27.5396 2.9458 28.4343 3.60704L30.751 1.94487C31.2507 1.5853 31.7486 1.22313 32.2484 0.864421C32.6926 0.544607 32.8442 0.562759 33.1915 0.972466V1.2966ZM21.4487 16.5033L21.5102 16.537C21.6072 16.4705 21.7042 16.4048 21.7994 16.3365C24.0754 14.6977 26.35 13.0554 28.6231 11.4096C28.8079 11.2714 28.9479 11.0821 29.0258 10.8651C29.9022 8.21495 30.7579 5.55877 31.6239 2.90431C31.6681 2.76688 31.7028 2.62685 31.7625 2.41509C30.8696 3.05904 30.0382 3.65544 29.212 4.25877C29.1553 4.31612 29.1183 4.38998 29.1063 4.46967C28.9903 4.96927 28.96 5.50691 28.7599 5.96502C27.7137 8.34806 26.1825 10.4009 24.3222 12.2048C23.9031 12.6237 23.4224 12.9764 22.8967 13.2507C22.5382 13.4288 22.3598 13.6259 22.2524 13.9872C22.003 14.8316 21.7189 15.6649 21.4487 16.5033ZM25.9227 2.96309C24.6124 6.07479 22.6923 8.68257 20.1202 10.8175L21.6314 11.9352C22.4602 12.5471 22.4689 12.5566 23.2605 11.86C24.9926 10.3378 26.3419 8.51489 27.434 6.50092C27.7085 5.99268 27.899 5.43689 28.1026 4.89407C28.1407 4.79381 28.1026 4.59155 28.0229 4.53104C27.3283 3.99341 26.6225 3.48084 25.9227 2.96309ZM24.9423 2.45658C23.3497 3.07805 19.4715 8.33423 19.3459 10.0353C20.9966 9.39221 24.8618 4.11096 24.9423 2.45658ZM31.6369 16.8802L30.8228 17.2536L31.6369 17.5189V16.8802Z" fill="black"/>
                  <path d="M0.648762 0C1.6785 0.408843 2.7065 0.823737 3.73884 1.22653C6.04947 2.12633 8.36356 3.01576 10.6673 3.9242C10.8625 4.00708 11.029 4.14534 11.1462 4.32181C13.048 7.28138 14.9433 10.245 16.8318 13.2126C16.9808 13.4469 17.0856 13.6811 16.889 13.9257C16.6924 14.1703 16.4456 14.1245 16.184 14.0199C15.4453 13.7252 14.7005 13.4443 13.9011 13.1357C13.9011 13.5065 13.9262 13.8376 13.8959 14.1643C13.7981 15.1888 13.9959 16.2199 14.4658 17.136C14.5359 17.2817 14.5958 17.4322 14.645 17.5863C14.6973 17.7315 14.7151 17.8868 14.6969 18.0399C14.6787 18.1931 14.625 18.34 14.5402 18.4689C14.4554 18.5979 14.3416 18.7053 14.208 18.7829C14.0744 18.8604 13.9246 18.9059 13.7703 18.9157C13.5331 18.9343 13.2948 18.9343 13.0576 18.9157C12.9033 18.9059 12.7534 18.8604 12.6199 18.7828C12.4863 18.7051 12.3728 18.5974 12.2882 18.4683C12.2036 18.3392 12.1504 18.1921 12.1327 18.0389C12.115 17.8856 12.1334 17.7304 12.1863 17.5854C12.2313 17.4413 12.2866 17.3007 12.3517 17.1645C12.833 16.2294 13.035 15.1761 12.9337 14.1297C12.8999 13.7442 12.9407 13.3518 12.919 12.9646C12.9138 12.8669 12.7978 12.7753 12.7319 12.6819C12.7267 12.6741 12.7129 12.6715 12.7025 12.6681C12.4002 12.5566 12.0694 12.3146 11.8035 12.3716C11.5593 12.4252 11.3792 12.7969 11.18 13.0354C10.6534 13.6638 10.1251 14.2922 9.60981 14.931C9.31969 15.2906 8.94295 15.4608 8.52292 15.3096C7.83007 15.0589 7.12597 14.791 6.48596 14.4322C4.39233 13.2478 2.56029 11.6531 1.09998 9.74395C0.848513 9.40739 0.629851 9.04762 0.446971 8.66955C0.226994 8.22959 0.273761 7.81296 0.620182 7.41363C1.33294 6.58989 2.01713 5.74023 2.72296 4.88969L0.683404 1.69156C0.510193 1.4262 0.341313 1.16343 0.173298 0.898936C-0.0917139 0.477992 -0.061402 0.302527 0.323992 0H0.648762ZM8.67448 14.3069C8.50127 14.0364 8.35317 13.7883 8.18775 13.5541C7.91062 13.1599 7.90456 12.917 8.18775 12.7139C8.47095 12.5108 8.70219 12.6015 8.98539 12.9896C9.13348 13.1936 9.27552 13.4019 9.43054 13.6232C9.83932 13.1314 10.2264 12.6672 10.6118 12.2013C11.3159 11.3491 11.3159 11.3473 10.6283 10.4648C9.62367 9.17693 8.41293 8.10425 7.12078 7.11888C6.20882 6.42739 5.25876 5.79209 4.19005 5.35213C3.86355 5.21729 3.62798 5.23198 3.42619 5.55266C3.28239 5.75528 3.12529 5.94817 2.95593 6.13005L1.93312 7.36523C1.97036 7.40758 1.98075 7.43092 1.99807 7.43697C3.9389 8.12846 5.45536 9.44401 6.9467 10.7976C7.11385 10.9497 7.1866 11.1269 7.09133 11.3482C6.94064 11.6983 6.58123 11.764 6.27118 11.4926C5.7273 11.0146 5.19641 10.5193 4.64213 10.0577C3.76655 9.33511 2.8468 8.67041 1.73219 8.35319C1.61701 8.32034 1.49749 8.30824 1.35113 8.28058C2.17735 10.2513 7.1381 14.2032 8.67448 14.3069ZM1.70102 1.48411C2.30725 2.43491 2.86239 3.30705 3.42533 4.174C3.4617 4.23019 3.5613 4.25352 3.63751 4.27513C4.09998 4.40824 4.5997 4.45838 5.0232 4.66755C7.4698 5.89667 9.52667 7.62799 11.2735 9.72061C11.5948 10.1035 11.9005 10.5443 12.0529 11.0111C12.2054 11.4779 12.5172 11.566 12.8991 11.668C12.915 11.6241 12.9261 11.5786 12.932 11.5323C12.932 10.7008 12.9398 9.86928 12.932 9.03863C12.9177 8.91124 12.8706 8.78973 12.7952 8.68597C12.0278 7.47586 11.2588 6.26576 10.4759 5.05565C10.3757 4.90797 10.2341 4.7931 10.0688 4.72546C7.75935 3.81789 5.44987 2.91751 3.1404 2.02433C2.68485 1.85665 2.23537 1.6881 1.70102 1.48411ZM13.9773 10.5452L13.9098 10.559C13.9098 11.0388 13.9098 11.5176 13.9098 11.9973C13.914 12.0225 13.9241 12.0464 13.9391 12.0671C13.9541 12.0878 13.9737 12.1047 13.9964 12.1166C14.3965 12.2783 14.8009 12.4321 15.2037 12.5886L15.2383 12.5263L13.9773 10.5452ZM13.1026 17.9208H13.7392L13.4178 17.1152C13.2923 17.4402 13.2005 17.6727 13.1026 17.9243V17.9208Z" fill="black"/>
                  <path d="M7.97399 33.1914C7.1651 32.8362 6.94079 32.3651 7.33745 31.5751C7.87613 30.5033 8.11689 29.4003 7.98785 28.2041C7.94542 27.8108 7.98092 27.4088 7.98092 26.9447C7.46129 26.9447 6.96504 26.9447 6.47226 26.9447C6.1804 26.9447 5.8894 26.9205 5.59754 26.9205C5.33773 26.9205 5.15239 26.8168 5.07791 26.5747C5.00343 26.3327 5.10996 26.1426 5.31954 25.9948C6.19656 25.3845 7.07186 24.7711 7.94541 24.1545C10.1394 22.6165 12.3297 21.0774 14.5162 19.5371C14.732 19.3767 14.9964 19.295 15.2653 19.3055C18.9605 19.385 22.6533 19.4593 26.3438 19.5285C26.4304 19.5285 26.5361 19.5034 26.5993 19.5432C26.7604 19.6443 26.9865 19.7515 27.0324 19.9019C27.0783 20.0523 26.9752 20.3029 26.8531 20.4205C26.6253 20.6444 26.3335 20.8069 26.0736 20.9927C25.0222 21.73 23.9778 22.4785 22.9134 23.1968C22.6458 23.3775 22.6094 23.5426 22.7038 23.8287C23.0329 24.8443 23.3274 25.8703 23.6565 26.8868C23.7673 27.2325 23.6972 27.4728 23.4062 27.7019C20.2468 30.186 16.6588 31.2812 12.655 31.0435C12.0202 31.0063 11.9752 30.964 11.789 30.3442C11.4763 29.3234 11.1585 28.3043 10.8562 27.2801C10.8008 27.0925 10.7246 27.0208 10.5245 27.0259C10.0187 27.0398 9.51211 27.0259 8.98035 27.0259C8.97429 27.0899 8.96043 27.172 8.96043 27.2541C8.96043 27.567 8.98381 27.8817 8.96043 28.1937C8.88439 29.3485 9.09749 30.504 9.58052 31.5561C9.93387 32.3495 9.76586 32.7394 9.02192 33.188L7.97399 33.1914ZM7.12093 25.9144L7.15384 25.993C7.27163 25.993 7.39027 25.993 7.50892 25.993C10.2517 26.0501 12.9954 26.0795 15.7364 26.1815C16.5886 26.2143 17.3317 26.1106 17.9544 25.5012C17.9791 25.4801 18.0058 25.4612 18.0341 25.445C18.3199 25.2583 18.571 25.2842 18.7468 25.5194C18.9365 25.7735 18.8889 26.0215 18.5927 26.2385C18.2532 26.4866 17.9163 26.7424 17.5534 26.9585C17.3668 27.0776 17.152 27.1453 16.9307 27.1547C15.3432 27.1366 13.7558 27.0942 12.1674 27.0596C12.0522 27.0596 11.9379 27.0596 11.7881 27.0596C12.086 28.0407 12.3701 28.9889 12.6689 29.9319C12.6905 29.9993 12.8239 30.0694 12.9088 30.0737C16.4423 30.2707 19.627 29.3102 22.4631 27.1919C22.6215 27.0735 22.651 26.9672 22.5912 26.7848C22.4111 26.2316 22.2509 25.6715 22.0803 25.1148C21.972 24.7604 21.8594 24.4078 21.7408 24.0275C21.3848 24.2747 21.0808 24.5227 20.7405 24.7034C20.6028 24.776 20.3265 24.7691 20.2208 24.6766C20.0961 24.5686 20.0407 24.3239 20.0476 24.1424C20.0528 24.0309 20.2209 23.909 20.3395 23.8243C21.8031 22.7906 23.2691 21.7597 24.7373 20.7317C24.8239 20.6686 24.9105 20.5968 25.0387 20.4983C24.9339 20.4862 24.8932 20.4775 24.8525 20.4767C21.6885 20.411 18.5248 20.3476 15.3614 20.2865C15.2135 20.2912 15.0703 20.3397 14.9501 20.4257C13.4818 21.4491 12.0156 22.4774 10.5514 23.5106C10.4743 23.565 10.4033 23.6264 10.2916 23.7111C10.3469 23.7144 10.4025 23.7144 10.4578 23.7111L15.8144 22.7767C16.2231 22.705 16.4622 22.8251 16.5228 23.138C16.5834 23.4509 16.4059 23.6567 15.9729 23.7353C13.6562 24.1398 11.3447 24.5781 9.02019 24.9307C8.23641 25.0491 7.72977 25.5436 7.12093 25.9144ZM8.11949 32.1974H8.77423L8.46851 31.3685L8.11949 32.1974Z" fill="black"/>
                  <path d="M11.7341 0C11.8207 0.139162 11.9498 0.267952 11.9879 0.42008C12.045 0.648271 11.9489 0.879056 11.7081 0.924003C11.5471 0.95512 11.2751 0.906715 11.2058 0.796077C11.1114 0.649136 11.1452 0.40625 11.1617 0.208311C11.1721 0.133976 11.2812 0.0691489 11.3453 0H11.7341Z" fill="black"/>
                  <path d="M21.4582 33.1915C21.3716 33.0524 21.2417 32.9236 21.2036 32.7715C21.1465 32.5433 21.2417 32.3125 21.4825 32.2667C21.6436 32.2364 21.9155 32.2848 21.9857 32.3946C22.0801 32.5415 22.0463 32.7844 22.0298 32.9832C22.0238 33.0567 21.9112 33.1224 21.8471 33.1915H21.4582Z" fill="black"/>
                  <path d="M33.1914 30.2095C33.0546 30.4178 32.8805 30.6028 32.6172 30.5042C32.4659 30.4365 32.3472 30.3124 32.2864 30.1585C32.2635 30.106 32.2516 30.0495 32.2515 29.9922C32.2514 29.935 32.263 29.8784 32.2858 29.8259C32.3085 29.7734 32.3418 29.7261 32.3837 29.6869C32.4255 29.6478 32.4749 29.6176 32.5289 29.5984C32.8372 29.4687 33.0416 29.6217 33.1914 29.8819V30.2095Z" fill="black"/>
                  <path d="M15.7623 6.73421C15.7002 6.73553 15.6384 6.72422 15.5808 6.70095C15.5232 6.67769 15.4709 6.64297 15.4271 6.5989C15.3834 6.55483 15.3491 6.50234 15.3263 6.44461C15.3035 6.38689 15.2928 6.32515 15.2946 6.26314C15.2877 5.97963 15.4679 5.77909 15.7329 5.76786C16.0178 5.75576 16.2179 5.95456 16.217 6.24931C16.2203 6.31123 16.211 6.37318 16.1897 6.43144C16.1684 6.4897 16.1355 6.54307 16.0931 6.58835C16.0506 6.63363 15.9994 6.66988 15.9426 6.69495C15.8858 6.72001 15.8244 6.73337 15.7623 6.73421V6.73421Z" fill="black"/>
                  <path d="M8.50638 18.9175C8.44421 18.9194 8.3823 18.9086 8.32442 18.8859C8.26654 18.8632 8.21389 18.8289 8.16966 18.7853C8.12544 18.7416 8.09057 18.6895 8.06716 18.632C8.04376 18.5744 8.03231 18.5128 8.03351 18.4507C8.02485 18.1663 8.19979 17.9658 8.46654 17.9528C8.75493 17.939 8.95326 18.1318 8.95412 18.4291C8.95811 18.4908 8.94957 18.5527 8.929 18.611C8.90844 18.6693 8.87629 18.7229 8.83448 18.7685C8.79266 18.8141 8.74204 18.8508 8.68566 18.8764C8.62928 18.902 8.5683 18.916 8.50638 18.9175V18.9175Z" fill="black"/>
                  <path d="M0.465142 14.0026C0.339594 13.9952 0.22184 13.9394 0.136726 13.847C0.0516126 13.7546 0.00579498 13.6328 0.00894099 13.5073C0.012087 13.3818 0.0639506 13.2625 0.153589 13.1744C0.243227 13.0864 0.363629 13.0365 0.489391 13.0354C0.611931 13.0469 0.725531 13.1044 0.807243 13.1963C0.888955 13.2881 0.932688 13.4075 0.92961 13.5303C0.926531 13.6531 0.876869 13.7702 0.790656 13.8578C0.704443 13.9455 0.588104 13.9973 0.465142 14.0026V14.0026Z" fill="black"/>
                  <path d="M27.1075 25.7762C27.1106 25.714 27.1261 25.653 27.1531 25.5969C27.1801 25.5408 27.2181 25.4906 27.2648 25.4493C27.3115 25.408 27.3659 25.3764 27.425 25.3564C27.4841 25.3364 27.5466 25.3284 27.6088 25.3329C27.6711 25.3373 27.7318 25.3541 27.7874 25.3822C27.843 25.4104 27.8925 25.4494 27.9328 25.4969C27.9732 25.5444 28.0036 25.5994 28.0224 25.6588C28.0411 25.7182 28.0478 25.7807 28.042 25.8427C28.0397 25.9045 28.0247 25.9651 27.998 26.0209C27.9713 26.0767 27.9333 26.1264 27.8866 26.1669C27.8398 26.2074 27.7852 26.2379 27.7261 26.2565C27.667 26.2751 27.6047 26.2813 27.5431 26.2749C27.4814 26.2715 27.421 26.2558 27.3655 26.2288C27.31 26.2017 27.2604 26.1638 27.2198 26.1173C27.1792 26.0708 27.1484 26.0167 27.1291 25.9581C27.1098 25.8995 27.1024 25.8376 27.1075 25.7762V25.7762Z" fill="black"/>
                  <path d="M20.298 2.60171C20.2937 2.88522 20.1109 3.07019 19.8364 3.07019C19.5618 3.07019 19.3644 2.8662 19.3765 2.568C19.3748 2.50602 19.3863 2.44439 19.4101 2.38712C19.4338 2.32984 19.4694 2.2782 19.5145 2.23556C19.5596 2.19292 19.6132 2.16023 19.6718 2.13962C19.7304 2.11901 19.7927 2.11094 19.8546 2.11594C20.1282 2.12458 20.3023 2.31561 20.298 2.60171Z" fill="black"/>
                  <path d="M18.2887 16.0771C18.2887 16.3615 18.1155 16.5508 17.8384 16.5569C17.55 16.5621 17.3603 16.365 17.3664 16.0659C17.363 16.004 17.3727 15.942 17.395 15.884C17.4173 15.8261 17.4516 15.7736 17.4957 15.7298C17.5398 15.686 17.5927 15.6521 17.6508 15.6302C17.709 15.6083 17.7711 15.5989 17.8332 15.6026C18.1086 15.6026 18.2879 15.7893 18.2887 16.0771Z" fill="black"/>
                  <path d="M30.4418 21.5459C30.1724 21.5329 29.9992 21.3359 30.0088 21.0506C30.0059 20.9886 30.0163 20.9267 30.0391 20.869C30.0619 20.8113 30.0967 20.759 30.1412 20.7157C30.1857 20.6724 30.2389 20.6389 30.2973 20.6175C30.3556 20.5961 30.4179 20.5873 30.4799 20.5916C30.7648 20.5968 30.9467 20.8034 30.9302 21.1034C30.9307 21.1655 30.918 21.227 30.893 21.2839C30.868 21.3409 30.8313 21.3919 30.7852 21.4336C30.7391 21.4754 30.6846 21.507 30.6255 21.5263C30.5663 21.5457 30.5037 21.5524 30.4418 21.5459V21.5459Z" fill="black"/>
                  <path d="M2.85789 22.7128C2.79587 22.7165 2.73376 22.7071 2.67562 22.6853C2.61748 22.6634 2.56461 22.6296 2.52047 22.5859C2.47633 22.5423 2.44192 22.4898 2.41947 22.432C2.39703 22.3742 2.38706 22.3123 2.39022 22.2503C2.38329 21.9642 2.55737 21.7698 2.82844 21.7585C3.1177 21.7473 3.31343 21.94 3.31257 22.2365C3.3117 22.533 3.13243 22.7093 2.85789 22.7128Z" fill="black"/>
                  <path d="M1.87488 30.7514C1.60034 30.7514 1.4202 30.5612 1.41847 30.2768C1.41674 29.9925 1.61246 29.7868 1.90086 29.7971C2.17367 29.8075 2.34688 30.0003 2.34082 30.2872C2.3442 30.3491 2.33446 30.4111 2.31224 30.469C2.29001 30.5269 2.25579 30.5795 2.21181 30.6233C2.16784 30.6671 2.1151 30.7011 2.05704 30.7232C1.99898 30.7453 1.93691 30.7549 1.87488 30.7514V30.7514Z" fill="black"/>
                </svg>

              </div>
              <div className="jobs-group">
                <div className="jobs valign-text-middle">
                   {jobs}
                   </div>
                   <svg width="44" height="35" viewBox="0 0 44 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 10.1747C0.198755 9.65209 0.315567 9.084 0.611955 8.59036C1.8533 6.53998 3.95069 5.47412 6.82217 5.42999C9.06426 5.39552 11.3081 5.4231 13.5519 5.4231H14.0523V3.86084C14.0523 1.57053 16.0486 0 18.948 0C20.7821 0 22.6162 0 24.4503 0C27.259 0 29.2658 1.59535 29.278 3.82085C29.278 4.34344 29.278 4.86466 29.278 5.42172H29.7696C31.9559 5.42172 34.1428 5.42172 36.3303 5.42172C40.3734 5.42172 43.3251 7.75615 43.3303 10.9551C43.3303 13.5433 43.3425 16.1314 43.3181 18.7195C43.3122 19.0614 43.2009 19.397 42.9938 19.6972C42.6312 20.1977 41.8431 20.377 41.1388 20.2101C40.8039 20.1332 40.5088 19.974 40.2959 19.7557C40.0831 19.5373 39.9637 19.271 39.9549 18.9953C39.9375 18.0811 39.9549 17.1669 39.9549 16.2238H23.4426C23.4426 16.8608 23.4426 17.5034 23.4426 18.1459C23.4426 18.7885 22.991 19.2766 22.3024 19.4628C22.0518 19.5328 21.7837 19.5546 21.5203 19.5265C21.2569 19.4984 21.0057 19.4212 20.7876 19.3012C20.5694 19.1811 20.3904 19.0218 20.2655 18.8363C20.1405 18.6507 20.0732 18.4444 20.069 18.2342C20.0428 17.5682 20.069 16.9008 20.069 16.2141H3.3858V26.0993C3.3858 27.9276 4.79104 29.0445 7.09415 29.0445H20.8902C21.8072 29.0445 22.4593 29.3892 22.6807 29.9863C22.7522 30.1678 22.7736 30.3594 22.7433 30.5481C22.7129 30.7367 22.6317 30.918 22.505 31.0796C22.3784 31.2413 22.2093 31.3795 22.0092 31.4849C21.809 31.5903 21.5826 31.6604 21.3452 31.6906C21.1636 31.7129 20.9798 31.7221 20.796 31.7182C16.1689 31.7182 11.5417 31.7182 6.91457 31.7182C3.8548 31.7182 1.33549 30.3048 0.35741 28.0614C0.203985 27.7084 0.116812 27.3361 0.00871731 26.9721L0 10.1747ZM39.9253 13.5047C39.9253 12.5394 39.995 11.5949 39.9079 10.6642C39.7649 9.11847 38.3823 8.105 36.468 8.10362C26.5954 8.09535 16.7227 8.09535 6.85007 8.10362C6.78033 8.10362 6.70885 8.10362 6.63911 8.10362C5.05256 8.18911 3.67522 9.0123 3.50087 10.1954C3.34222 11.2792 3.46775 12.3892 3.46775 13.5047H39.9253ZM17.4346 5.40517H25.8625C25.8625 4.76813 25.9061 4.14489 25.8486 3.52853C25.8203 3.29097 25.678 3.07101 25.4511 2.91381C25.2241 2.75662 24.9296 2.67412 24.6282 2.68328C22.6406 2.67317 20.6531 2.67317 18.6655 2.68328C18.3436 2.68327 18.0348 2.78383 17.8062 2.96305C17.5776 3.14228 17.4478 3.38567 17.4451 3.64022C17.4224 4.21934 17.4346 4.79847 17.4346 5.40517Z" fill="black"/>
                  <path d="M41.3917 34.2704C40.8687 34.1504 40.4572 33.8843 40.0771 33.5809C38.9212 32.6502 37.7514 31.7319 36.5641 30.7901C34.4719 31.7553 32.2804 32.0007 29.9877 31.3747C28.2607 30.9097 26.8089 29.9605 25.9063 28.7066C24.1105 26.3143 24.7329 23.1374 27.3673 21.2607C30.054 19.3427 34.0709 19.1731 36.9215 20.8002C39.6953 22.3817 41.3167 25.6979 38.9055 28.9727C39.1237 29.0945 39.3327 29.2261 39.5314 29.3671C40.5461 30.1586 41.5033 30.9983 42.5686 31.7429C43.7715 32.584 43.5205 33.9312 41.9008 34.2773L41.3917 34.2704ZM28.2704 25.6897C28.268 26.3516 28.514 26.9992 28.9772 27.5506C29.4404 28.1019 30.1 28.5322 30.8726 28.7869C31.6451 29.0416 32.4958 29.1093 33.3171 28.9814C34.1383 28.8536 34.8931 28.5359 35.4859 28.0686C36.0787 27.6013 36.4829 27.0054 36.6473 26.3563C36.8117 25.7072 36.7289 25.0342 36.4094 24.4224C36.0899 23.8105 35.548 23.2874 34.8524 22.9193C34.1569 22.5511 33.3388 22.3544 32.5018 22.3542C31.3855 22.3631 30.3178 22.717 29.5271 23.3403C28.7364 23.9636 28.2854 24.8068 28.2704 25.6897V25.6897Z" fill="black"/>
                  </svg>

                  </div>
                </div>
                  
                <div className="login valign-text-middle">
                  
                  {login}
                </div>
              
              <div className="register-button">
                <div className="register valign-text-middle">
                  {register}
                </div>
              </div>
              </div>
              <div className="body-group-container">
              <div className="cloud-container">
              <svg className='white-cloud' width="711" height="460" viewBox="0 0 711 460" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M-6.10352e-05 311.135V337.545C0.58844 339.166 1.07037 340.819 1.44312 342.497C3.74414 359.524 9.65942 375.932 18.8312 390.727C47.5738 435.706 89.8269 458.732 145.225 458.848C268.322 459.09 391.424 459.09 514.532 458.848C534.667 458.848 554.82 459.409 574.921 458.551C617.191 456.735 652.367 440.064 678.849 408.917C744.785 331.339 704.253 217.728 602.342 193.612C598.099 192.605 596.047 191.136 595.23 186.482C585.806 132.672 529.781 97.5306 474.73 111.033C467.775 112.683 465.393 110.818 462.35 105.321C425.835 39.4458 368.211 3.89179 289.825 0.243954C250.175 -1.75317 210.918 8.55403 177.985 29.6082C115.996 68.612 85.1321 123.808 85.8276 194.553C85.8276 198.927 84.7322 201.156 80.6112 203.07C40.3287 222.074 14.7393 252.335 3.84271 293.853C2.22559 299.565 1.2345 305.391 -6.10352e-05 311.135Z" fill="url(#paint0_linear_56_235)"/>
              <defs>
              <linearGradient id="paint0_linear_56_235" x1="167" y1="30.0294" x2="591" y2="450.029" gradientUnits="userSpaceOnUse">
              <stop stop-color="#DBF3FB"/>
              <stop offset="0.0001" stop-color="#DEF7FF"/>
              <stop offset="0.505208" stop-color="#FEEAE1"/>
              <stop offset="1" stop-color="#E4F4F1"/>
              <stop offset="1" stop-color="#CEF8F0"/>
              </linearGradient>
              </defs>
              </svg>

                <svg className='blue-cloud' width="861" height="556" viewBox="0 0 861 556" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 376.416V408.367C0.711914 410.328 1.29504 412.329 1.74597 414.358C4.52979 434.958 11.6862 454.808 22.7824 472.708C57.5556 527.124 108.674 554.982 175.696 555.121C324.62 555.414 473.551 555.414 622.489 555.121C646.849 555.121 671.23 555.8 695.548 554.762C746.688 552.565 789.244 532.396 821.283 494.714C901.053 400.859 852.017 263.41 728.722 234.235C723.59 233.017 721.107 231.24 720.119 225.608C708.717 160.509 640.937 117.994 574.336 134.329C565.922 136.326 563.04 134.069 559.358 127.42C515.182 47.7222 445.467 4.70835 350.635 0.295139C302.666 -2.12101 255.172 10.3488 215.329 35.8205C140.334 83.0079 102.994 149.785 103.836 235.373C103.836 240.665 102.51 243.361 97.5248 245.678C48.7904 268.669 17.8318 305.279 4.64899 355.508C2.69263 362.418 1.49353 369.467 0 376.416Z" fill="url(#paint0_linear_56_237)"/>
                <defs>
                <linearGradient id="paint0_linear_56_237" x1="430.069" y1="0" x2="430.069" y2="555.341" gradientUnits="userSpaceOnUse">
                <stop offset="0.213542" stop-color="#A3E4F8"/>
                <stop offset="0.869792" stop-color="#A7DCC0"/>
                </linearGradient>
                    </defs>
                </svg>

                <svg className='click-icon' width="145" height="145" viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_56_240)">
                <path d="M77.5271 144.911C79.4622 144.806 80.9619 143.701 81.865 141.656C85.3349 133.8 88.8289 125.954 92.3471 118.117C94.7942 112.609 97.185 107.084 99.7168 101.612C100.118 100.785 100.783 100.115 101.608 99.7082C114.804 93.7935 128.017 87.9152 141.246 82.0732C142.984 81.2989 144.338 80.2504 144.79 78.2825C145.358 75.7984 143.907 73.5078 141.113 72.5279C133.63 69.8985 126.145 67.2786 118.657 64.6681L45.7341 39.1574C42.3637 37.9798 39.3723 39.3348 38.824 42.4924C38.6225 43.6498 38.9208 44.9967 39.3199 46.1218C48.4716 72.388 57.6528 98.6435 66.8636 124.888C68.7705 130.336 70.6613 135.777 72.5844 141.237C73.4189 143.612 75.088 144.89 77.5271 144.911Z" fill="black"/>
                <path d="M48.294 14.4088C48.294 11.3399 48.294 8.27104 48.294 5.2062C48.294 2.14136 46.2379 0 43.4319 0C40.6945 0.0201634 38.6505 2.17362 38.6424 5.12958C38.6236 11.3695 38.6236 17.6067 38.6424 23.8412C38.6424 26.8012 40.6864 28.9547 43.4279 28.9749C46.1694 28.995 48.2658 26.8133 48.29 23.7646C48.3061 20.6474 48.294 17.5301 48.294 14.4088Z" fill="black"/>
                <path d="M14.5094 48.3035C17.6258 48.3035 20.7463 48.3035 23.8627 48.3035C26.8057 48.2833 28.9626 46.2267 28.9707 43.4925C28.9787 40.7583 26.842 38.6533 23.8949 38.6533C17.6057 38.6291 11.3178 38.6291 5.03125 38.6533C2.11643 38.6533 -0.0324001 40.7906 -0.000148773 43.5328C0.0321045 46.2751 2.15674 48.2712 5.00302 48.2995C8.17183 48.3237 11.3406 48.2995 14.5094 48.3035Z" fill="black"/>
                <path d="M11.9858 17.4897C12.2963 18.0745 12.6712 19.3931 13.5138 20.2682C17.4405 24.3574 21.4761 28.3538 25.5238 32.33C27.5598 34.3463 30.4947 34.2939 32.4017 32.3582C32.8533 31.9168 33.2116 31.3892 33.4554 30.8066C33.6991 30.224 33.8234 29.5984 33.8208 28.9668C33.8181 28.3353 33.6887 27.7107 33.44 27.1301C33.1914 26.5496 32.8287 26.025 32.3735 25.5874C28.3419 21.466 24.2593 17.3835 20.1256 13.3401C18.6621 11.9004 16.8358 11.6302 14.9611 12.4247C13.0865 13.2191 12.1229 14.7314 11.9858 17.4897Z" fill="black"/>
                <path d="M69.3672 12.0577C68.6979 12.4247 67.3877 12.828 66.5007 13.6708C62.5135 17.5019 58.623 21.4418 54.7366 25.3656C52.6725 27.4626 52.6805 30.4589 54.6681 32.3744C56.6556 34.2899 59.506 34.1932 61.5661 32.1647C65.4955 28.2745 69.4075 24.3615 73.302 20.4256C74.8299 18.881 75.2291 17.0341 74.3744 15.0177C73.5519 13.1264 71.9877 12.2715 69.3672 12.0577Z" fill="black"/>
                <path d="M28.6964 52.9088C27.6199 53.4895 26.35 53.8686 25.4993 54.6832C21.4678 58.5546 17.5491 62.5227 13.6304 66.499C11.6146 68.5153 11.6429 71.4914 13.5578 73.3989C15.4728 75.3064 18.4159 75.3023 20.4558 73.29C24.4256 69.3649 28.3725 65.4169 32.2966 61.446C33.0156 60.764 33.4995 59.8713 33.6784 58.8964C33.8574 57.9216 33.7222 56.9151 33.2924 56.022C32.5183 54.292 30.7242 53.1508 28.6964 52.9088Z" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0_56_240">
                <rect width="144.911" height="144.911" fill="white" transform="matrix(-1 0 0 1 144.911 0)"/>
                </clipPath>
                </defs>
                </svg>

              <h1 className="title valign-text-middle"> 
                {title}
              </h1>
            </div>

        <div className="activity-container">
        <div className="activity">
       
        <div className="my-applications valign-text-middle">
        {myApplications}
    </div>
    <svg className='line' width="371" height="2" viewBox="0 0 371 2" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.208984 0.633545H370.995" stroke="url(#paint0_linear_7_158)"/>
      <defs>
      <linearGradient id="paint0_linear_7_158" x1="77.5672" y1="1.13354" x2="324.313" y2="1.13194" gradientUnits="userSpaceOnUse">
      <stop stop-color="#92CAAD"/>
      <stop offset="0.307292" stop-color="#93D2E6"/>
      <stop offset="0.862525" stop-color="#EEBAA5"/>
      <stop offset="0.947917" stop-color="#EEBAA5"/>
      </linearGradient>
      </defs>
    </svg>

  </div>

<p className="please-log-in-to-review-your-history valign-text-middle">
{pleaseLogInToReviewYourHistory}
</p>
</div>
</div>
</div>
</div>
</div>
)}

const desktop3Data={
  intern:"Jobadillo",
  internships:"Internships",
  courses:"Courses",
  jobs:"Jobs",
  login:"Login",
  register:"Register",
  title : "Start your Career with a click",
  myApplications:"My Applications",
  pleaseLogInToReviewYourHistory:"Please log in to review your history"
}; 
