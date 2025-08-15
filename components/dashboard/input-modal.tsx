import CustomModal from "@/components/custom-modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React from 'react'

type Props = { placeholder: string, title: string, onSubmit: (value: string) => void }

const InputModal = ({ placeholder = "", title, onSubmit }: Props) => {
    const [value, setValue] = React.useState<string>("")

    return (
        <CustomModal title={title}>
            <div className="flex space-x-4">
                <Input value={value} type="text" placeholder={placeholder ?? ""} onChange={(ev) => {
                    setValue(ev.target.value)
                }} />

                <Button
                    variant="default"
                    className="p-4"
                    onClick={() => {
                        onSubmit(value)
                        setValue('')
                    }}>
                    Save
                </Button>
            </div>
        </CustomModal>
    )
}

export default InputModal


// import React from 'react'
// import { Check, Plus } from "lucide-react"
// import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"

// type Props = {
//     form: any
//     formName: string
//     label: string
//     placeholder?: string
//     onChange: (value: string[]) => void
//     value: string[]
// }

// const MultipleStringInput = ({ form, formName, label, placeholder, onChange, value }: Props) => {
//     return (
//         <div className="flex items-end space-x-2">
//             <div className="w-full">
//                 <FormField
//                     name={formName}
//                     control={form.control}
//                     render={({ field }) => (
//                         <FormItem>
//                             <div className='space-y-2 items-center justify-between'>
//                                 <FormLabel className='w-2/5 capitalize'>{label}</FormLabel>
//                                 <div className="grid md:grid-cols-2 gap-3">
//                                     {value.map((item, index) => (
//                                         <div key={index} className="flex items-start gap-2">
//                                             <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
//                                             <span className="text-gray-700">{item}</span>
//                                         </div>
//                                     ))}
//                                 </div>
//                                 <FormControl>
//                                     <Input
//                                         placeholder={placeholder ?? ""}
//                                         {...field}
//                                         value={field.value || ''}
//                                     />
//                                 </FormControl>
//                             </div>
//                         </FormItem>
//                     )}
//                 />
//             </div>
//             <Button
//                 type="button"
//                 variant="outline"
//                 onClick={() => {
//                     const inputValue = form.getValues(formName)
//                     if (inputValue?.trim()) {
//                         // Update highlights array
//                         onChange([...value, inputValue.trim()])
//                         // Clear input field
//                         form.setValue(formName, "")
//                     }
//                 }}
//             >
//                 <div className="flex space-x-4">
//                     <Plus />
//                 </div>
//             </Button>
//         </div>
//     )
// }

// export default MultipleStringInput
