import { colors } from '../../../colors/colors';
import { Folder as FolderIcon, FileJson, FileCode } from 'lucide-react';
import Folder from './Folder';
import { useState } from 'react';
import './BodyStyles.css';

export default function BodyAbout() {
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
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
          width: '20.4%',
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
        selected={selectedFile}
        subItems={[
          { label: 'bio.txt', onClick: () => setSelectedFile('bio.txt'), },
          { label: 'skills.json', onClick: () => setSelectedFile('skills.json'), icon: <FileJson size={14} /> },
        ]}
      />

      <Folder
        icon={<FolderIcon size={16} />}
        label="projects"
        iconColor="#00D1B2"
        subItems={[
          { label: 'site.jsx', icon: <FileCode size={14} color='#101010' /> },
          { label: 'readme.md' },
        ]}
      />
      </div>
      <div
      style={{
          width: '100%',
          height: '100%',
          backgroundColor: colors.primary,
        }}>
        {selectedFile === 'bio.txt' && (
          <div
            style={{
              padding: '20px',
              fontFamily: "'Fira Code', 'Courier New', monospace",
              backgroundColor: '#1e1e1e',
              color: '#d4d4d4',
              height: '100%',
              overflowY: 'auto',
              whiteSpace: 'pre-wrap',
              fontSize: '14px',
              lineHeight: '1.5',
            }}
          >
            <div>
              <span style={{ color: '#569cd6' }}>## Hello, I'm Tobias Maugus!</span>{'\n\n'}
              <p>
                Developer with a technical degree in Information Technology from the{' '}
                <span style={{ color: '#dcdcaa' }}>Federal Center for Technological Education of Minas Gerais (CEFET-MG)</span>
                {' '}and practical experience in programming with various languages, including{' '}
                <span style={{ color: '#ce9178' }}>Python</span>,{' '}
                <span style={{ color: '#ce9178' }}>C++</span>,{' '}
                <span style={{ color: '#ce9178' }}>JavaScript frameworks</span> (
                <span style={{ color: '#4ec9b0' }}>NodeJS</span>,{' '}
                <span style={{ color: '#4ec9b0' }}>React</span>,{' '}
                <span style={{ color: '#4ec9b0' }}>React Native</span>),{' '}
                <span style={{ color: '#ce9178' }}>TypeScript</span> (Express),{' '}
                <span style={{ color: '#ce9178' }}>HTML</span>,{' '}
                <span style={{ color: '#ce9178' }}>CSS</span> and{' '}
                <span style={{ color: '#ce9178' }}>SQL</span>.
              </p>
              <p>
                During my internship, I taught basic computer courses, enhancing my communication and teaching skills.
              </p>
              <p>
                I am currently pursuing a degree in <span style={{ color: '#dcdcaa' }}>Computer Science</span> at the{' '}
                <span style={{ color: '#dcdcaa' }}>Federal University of Lavras (UFLA)</span> and seeking new opportunities to apply and expand my knowledge in software development.
              </p>
            </div>
          </div>
        )}

          {selectedFile === 'skills.json' && (
            <div
              className="json-scroll"
              style={{
                padding: '20px',
                fontFamily: "'Fira Code', 'Courier New', monospace",
                backgroundColor: '#1e1e1e',
                color: '#d4d4d4',
                height: '100%',
                overflowY: 'auto',
                whiteSpace: 'pre-wrap',
                fontSize: '14px',
                lineHeight: '1.5',
              }}
            >
              {'{\n'}
              &nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>"languages"</span>: [<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ce9178' }}>"Python"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ce9178' }}>"C++"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ce9178' }}>"JavaScript"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ce9178' }}>"TypeScript"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ce9178' }}>"HTML"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ce9178' }}>"CSS"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ce9178' }}>"SQL"</span><br />
              &nbsp;&nbsp;],<br />
              &nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>"frameworks"</span>: [<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ce9178' }}>"Node.js"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ce9178' }}>"React"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ce9178' }}>"React Native"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ce9178' }}>"Express"</span><br />
              &nbsp;&nbsp;],<br />
              &nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>"database"</span>: [<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ce9178' }}>"PostgreSQL"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ce9178' }}>"MySQL"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ce9178' }}>"SQLite"</span><br />
              &nbsp;&nbsp;],<br />
              &nbsp;&nbsp;<span style={{ color: '#9cdcfe' }}>"tools"</span>: [<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ce9178' }}>"Git"</span>,<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#ce9178' }}>"VS Code"</span><br />
              &nbsp;&nbsp;]<br />
              {'}'}
            </div>
          )}

      </div>
    </div>
  );
}
