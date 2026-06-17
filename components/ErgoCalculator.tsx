'use client';

import { useState } from 'react';

interface CalcResults {
  deskHeight: number;
  monitorTop: number;
  chairHeight: number;
  footrestNeeded: boolean;
  totalHeightInches: number;
}

export default function ErgoCalculator() {
  const [feet, setFeet] = useState(5);
  const [inches, setInches] = useState(8);
  const [results, setResults] = useState<CalcResults | null>(null);

  const calculate = () => {
    const totalInches = feet * 12 + inches;
    const deskHeight = Math.round(totalInches * 0.43);
    const monitorTop = Math.round(totalInches * 0.73);
    const chairHeight = Math.round(totalInches * 0.25);
    const footrestNeeded = chairHeight > 17 && totalInches < 64;

    setResults({ deskHeight, monitorTop, chairHeight, footrestNeeded, totalHeightInches: totalInches });
  };

  return (
    <div>
      {/* Inputs */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div>
          <label
            className="block mb-1"
            style={{ fontFamily: 'var(--font-inter)', fontSize: '12px', color: '#aaaaaa', letterSpacing: '0.08em', textTransform: 'uppercase' }}
          >
            Feet
          </label>
          <select
            value={feet}
            onChange={(e) => setFeet(Number(e.target.value))}
            className="px-3 py-2 bg-[#1a2d40] text-white border border-[#2a4060] rounded"
            style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', minWidth: '80px' }}
          >
            {[4, 5, 6, 7].map((f) => (
              <option key={f} value={f}>{f} ft</option>
            ))}
          </select>
        </div>
        <div>
          <label
            className="block mb-1"
            style={{ fontFamily: 'var(--font-inter)', fontSize: '12px', color: '#aaaaaa', letterSpacing: '0.08em', textTransform: 'uppercase' }}
          >
            Inches
          </label>
          <select
            value={inches}
            onChange={(e) => setInches(Number(e.target.value))}
            className="px-3 py-2 bg-[#1a2d40] text-white border border-[#2a4060] rounded"
            style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', minWidth: '100px' }}
          >
            {Array.from({ length: 12 }, (_, i) => i).map((i) => (
              <option key={i} value={i}>{i} in</option>
            ))}
          </select>
        </div>
        <div className="flex items-end">
          <button onClick={calculate} className="btn-3d">
            Calculate →
          </button>
        </div>
      </div>

      {/* Results */}
      {results && (
        <div
          className="animate-fade-in"
          style={{ animation: 'fadeIn 400ms ease-out' }}
        >
          {/* SVG Diagram */}
          <svg
            viewBox="0 0 480 320"
            width="100%"
            style={{ maxWidth: '480px', display: 'block', marginBottom: '24px' }}
            aria-label="Ergonomic setup diagram"
          >
            {/* Floor */}
            <line x1="40" y1="290" x2="440" y2="290" stroke="#4a6080" strokeWidth="2" />
            {/* Desk */}
            <rect x="160" y={290 - results.deskHeight * 1.8} width="200" height="8" fill="#1B4FD8" rx="2" />
            {/* Desk legs */}
            <rect x="170" y={290 - results.deskHeight * 1.8 + 8} width="6" height={results.deskHeight * 1.8 - 8} fill="#2a4060" />
            <rect x="344" y={290 - results.deskHeight * 1.8 + 8} width="6" height={results.deskHeight * 1.8 - 8} fill="#2a4060" />
            {/* Monitor */}
            <rect x="240" y={290 - results.monitorTop * 1.8} width="60" height="50" fill="#2a4060" rx="3" />
            <rect x="245" y={290 - results.monitorTop * 1.8 + 5} width="50" height="38" fill="#1a2d40" rx="2" />
            {/* Chair */}
            <rect x="80" y={290 - results.chairHeight * 1.8} width="70" height="8" fill="#1B4FD8" rx="2" />
            <rect x="110" y={290 - results.chairHeight * 1.8 + 8} width="8" height={results.chairHeight * 1.8 - 8} fill="#2a4060" />
            {/* Stick figure */}
            <circle cx="120" cy={290 - results.chairHeight * 1.8 - 32} r="12" fill="none" stroke="#1B4FD8" strokeWidth="2" />
            <line x1="120" y1={290 - results.chairHeight * 1.8 - 20} x2="120" y2={290 - results.chairHeight * 1.8 - 5} stroke="#1B4FD8" strokeWidth="2" />
            <line x1="120" y1={290 - results.chairHeight * 1.8 - 14} x2="150" y2={290 - results.deskHeight * 1.8 + 2} stroke="#1B4FD8" strokeWidth="2" />
            <line x1="120" y1={290 - results.chairHeight * 1.8 - 5} x2="100" y2={290 - 12} stroke="#1B4FD8" strokeWidth="2" />
            <line x1="120" y1={290 - results.chairHeight * 1.8 - 5} x2="140" y2={290 - 12} stroke="#1B4FD8" strokeWidth="2" />

            {/* Labels */}
            <text x="350" y={290 - results.deskHeight * 1.8 + 4} fill="#aaaaaa" fontSize="11" fontFamily="var(--font-inter)">
              Desk: {results.deskHeight}&quot;
            </text>
            <text x="350" y={290 - results.monitorTop * 1.8 + 4} fill="#aaaaaa" fontSize="11" fontFamily="var(--font-inter)">
              Monitor top: {results.monitorTop}&quot;
            </text>
            <text x="20" y={290 - results.chairHeight * 1.8 + 4} fill="#aaaaaa" fontSize="11" fontFamily="var(--font-inter)">
              Chair: {results.chairHeight}&quot;
            </text>

            {/* Footrest indicator */}
            {results.footrestNeeded && (
              <rect x="80" y="278" width="70" height="12" fill="#1B4FD8" rx="2" opacity="0.7" />
            )}
          </svg>

          {/* Text results */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Desk Height', value: `${results.deskHeight} inches from floor`, detail: 'Measured from floor to desk surface' },
              { label: 'Monitor Top', value: `${results.monitorTop} inches from floor`, detail: 'Top edge of screen at or just below eye level' },
              { label: 'Chair Seat Height', value: `${results.chairHeight} inches`, detail: 'Allows thighs parallel to floor' },
              {
                label: 'Footrest',
                value: results.footrestNeeded ? 'Recommended' : 'Not required',
                detail: results.footrestNeeded
                  ? 'Helps shorter users maintain proper posture'
                  : 'Your proportions support floor contact naturally',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="p-3 rounded"
                style={{ background: '#1a2d40', border: '1px solid #2a4060' }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '11px',
                    color: '#aaaaaa',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '4px',
                  }}
                >
                  {item.label}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-fraunces)',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: '#ffffff',
                    marginBottom: '4px',
                  }}
                >
                  {item.value}
                </p>
                <p style={{ fontFamily: 'var(--font-inter)', fontSize: '12px', color: '#7a9ab8' }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
