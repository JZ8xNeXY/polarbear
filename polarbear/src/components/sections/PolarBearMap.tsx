'use client'

import { useState } from 'react'
import { Box, Tooltip, Typography } from '@mui/material'

type PopulationStatus = 'increasing' | 'stable' | 'declining' | 'unknown'

interface Population {
  id: string
  name: string
  nameJa: string
  count: string
  status: PopulationStatus
  lon: number
  lat: number
}

// 19個体群のデータ（経度・緯度ベース）
const populations: Population[] = [
  { id: 'CS', name: 'Chukchi Sea', nameJa: 'チュクチ海', count: '約2,900頭', status: 'stable', lon: -168, lat: 68 },
  { id: 'SB', name: 'Southern Beaufort Sea', nameJa: '南ボーフォート海', count: '約900頭', status: 'declining', lon: -145, lat: 70 },
  { id: 'NB', name: 'Northern Beaufort Sea', nameJa: '北ボーフォート海', count: '約980頭', status: 'stable', lon: -125, lat: 72 },
  { id: 'VM', name: 'Viscount Melville Sound', nameJa: 'ビスカウントメルビル海峡', count: '約160頭', status: 'unknown', lon: -105, lat: 74 },
  { id: 'MC', name: 'McClintock Channel', nameJa: 'マクリントック海峡', count: '約280頭', status: 'unknown', lon: -98, lat: 72 },
  { id: 'GB', name: 'Gulf of Boothia', nameJa: 'ブーシア湾', count: '約1,600頭', status: 'stable', lon: -90, lat: 70 },
  { id: 'LS', name: 'Lancaster Sound', nameJa: 'ランカスター海峡', count: '約2,500頭', status: 'stable', lon: -85, lat: 74 },
  { id: 'NW', name: 'Norwegian Bay', nameJa: 'ノルウェー湾', count: '約200頭', status: 'unknown', lon: -90, lat: 77 },
  { id: 'FB', name: 'Foxe Basin', nameJa: 'フォックス湾', count: '約2,600頭', status: 'stable', lon: -78, lat: 67 },
  { id: 'WH', name: 'Western Hudson Bay', nameJa: '西ハドソン湾', count: '約840頭', status: 'declining', lon: -90, lat: 63 },
  { id: 'SH', name: 'Southern Hudson Bay', nameJa: '南ハドソン湾', count: '約780頭', status: 'declining', lon: -80, lat: 63 },
  { id: 'KB', name: 'Kane Basin', nameJa: 'ケーン湾', count: '約160頭', status: 'increasing', lon: -70, lat: 79 },
  { id: 'BB', name: 'Baffin Bay', nameJa: 'バフィン湾', count: '約2,800頭', status: 'stable', lon: -65, lat: 73 },
  { id: 'DS', name: 'Davis Strait', nameJa: 'デービス海峡', count: '約2,150頭', status: 'increasing', lon: -58, lat: 66 },
  { id: 'EG', name: 'East Greenland', nameJa: '東グリーンランド', count: '不明', status: 'unknown', lon: -25, lat: 72 },
  { id: 'BS', name: 'Barents Sea', nameJa: 'バレンツ海', count: '約2,650頭', status: 'increasing', lon: 35, lat: 76 },
  { id: 'KS', name: 'Kara Sea', nameJa: 'カラ海', count: '不明', status: 'unknown', lon: 70, lat: 75 },
  { id: 'LP', name: 'Laptev Sea', nameJa: 'ラプテフ海', count: '約800-1,200頭', status: 'unknown', lon: 125, lat: 75 },
  { id: 'AB', name: 'Arctic Basin', nameJa: '北極海盆', count: '不明', status: 'unknown', lon: 0, lat: 84 },
]

const statusColors: Record<PopulationStatus, string> = {
  increasing: '#4caf50',
  stable: '#2f8fd4',
  declining: '#e76f51',
  unknown: '#9e9e9e',
}

const statusLabels: Record<PopulationStatus, string> = {
  increasing: '増加傾向',
  stable: '安定',
  declining: '減少傾向',
  unknown: 'データ不足',
}

// 地図の範囲（OpenStreetMap bbox: -170, 62, 170, 85）
const MAP_BOUNDS = {
  minLon: -170,
  maxLon: 170,
  minLat: 62,
  maxLat: 85,
}

const SVG_WIDTH = 540
const SVG_HEIGHT = 380

// メルカトル図法: 緯度をY座標に変換
function latToMercatorY(lat: number): number {
  const latRad = (lat * Math.PI) / 180
  return Math.log(Math.tan(Math.PI / 4 + latRad / 2))
}

// 緯度経度をSVG座標に変換（メルカトル図法）
function lonLatToSvg(lon: number, lat: number): { x: number; y: number } {
  // 経度は線形変換
  const x = ((lon - MAP_BOUNDS.minLon) / (MAP_BOUNDS.maxLon - MAP_BOUNDS.minLon)) * SVG_WIDTH

  // 緯度はメルカトル変換
  const minY = latToMercatorY(MAP_BOUNDS.minLat)
  const maxY = latToMercatorY(MAP_BOUNDS.maxLat)
  const mercY = latToMercatorY(lat)
  const y = ((maxY - mercY) / (maxY - minY)) * SVG_HEIGHT

  return { x, y }
}

interface PolarBearMapProps {
  overlay?: boolean
}

export default function PolarBearMap({ overlay = false }: PolarBearMapProps) {
  const [activePopulation, setActivePopulation] = useState<Population | null>(null)

  return (
    <Box sx={{ position: 'relative', width: '100%', height: overlay ? '100%' : 'auto' }}>
      <svg
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        preserveAspectRatio={overlay ? 'none' : 'xMidYMid meet'}
        style={{
          width: '100%',
          height: overlay ? '100%' : 'auto',
          maxHeight: overlay ? undefined : 480,
          position: overlay ? 'absolute' : 'relative',
          top: 0,
          left: 0,
        }}
        aria-label="ホッキョクグマの19個体群分布図"
      >
        {!overlay && (
          <>
            {/* 背景（オーバーレイモードでない場合のみ表示） */}
            <defs>
              <radialGradient id="arcticGradient" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="#e8f4fc" />
                <stop offset="100%" stopColor="#cce5f5" />
              </radialGradient>
              <radialGradient id="iceGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="100%" stopColor="#e0f0fa" />
              </radialGradient>
            </defs>

            {/* 海 */}
            <rect width={SVG_WIDTH} height={SVG_HEIGHT} fill="url(#arcticGradient)" rx="12" />

            {/* 北極海氷（中心） */}
            <ellipse cx={SVG_WIDTH / 2} cy={80} rx="140" ry="60" fill="url(#iceGradient)" opacity="0.7" />
          </>
        )}

        {/* 個体群マーカー */}
        {populations.map((pop) => {
          const { x, y } = lonLatToSvg(pop.lon, pop.lat)
          // 範囲外のマーカーは表示しない
          if (x < 0 || x > SVG_WIDTH || y < 0 || y > SVG_HEIGHT) return null

          return (
            <Tooltip
              key={pop.id}
              title={
                <Box sx={{ p: 0.5 }}>
                  <Typography variant="subtitle2" fontWeight="bold">
                    {pop.nameJa}
                  </Typography>
                  <Typography variant="body2">{pop.name}</Typography>
                  <Typography variant="body2" sx={{ mt: 0.5 }}>
                    推定個体数: {pop.count}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: statusColors[pop.status], fontWeight: 500 }}
                  >
                    状態: {statusLabels[pop.status]}
                  </Typography>
                </Box>
              }
              arrow
              placement="top"
            >
              <g
                style={{ cursor: 'pointer' }}
                onMouseEnter={() => setActivePopulation(pop)}
                onMouseLeave={() => setActivePopulation(null)}
              >
                <circle
                  cx={x}
                  cy={y}
                  r={activePopulation?.id === pop.id ? 12 : 8}
                  fill={statusColors[pop.status]}
                  stroke="#fff"
                  strokeWidth="2"
                  style={{
                    transition: 'r 0.2s ease',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))',
                  }}
                />
                <text
                  x={x}
                  y={y + 3}
                  textAnchor="middle"
                  fontSize="7"
                  fontWeight="bold"
                  fill="#fff"
                  style={{ pointerEvents: 'none' }}
                >
                  {pop.id}
                </text>
              </g>
            </Tooltip>
          )
        })}
      </svg>

      {/* 凡例 */}
      {!overlay && (
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: { xs: 1.5, md: 3 },
            mt: 2,
          }}
        >
          {(Object.entries(statusLabels) as [PopulationStatus, string][]).map(([status, label]) => (
            <Box key={status} sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
              <Box
                sx={{
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  bgcolor: statusColors[status],
                  border: '2px solid #fff',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                }}
              />
              <Typography variant="body2" sx={{ color: '#4a6a85', fontSize: '0.85rem' }}>
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  )
}

export { statusColors, statusLabels }
export type { PopulationStatus }
