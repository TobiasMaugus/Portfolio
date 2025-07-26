import './Modal.css';

type SettingsModalProps = {
  onClose: () => void;
};

export default function SettingsModal({ onClose }: SettingsModalProps) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Configurações</h2>
        {/* Conteúdo da janela de configurações */}
        <button onClick={onClose}>Salvar</button>
      </div>
    </div>
  );
}
