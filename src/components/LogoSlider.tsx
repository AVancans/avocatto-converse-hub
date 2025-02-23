
import React from 'react';

const LogoSlider = () => {
  const logos = [
    {
      name: 'PicaOS',
      url: 'https://www.picaos.com/logo-dark.svg'
    },
    {
      name: 'Fal.ai',
      url: 'https://fal.ai/fal-icon.svg'
    },
    {
      name: 'ElevenLabs',
      url: 'https://160.wpcdnnode.com/ziptone.nl/wp-content/uploads/2025/01/schermafbeelding-2025-01-31-om-08.09.33.png'
    },
    {
      name: 'OpenAI',
      url: 'https://openai.com/favicon.ico'
    },
    {
      name: 'Supabase',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaGuEvKyulxQleVBNdece3AoTlMKVECfhnng&s'
    },
    {
      name: 'Replicate',
      url: 'https://cdn.sanity.io/images/50q6fr1p/production/2542fad4ab944c0f5e1ab7507a3333a2d5f7f464-2626x684.png?auto=format'
    }
  ];

  return (
    <div className="w-full overflow-hidden bg-background/50 py-12">
      <div className="relative">
        <div className="flex animate-slider space-x-16 whitespace-nowrap">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16  w-52 blur-card rounded-lg"
            >
              <img
                src={logo.url}
                alt={`${logo.name} logo`}
                className="h-8 w-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
