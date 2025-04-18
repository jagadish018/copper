import React from "react";

const HeroCode = () => {
  return (
    <div className="mockup-code w-full text-xl bg-primary">
      <pre data-prefix="$">
        <code>import Hono from &#39;hono&#39;</code>
      </pre>
      <pre data-prefix=">">
        <code>const app = new Hono()</code>
      </pre>
      <pre data-prefix=">">
        <code>
          app.get(&#39;/&#39;, (c) =&gt; c.text(&#39;Hello Hono!&#39;))
        </code>
      </pre>
      <pre data-prefix=">">
        <code>export default app</code>
      </pre>
    </div>
  );
};

export default HeroCode;
