# 📘 SmartSelect Component

A fully customizable and reusable **Select / Multi-Select** component built with **React**, **shadcn/ui**, and **Lucide Icons**.
Supports **multi-select, search, filtering by key, badges for selections, and clearing selections**.

---

## 🚀 Features

* ✅ **Single or Multi-Select** mode
* 🔍 **Searchable** list of options
* 🔽 **Filter options** by a specific key (like role, designation, department, etc.)
* 🏷️ **Badges for selected items** (with remove icon)
* ❌ **Clear all selections** in multi-select
* 🎨 Fully styled with **shadcn/ui** + **Tailwind CSS**
* 🔧 Flexible API with `Option` type supporting extra fields

---

## 📦 Installation & Dependencies

This component uses **shadcn/ui** primitives and **Lucide Icons**.
Make sure you have them set up in your Next.js/React project:

```bash
npm install lucide-react
```

If you haven’t set up **shadcn/ui**:

```bash
npx shadcn-ui@latest init
```

Then generate the required UI components (if not already):

```bash
npx shadcn-ui@latest add button badge popover command select
```

---

## 🛠️ API Reference

### `Option` Type

```ts
export interface Option {
  label: string;   // Display text in dropdown
  value: string;   // Unique identifier
  [key: string]: any; // Extra fields like role, designation, etc.
}
```

### `SmartSelect` Props

| Prop            | Type                                  | Default       | Description                           |
| --------------- | ------------------------------------- | ------------- | ------------------------------------- |
| `options`       | `Option[]`                            | **Required**  | List of available options             |
| `value`         | `string \| string[]`                  | **Required**  | Current selected value(s)             |
| `onChange`      | `(value: string \| string[]) => void` | **Required**  | Handler for selection change          |
| `placeholder`   | `string`                              | `"Select..."` | Placeholder text                      |
| `isMultiSelect` | `boolean`                             | `false`       | Enables multi-select mode             |
| `filterKey`     | `string`                              | `undefined`   | Key to filter options (e.g. `"role"`) |
| `showFilter`    | `boolean`                             | `false`       | Show a dropdown filter                |
| `showSearchbar` | `boolean`                             | `false`       | Show a search input                   |

---

## 🔧 Usage Examples

### 1️⃣ Single Select (Basic)

```tsx
<SmartSelect
  options={[
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
  ]}
  value={selectedValue}
  onChange={setSelectedValue}
  placeholder="Choose an option"
/>
```

### 2️⃣ Multi-Select (with badges & clear button)

```tsx
<SmartSelect
  isMultiSelect
  options={[
    { value: "1", label: "Apple" },
    { value: "2", label: "Banana" },
    { value: "3", label: "Cherry" },
  ]}
  value={selectedFruits}
  onChange={setSelectedFruits}
  placeholder="Select fruits"
/>
```

### 3️⃣ With Filtering by Key

```tsx
<SmartSelect
  isMultiSelect
  options={[
    { value: "u1", label: "Alice", role: "Trainer" },
    { value: "u2", label: "Bob", role: "Trainer" },
    { value: "u3", label: "Charlie", role: "Mentor" },
  ]}
  value={selectedUsers}
  onChange={setSelectedUsers}
  placeholder="Select users"
  filterKey="role"
  showFilter
/>
```

### 4️⃣ With Search

```tsx
<SmartSelect
  options={[
    { value: "delhi", label: "Delhi" },
    { value: "mumbai", label: "Mumbai" },
    { value: "bangalore", label: "Bangalore" },
  ]}
  value={selectedCity}
  onChange={setSelectedCity}
  placeholder="Search a city"
  showSearchbar
/>
```

---

## 🔄 Example with `react-hook-form`

Perfect for forms where you need validation:

```tsx
import { useForm } from "react-hook-form";

function BatchForm({ employees }) {
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
```

---

## 🎯 UX Details

* **Multi-Select Mode**

  * Shows selected options as badges
  * Each badge has a ❌ icon to remove
  * Clear all selections with one click
* **Single Select Mode**

  * Only one value at a time
  * Closes dropdown after selecting
* **Search**

  * Filters based on label
* **Filter**

  * Dropdown filter to narrow by `filterKey`

---
