import { buttonStyle } from './SubmitButton.css';

export default function SubmitButton({ label }: { label: string }) {
  return (
    <button type="submit" className={buttonStyle}>
      {label}
    </button>
  );
}
