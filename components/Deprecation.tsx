import {ExclamationIcon} from "@heroicons/react/outline";
import React from "react";

interface Props {
    message: string | React.JSX.Element,
}

export const Deprecation = ({ message }: Props): React.JSX.Element => {
  return (
  <div className="w-full bg-red-50 rounded-md p-4 px-5 text-sm text-slate-700 flex items-center gap-4">
    <ExclamationIcon className="w-5" />
    { message }
  </div>)
}

export const Warning = ({ message }: Props): React.JSX.Element => {
  return (
  <div className="w-full bg-indigo-50 rounded-md p-4 px-5 text-sm text-slate-700 flex items-center gap-4">
    <ExclamationIcon className="w-5" />
    { message }
  </div>
  );
}
