const Features = [
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
      'Super clean APIs. First-class TypeScript support. Now, wee got "Types".',
  },
];


const FeatureBlock = () => {
  return (
      <div className="grid grid-cols-4 gap-4 ">
          {Features.map((feature, index) => {
              return (
                <div key={feature.title} className="card bg-base-100  shadow-sm">
                  <div className="flex flex-col gap-2">
                          <h2 className="card-title text-xl font-bold">{ feature.emoji}+{feature.title}</h2>
                          
                          <p>{ feature.description}</p>
                    
                  </div>
                </div>
              );
          }
          )}
              
    </div>
  )
}

export default FeatureBlock