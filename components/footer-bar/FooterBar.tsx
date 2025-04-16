import React from "react";

const FooterBar = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center  text-slate-400 text-lg p-4">
      <aside>
        <p className="text-center">
          Released under the MIT License.
          <br />
          Copyright © {new Date().getFullYear()} - All right reserved by present
          Yusuke Wada & Hono contributors. &quot;kawaii&quot; logo is
        </p>
      </aside>
    </footer>
  );
};

export default FooterBar;
