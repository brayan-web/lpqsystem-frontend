const CardCasos = ({ statusCaso, numberCaso, text }) => {
  let borderLeftClass;
  switch (statusCaso) {
    case "pendientes":
      borderLeftClass = "border-l-4 border-green-700";
      break;
      case "terminados":
      borderLeftClass = "border-l-4 border-green-500";
      break;
      case "reportados":
      borderLeftClass = "border-l-4 border-sky-400";
      break;
      case "totalCasos":
      borderLeftClass = "border-l-4 border-sky-400";
      break;
      case "casosAlta":
      borderLeftClass = "border-l-4 border-yellow-400";
      break;
  }
  return (
    <div
      className={`py-5 px-7 rounded-lg border-gray-300 shadow-xl ${borderLeftClass} flex items-center justify-between`}
    >
      <div className="flex flex-col space-y-1">
        <span className="text-[#079284] underline text-sm uppercase"> {text}</span>
        <span className="text-gray-900 font-bold text-lg">{numberCaso}</span>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#DDDFEB"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="#fff"
          className="size-16 bg-transparent"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default CardCasos;
