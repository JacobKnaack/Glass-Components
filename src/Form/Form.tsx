import React, { PropsWithChildren } from "react";
import './Form.css';

export type GlassProps = {
  background: string;
  transparency: string;
  blur: string;
  shadow: string;
}


// Declaring props for component and on variable creation
export const FormHeading: React.FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return (
    <div id="form-heading">
      <h2>{children}</h2>
    </div>
  )
}

export const FormInput: React.FC = () => {
  return (
    <input type="text" />
  )
}

export const FormButton: React.FC<PropsWithChildren> = () => {
  return (
    <button>Click Me</button>
  )
}

export function Form() {
  return (
    <div id="glass-form" className="glass">
      <FormHeading>Here is the Heading</FormHeading>
      <FormInput />
      <FormButton />
    </div>
  )
}
