// aimport { useContext, useEffect } from "react";
// import EvaluacionContext, {
//   IEvaluacionContext,
// } from "../Context/EvaluacionContext";
// import { FormProvider, useForm } from "react-hook-form";
// import { Evaluacion } from "../../../domain/Evaluacion/evaluacion";
// import { InputFormContext } from "../../../shared/Components/InputFormContext";

// export default function EvaluacionForm() {
//   const {
//     categorias,
//     agregarCategoria,
//     agregarPregunta,
//     handleSubmitEvaluation,
//     setFormMethods,
//     eliminarPregunta
//   } = useContext(EvaluacionContext) as IEvaluacionContext;

//   const initialStateForm: Evaluacion = {
//     nombre: "",

//     categorias: [],
//   };
//   const methods = useForm({
//     defaultValues: initialStateForm,
//   });

//   useEffect(() => {
//     setFormMethods(methods); 
//   }, []);

//   return (
//     <FormProvider {...methods}>
//     <form
//       onSubmit={methods.handleSubmit(handleSubmitEvaluation)}
//       className="p-8 max-w-6xl mx-auto bg-white rounded-xl shadow-2xl space-y-10"
//     >
//       <h2 className="text-3xl font-bold text-center text-gray-800">
//         Crear Nueva Evaluación
//       </h2>
  
//       {/* Nombre de la evaluación */}
//       <div className="space-y-2">
//         <label className="text-lg font-medium text-gray-700">
//           Nombre de la evaluación
//         </label>
//         <InputFormContext
//           name="nombre"
//           title=""
//           validations={{ required: "Este campo es requerido" }}
//         />
//       </div>
  
//       {/* Categorías */}
//       {categorias.map((cat, catIndex) => (
//         <div
//           key={catIndex}
//           className="bg-gray-50 border border-gray-300 rounded-lg p-6 space-y-6 shadow-sm"
//         >
//           {/* Título de la categoría */}
//           <div className="space-y-2">
//             <label className="text-lg font-semibold text-gray-700">
//               Categoría 
//             </label>
//             <InputFormContext

//               name={`categorias.${catIndex}.nombre`}
//               title="Ingrese el nombre de la Categoria"
//               validations={{ required: "Este campo es requerido" }}
//             />
//           </div>
  
//           {/* Preguntas */}
//           <div className="space-y-4">
//             <p className="font-medium text-gray-700 mt-4">Preguntas</p>
//             {cat.preguntas.map((preg, pregIndex) => (
//   <div key={pregIndex} className="flex items-center gap-2 mb-2">
//     <div className="flex-1">
//       <InputFormContext
//         name={`categorias.${catIndex}.preguntas.${pregIndex}.texto`}
//         title={`Pregunta ${pregIndex + 1}`}
//         validations={{ required: "Este campo es requerido" }}
//       />
//     </div>
//     <button
//       type="button"
//       onClick={() => eliminarPregunta(catIndex, pregIndex)}
//       className="text-red-500 hover:text-red-700"
//       title="Eliminar pregunta"
//     >
//       ✖
//     </button>
//   </div>
// ))}

//             <button
//               type="button"
//               onClick={() => agregarPregunta(catIndex)}
//               className="text-blue-600 hover:underline text-sm font-medium mt-2"
//             >
//               + Agregar pregunta
//             </button>
//           </div>
//         </div>
//       ))}
  
//       {/* Botón agregar categoría */}
//       <div className="flex justify-center">
//         <button
//           type="button"
//           onClick={agregarCategoria}
//           className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300"
//         >
//           + Agregar categoría
//         </button>
//       </div>
  
//       {/* Botón de guardar */}
//       <div className="flex justify-center">
//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
//         >
//           Guardar Evaluación
//         </button>
//       </div>
//     </form>
//   </FormProvider>
  
//   );
// }
