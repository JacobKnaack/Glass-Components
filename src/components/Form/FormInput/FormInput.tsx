import './FormInput.css';

export interface InputProps {
  label?: string;
  placeholder?: string;
}

export const FormInput: React.FC<InputProps> = ({ label, placeholder}: InputProps ) => {
  return (
    <div className="glass-input">
      <label className="input-label">{label}</label>
      <input className="input-text" type="text" placeholder={placeholder}/>
    </div>
  )
}