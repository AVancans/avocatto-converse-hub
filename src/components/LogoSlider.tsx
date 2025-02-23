
import React from 'react';

const LogoSlider = () => {
  const logos = [
    {
      name: 'PicaOS',
      url: 'https://raw.githubusercontent.com/picaos-demo/picaos/main/public/favicon.ico'
    },
    {
      name: 'Fal.ai',
      url: 'https://fal.ai/fal-icon.svg'
    },
    {
      name: 'ElevenLabs',
      url: 'https://elevenlabs.io/icons/favicon.ico'
    },
    {
      name: 'OpenAI',
      url: 'https://openai.com/favicon.ico'
    },
    {
      name: 'Supabase',
      url: 'https://supabase.com/favicon.ico'
    },
    {
      name: 'Replicate',
      url: 'https://replicate.com/favicon.ico'
    }
  ];

  return (
    <div className="w-full overflow-hidden bg-background/50 py-12">
      <div className="relative">
        <div className="flex animate-slider space-x-16 whitespace-nowrap">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-12 w-32 blur-card rounded-lg"
            >
              <img
                src={logo.url}
                alt={`${logo.name} logo`}
                className="h-8 w-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
