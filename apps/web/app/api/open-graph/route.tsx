import fs from 'fs';
import { ImageResponse } from 'next/og';
import path from 'path';

export async function GET() {
  const svgPath = path.join(
    process.cwd(),
    'public',
    'images',
    'logo',
    'kinaase logo-06.svg'
  );
  const svgContent = fs.readFileSync(svgPath, 'utf-8');

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#fff' // Optional: Add background color
        }}
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    ),
    {
      width: 1200,
      height: 630
    }
  );
}
