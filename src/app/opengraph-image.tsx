import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  const photoBuffer = readFileSync(
    join(process.cwd(), 'public', 'profil-aviral.jpg')
  );
  const photoSrc = `data:image/jpeg;base64,${photoBuffer.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '80px 90px',
          background: 'linear-gradient(135deg, #171717 0%, #262626 100%)',
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 700 }}>
          <span style={{ fontSize: 30, color: '#A3A3A3', marginBottom: 10 }}>
            Hey, I'm
          </span>
          <span
            style={{
              fontSize: 76,
              fontWeight: 700,
              color: '#F5F5F5',
              lineHeight: 1.05,
            }}
          >
            Aviral Goel
          </span>
          <span
            style={{
              fontSize: 38,
              fontWeight: 600,
              color: '#60A5FA',
              marginTop: 18,
            }}
          >
            AI/ML Engineer
          </span>
          <span style={{ fontSize: 26, color: '#D4D4D4', marginTop: 22 }}>
            Speech AI · Agentic Systems · Applied Deep Learning
          </span>
        </div>
        <img
          src={photoSrc}
          width={340}
          height={340}
          style={{
            borderRadius: '50%',
            objectFit: 'cover',
            border: '6px solid #404040',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
