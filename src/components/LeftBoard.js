import React from "react";

function LeftBoard() {
  return (
    <div className="leftBaord">
      <div className="topSection">
        <div class="left-container">
          <div class="left-top">
            <p>ذي الحجة</p>
          </div>
          <div class="left-bottom">
            <p>07:38 - 07:33</p>
          </div>
        </div>
        <div class="right">
          <p>11</p>
        </div>
      </div>
      <div className="middleSection">
        <div className="middleSectoinLeft">
          <li>
            <p>30%</p>

            <span className="bar">
              <span className="bar1"></span>
            </span>
          </li>
          <li>
            <p>40%</p>

            <span className="bar">
              <span className="bar2"></span>
            </span>
          </li>
          <li>
            <p>40%</p>

            <span className="bar">
              <span className="bar3"></span>
            </span>
          </li>
          <li>
            <p>20%</p>

            <span className="bar">
              <span className="bar4"></span>
            </span>
          </li>
          <li>
            <p>80%</p>

            <span className="bar">
              <span className="bar5"></span>
            </span>
          </li>
          <li>
            <p>20%</p>

            <span className="bar">
              <span className="bar6"></span>
            </span>
          </li>
          <li>
            <p>25%</p>

            <span className="bar">
              <span className="bar7"></span>
            </span>
          </li>
        </div>

        <div className="middleSectionRight">
          <p>
            حجاج الداخل <br />
            نقاط التجمع <br />
            المسجد الحرام <br />
            محطة الجمرات
            <br />
            نقاط التجمع <br />
            مخيمات منى
            <br />
            مشعر عرفاعت
            <br />
          </p>
        </div>
      </div>
      <div className="bottomSection">
        <div class="left-container">
          <div class="left-top">
            <p className="Ltp">عدد الحجاج</p>
          </div>
          <div class="left-bottom">
            <p></p>
            <h2>58,511</h2>
          </div>
        </div>
        <div class="right">
          <p>
            <i class="fa fa-users users" aria-hidden="true"></i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LeftBoard;