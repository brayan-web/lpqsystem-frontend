import AnimatedLayout from "../layouts/AnimatedLayout";
import useUser from "../hooks/useUser";
import CardCasos from "../components/CardCasos";
const DashboardView = () => {
  const { userData } = useUser();
  const name = userData && userData.nombre ? userData.nombre : "";

  const showCard = false;

  return (
    <AnimatedLayout>
      <div className="py-28 px-9">
        <h1 className="text-gray-600 text-2xl mb-5">Hola {name}</h1>
        <div>
          <span className="text-gray-500 text-lg py-3 uppercase block">
            Casos 2024
          </span>
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <CardCasos
              statusCaso="pendientes"
              text="casos pendientes"
              numberCaso="1454"
            />
            <CardCasos
              statusCaso="terminados"
              text="casos terminados"
              numberCaso="1454"
            />
            <CardCasos
              statusCaso="reportados"
              text="total reportados"
              numberCaso="1454"
            />
            <CardCasos
              statusCaso="totalCasos"
              text="total de casos"
              numberCaso="1454"
            />
            <CardCasos
              statusCaso="casosAlta"
              text="casos dados de alta hoy"
              numberCaso="1454"
            />
          </div>
        </div>

        <div>
          <span className="text-gray-500 text-lg py-3 uppercase block">
            Casos 2023
          </span>
          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 ">
            <CardCasos
              statusCaso="pendientes"
              text="casos pendientes"
              numberCaso="1454"
              className={!showCard ? "opacity-0" : ""}
            />
            <CardCasos
              statusCaso="terminados"
              text="casos terminados"
              numberCaso="1454"
            />
            <CardCasos
              statusCaso="reportados"
              text="total reportados"
              numberCaso="1454"
            />
            <CardCasos
              statusCaso="totalCasos"
              text="total de casos"
              numberCaso="1454"
            />
            <CardCasos
              statusCaso="casosAlta"
              text="casos dados de alta hoy"
              numberCaso="1454"
            />
          </div>
        </div>
      </div>
    </AnimatedLayout>
  );
};

export default DashboardView;
