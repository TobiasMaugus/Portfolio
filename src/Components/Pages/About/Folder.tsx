import { useState } from 'react';
import { ChevronRight, ChevronDown, FileText } from 'lucide-react';
import { colors } from '../../../colors/colors';

interface SubItem {
  icon?: React.ReactNode;
  label: string;
}

interface FolderProps {
  icon: React.ReactElement;
  label: string;
  iconSize?: number;
  iconColor?: string;
  subItems?: SubItem[];
}

export default function Folder({
  icon,
  label,
  iconSize = 16,
  iconColor = colors.second,
  subItems = [],
}: FolderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          gap: '8px',
          color: colors.second,
          fontSize: '14px',
          padding: '4px 0',
        }}
      >
        {isOpen ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
        <div style={{ width: iconSize, color: iconColor }}>
          {icon}
        </div>
        <span>{label}</span>
      </div>

      {isOpen && subItems.length > 0 && (
        <div style={{ display: 'flex' }}>
          <div
            style={{
              width: '10px',
              borderLeft: `1px solid ${colors.second}`,
              marginLeft: '9px',
              marginRight: '5px',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {subItems.map((item, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 200,
                  fontStyle: 'thin',
                  color: colors.second,
                  fontSize: '14px',
                }}
              >
                {item.icon ?? <FileText size={14} />}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
