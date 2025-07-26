import { colors } from '../../../colors/colors';
import { Folder as FolderIcon, FileJson, FileCode } from 'lucide-react';
import Folder from './Folder';

export default function BodyAbout() {
  return (
    <div
      style={{
        width: '95%',
        height: '80%',
        backgroundColor: colors.primary,
        borderColor: colors.second,
        borderLeftWidth: '1px',
        borderRightWidth: '1px',
        display: 'flex',
        color: colors.second
      }}
    >
      <div
        style={{
          width: '17.25%',
          height: '100%',
          backgroundColor: colors.primary,
          borderColor: colors.second,
          borderRightWidth: '1px',
          padding: '10px',
          fontFamily: "'Inter', sans-serif"
        }}
      >
        <Folder
        icon={<FolderIcon size={16} />}
        label="about-me"
        iconColor="#F5A623"
        subItems={[
          { label: 'bio.txt' },
          { label: 'skills.json', icon: <FileJson size={14} /> },
        ]}
      />

      <Folder
        icon={<FolderIcon size={16} />}
        label="projects"
        iconColor="#00D1B2"
        subItems={[
          { label: 'site.jsx', icon: <FileCode size={14} /> },
          { label: 'readme.md' },
        ]}
      />
      </div>
    </div>
  );
}
