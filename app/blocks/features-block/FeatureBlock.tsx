const features = [
  {
    emoji: "🚀",
    title: "Ultrafast & Lightweight",
    description:
      "The router RegExpRouter is really fast. The hono/tiny preset is under 14kB. Using only Web Standard APIs.",
  },
  {
    emoji: "🌍",
    title: "Multi-runtime",
    description:
      "Works on Cloudflare, Fastly, Deno, Bun, AWS, or Node.js. The same code runs on all platforms.",
  },
  {
    emoji: "🔋",
    title: "Batteries Included",
    description:
      "Hono has built-in middleware, custom middleware, third-party middleware, and helpers. Batteries included.",
  },
  {
    emoji: "😃",
    title: "Delightful DX",
    description:
      'Super clean APIs. First-class TypeScript support. Now, we\'ve got "Types".',
  },
];

const FeatureBlock = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
      {features.map((feature) => (
        <div key={feature.title} className="card bg-base-100 shadow-sm p-4">
          <div className="flex flex-col gap-3 items-start">
            <div className="text-4xl bg-base-200 p-3 rounded-md">
              {feature.emoji}
            </div>
            <h2 className="card-title text-xl font-bold">{feature.title}</h2>
            <p className="text-base text-gray-700">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureBlock;
