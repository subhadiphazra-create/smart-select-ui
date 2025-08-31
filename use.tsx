import { useForm } from "react-hook-form";

function Form({ employees }) {
  const { watch, setValue } = useFormContext();

  return (
    <SmartSelect
      isMultiSelect
      options={employees.map((e) => ({
        value: e.userId,
        label: `${e.basicData.firstName} ${e.basicData.lastName}`,
        role: e.basicData.role,
      }))}
      value={watch("batchTrainer")}
      onChange={(val) =>
        setValue("batchTrainer", val as string[], {
          shouldValidate: true,
          shouldDirty: true,
        })
      }
      placeholder="Select trainers"
      filterKey="role"
      showFilter
      showSearchbar
    />
  );
}
