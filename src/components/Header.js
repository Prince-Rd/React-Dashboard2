import React from "react";

function Header() {
  return (
    <div className="header">

      <div className="pageSeting">
        <div className="arrow"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></div>
        <p className="p3">الدخول الى البوابة</p>
        <div className="switch"> <i class="fa fa-toggle-on" aria-hidden="true"></i> </div>
        <p className="p2">الوضع الداكن</p>
      </div>
      
      <div className="logInfo">
        <div className="arrowDown"><i class="fa fa-arrow-down" aria-hidden="true"></i></div>
        <p className="p1">الاعدادات</p>
        <p>البينات التشغيلية للتفويج &nbsp;&nbsp;|&nbsp;&nbsp; وزارة الحج والعمرة</p>
        <div className="icon"><i class="fa fa-users" aria-hidden="true"></i></div>
      </div>
    </div>
  );
}

export default Header;