import { PropsWithChildren } from "react";

// Declaring props for component and on variable creation
export const FormHeading: React.FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return (
    <div id="form-heading">
      <h2>{children}</h2>
    </div>
  )
}