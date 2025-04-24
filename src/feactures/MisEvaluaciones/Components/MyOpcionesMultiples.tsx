// import { useFieldArray } from "react-hook-form";
// import { InputFormContext } from "../../../shared/Components/InputFormContext";

// export const MyOpcionesMultiples = ({
//   control,
//   register,
//   index,
// }: {
//   control: any;
//   register: any;
//   index: number;
// }) => {
//   const { fields, append, remove } = useFieldArray({
//     control,
//     name: `questions.${index}.options` as const,
//   });

//   return (
//     <div className="">
//       {fields.map((field, i) => (
//         <div key={field.id} className="flex w-full items-center gap-2 mb-2">
//           <div className="w-full">
//             <InputFormContext
//               name={`questions.${index}.options.${i}` as const}
//               validations={{ required: true }}
//               title={`Opción ${i + 1}`}
//             />
//             <p>
              
//             </p>
//           </div>

         
//         </div>
//       ))}
      
//     </div>
//   );
// };
