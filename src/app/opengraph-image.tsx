import { ImageResponse } from 'next/og';
import { readFile } from 'fs/promises';
import { join } from 'path';

export const runtime = 'nodejs';
export const alt = 'Loden Labs — Experimental projects by Jason Loden Ganub';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), 'public', 'flask-logo.png'));
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          backgroundImage: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.1) 50%, rgba(59, 130, 246, 0.15) 100%)',
        }}
      >
        {/* Logo + Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <img src={logoBase64} width={64} height={64} alt="" />
          <span style={{ fontSize: '64px', fontWeight: 700, color: '#fff', letterSpacing: '-2px' }}>
            Loden Labs
          </span>
        </div>

        {/* Tagline */}
        <span style={{ fontSize: '24px', color: '#999', letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>
          Experimental projects by Jason Loden Ganub
        </span>

        {/* Bottom gradient line */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.8), rgba(139, 92, 246, 0.9), rgba(236, 72, 153, 0.8), rgba(139, 92, 246, 0.9), rgba(59, 130, 246, 0.8))',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
