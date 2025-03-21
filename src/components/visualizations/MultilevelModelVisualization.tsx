import React, { useState } from 'react';

export interface ModelLevel {
  id: string;
  name: string;
  description: string;
  color: string;
  factors: ModelFactor[];
}

export interface ModelFactor {
  id: string;
  name: string;
  description: string;
  impactLevel: 'low' | 'medium' | 'high';
  evidenceLevel: 'weak' | 'moderate' | 'strong';
  interactions?: string[]; // IDs de otros factores con los que interactúa
}

interface MultilevelModelVisualizationProps {
  levels: ModelLevel[];
  width?: number;
  height?: number;
  onLevelSelect?: (levelId: string) => void;
  selectedLevelId?: string;
}

const MultilevelModelVisualization: React.FC<MultilevelModelVisualizationProps> = ({
  levels,
  width = 800,
  height = 800,
  onLevelSelect,
  selectedLevelId
}) => {
  const [hoveredLevel, setHoveredLevel] = useState<string | null>(null);
  
  // Ordenar niveles si no vienen ordenados
  const sortedLevels = [...levels].sort((a, b) => 
    levels.findIndex(l => l.id === a.id) - levels.findIndex(l => l.id === b.id)
  );

  return (
    <div className="bg-gray-50 rounded-lg p-6 w-full flex justify-center" style={{ maxWidth: width }}>
      <div className="flex flex-col items-stretch w-full space-y-6 relative">
        {/* Mapeo de niveles */}
        {sortedLevels.map((level, index) => {
          const isSelected = level.id === selectedLevelId;
          const isHovered = level.id === hoveredLevel;
          
          return (
            <div 
              key={level.id}
              className={`w-full p-4 rounded-lg cursor-pointer transition-all
                ${isSelected || isHovered ? 'shadow-md' : 'shadow-sm'}`}
              style={{ 
                backgroundColor: `${level.color}${isSelected || isHovered ? '30' : '15'}`,
                borderLeft: `8px solid ${level.color}`,
              }}
              onClick={() => onLevelSelect && onLevelSelect(level.id)}
              onMouseEnter={() => setHoveredLevel(level.id)}
              onMouseLeave={() => setHoveredLevel(null)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span 
                    className="inline-block w-7 h-7 rounded-full text-white font-bold flex items-center justify-center text-sm"
                    style={{ backgroundColor: level.color }}
                  >
                    {index + 1}
                  </span>
                  <h4 className="font-bold text-lg">{level.name}</h4>
                </div>
                <span className="text-xs bg-white bg-opacity-80 px-2 py-1 rounded-full">
                  {level.factors.length} factores
                </span>
              </div>
              
              {(isSelected || isHovered) && (
                <div className="mt-3 text-sm">
                  <p>{level.description}</p>
                </div>
              )}
            </div>
          );
        })}
        
        <div className="text-xs text-gray-500 text-center mb-2">
        </div>
      </div>
    </div>
  );
};

export default MultilevelModelVisualization;