import React from "react";
import SVGPending from "../../SVGs/CIRCLE/SVGCircle";
import SVGApproved from "../../SVGs/CIRCLE/SVGCheck";
import SVGRejected from "../../SVGs/CIRCLE/SVGCancel";
import SVGSuspended from "../../SVGs/CIRCLE/SVGMenu";

type StatusProps = {
  status: string;
};

const Status: React.FC<StatusProps> = ({ status }) => {
  let SVGComponent;

  switch (status) {
    case "PENDING":
      SVGComponent = SVGPending;
      break;
    case "APPROVED":
      SVGComponent = SVGApproved;
      break;
    case "REJECTED":
      SVGComponent = SVGRejected;
      break;
    case "SUSPENDED":
      SVGComponent = SVGSuspended;
      break;
    default:
      SVGComponent = SVGPending;
  }

  return (
    <p
      className={`
      ${
        status === "PENDING"
          ? "GREY"
          : status === "APPROVED"
          ? "GREEN"
          : status === "REJECTED"
          ? "RED"
          : status === "SUSPENDED"
          ? "YELLOW"
          : "PURPLE"
      } flex flex-col items-center justify-center font-oswald text-text text-[13px] w-100 h-100`}
    >
      {SVGComponent && (
        <SVGComponent
          width={40}
          height={40}
          fill_one={"none"}
          fill_two={"currentColor"}
        />
      )}
      <span className="hidden md:block">
        {status === "PENDING"
          ? "Pendente"
          : status === "APPROVED"
          ? "Aprovado"
          : status === "REJECTED"
          ? "Rejeitado"
          : status === "SUSPENDED"
          ? "Suspenso"
          : "Sem status"}
      </span>
    </p>
  );
};

export default Status;
