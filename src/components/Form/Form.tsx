import { SyntheticEvent, PropsWithChildren } from "react";
import './Form.css';

export function Form({ children }: PropsWithChildren) {

  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
  }

  return (
    <form id="glass-form" onSubmit={handleSubmit}>
      {children}
    </form>
  )
}
