"use client"

import React from 'react'
import { CheckIcon, ChevronsUpDownIcon, PlusCircleIcon } from "lucide-react"
import clsx from "clsx"

import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

type Props = {
    data: { value: string, label: string }[],
    field: string,
    placeholder?: string,
    value: string,
    onChange: (value: string) => void,
    onCreate?: (value: string) => void
}

const ComboBox = ({
    data,
    field,
    placeholder = "",
    value,
    onChange,
    onCreate
}: Props) => {
    const [open, setOpen] = React.useState(false)
    const [search, setSearch] = React.useState("")

    // Reset search when closing dropdown
    React.useEffect(() => {
        if (!open) setSearch("")
    }, [open])

    // Filter options based on search input
    const filteredOptions = React.useMemo(() => {
        if (!search) return data
        return data.filter(item =>
            item.label.toLowerCase().includes(search.toLowerCase()) ||
            item.value.toLowerCase().includes(search.toLowerCase())
        )
    }, [data, search])

    // Check if search is a new value
    const isNewValue = search &&
        !data.some(item =>
            item.value.toLowerCase() === search.toLowerCase() ||
            item.label.toLowerCase() === search.toLowerCase()
        )

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between capitalize"
                >
                    {value
                        ? data.find((item) => item.value === value)?.label
                        : placeholder}
                    <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
                <Command shouldFilter={false}>
                    <CommandInput
                        placeholder={placeholder}
                        value={search}
                        onValueChange={setSearch}
                    />
                    <CommandList>
                        {!filteredOptions.length && !isNewValue ? (
                            <CommandEmpty>No {field} found.</CommandEmpty>
                        ) : (
                            <CommandGroup>
                                {filteredOptions.map((item) => (
                                    <CommandItem
                                        key={item.value}
                                        value={item.value}
                                        onSelect={(currentValue) => {
                                            onChange(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                        }}
                                        className="capitalize"
                                    >
                                        <CheckIcon
                                            className={clsx(
                                                "mr-2 h-4 w-4",
                                                value === item.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {item.label}
                                    </CommandItem>
                                ))}
                                {isNewValue && (
                                    <CommandItem
                                        onSelect={() => {
                                            if (onCreate) {
                                                onCreate(search)
                                                onChange(search)
                                            }
                                            setOpen(false)
                                        }}
                                        className="text-primary aria-selected:text-primary"
                                    >
                                        <PlusCircleIcon className="mr-2 h-4 w-4" />
                                        Create "{search}"
                                    </CommandItem>
                                )}
                            </CommandGroup>
                        )}
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default ComboBox

// "use client"

// import React from 'react'
// import { CheckIcon, ChevronsUpDownIcon, PlusCircleIcon } from "lucide-react"
// import clsx from "clsx"

// import { Button } from "@/components/ui/button"
// import {
//     Command,
//     CommandEmpty,
//     CommandGroup,
//     CommandInput,
//     CommandItem,
//     CommandList,
// } from "@/components/ui/command"
// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
// } from "@/components/ui/popover"

// type Props = {
//     data: { value: string, label: string }[],
//     field: string,
//     placeholder?: string,
//     value: string,
//     onChange: (value: string) => void,
//     onCreate?: (value: string) => void
// }

// const ComboBox = ({
//     data,
//     field,
//     placeholder = "",
//     value,
//     onChange,
//     onCreate
// }: Props) => {
//     const [open, setOpen] = React.useState(false)
//     const [search, setSearch] = React.useState("")

//     // Reset search when closing dropdown
//     React.useEffect(() => {
//         if (!open) setSearch("")
//     }, [open])

//     // Filter options based on search input
//     const filteredOptions = React.useMemo(() => {
//         if (!search) return data
//         return data.filter(item =>
//             item.label.toLowerCase().includes(search.toLowerCase()) ||
//             item.value.toLowerCase().includes(search.toLowerCase())
//         )
//     }, [data, search])

//     // Check if search is a new value
//     const isNewValue = search &&
//         !data.some(item =>
//             item.value.toLowerCase() === search.toLowerCase() ||
//             item.label.toLowerCase() === search.toLowerCase()
//         )

//     return (
//         <Popover open={open} onOpenChange={setOpen}>
//             <PopoverTrigger asChild>
//                 <Button
//                     variant="outline"
//                     role="combobox"
//                     aria-expanded={open}
//                     className="w-full justify-between"
//                 >
//                     {value
//                         ? data.find((item) => item.value === value)?.label
//                         : placeholder}
//                     <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
//                 </Button>
//             </PopoverTrigger>
//             <PopoverContent className="w-full p-0">
//                 <Command shouldFilter={false}>
//                     <CommandInput
//                         placeholder={placeholder}
//                         value={search}
//                         onValueChange={setSearch}
//                     />
//                     <CommandList>
//                         {!filteredOptions.length && !isNewValue ? (
//                             <CommandEmpty>No {field} found.</CommandEmpty>
//                         ) : (
//                             <CommandGroup>
//                                 {filteredOptions.map((item) => (
//                                     <CommandItem
//                                         key={item.value}
//                                         value={item.value}
//                                         onSelect={(currentValue) => {
//                                             onChange(currentValue === value ? "" : currentValue)
//                                             setOpen(false)
//                                         }}
//                                     >
//                                         <CheckIcon
//                                             className={clsx(
//                                                 "mr-2 h-4 w-4",
//                                                 value === item.value ? "opacity-100" : "opacity-0"
//                                             )}
//                                         />
//                                         {item.label}
//                                     </CommandItem>
//                                 ))}
//                                 {isNewValue && (
//                                     <CommandItem
//                                         onSelect={() => {
//                                             if (onCreate) {
//                                                 onCreate(search)
//                                                 onChange(search)
//                                             }
//                                             setOpen(false)
//                                         }}
//                                         className="text-primary aria-selected:text-primary"
//                                     >
//                                         <PlusCircleIcon className="mr-2 h-4 w-4" />
//                                         Create "{search}"
//                                     </CommandItem>
//                                 )}
//                             </CommandGroup>
//                         )}
//                     </CommandList>
//                 </Command>
//             </PopoverContent>
//         </Popover>
//     )
// }

// export default ComboBox


// // "use client"

// // import React from 'react'
// // import { CheckIcon, ChevronsUpDownIcon } from "lucide-react"
// // import clsx from "clsx"

// // import { Button } from "@/components/ui/button"
// // import {
// //     Command,
// //     CommandEmpty,
// //     CommandGroup,
// //     CommandInput,
// //     CommandItem,
// //     CommandList,
// // } from "@/components/ui/command"
// // import {
// //     Popover,
// //     PopoverContent,
// //     PopoverTrigger,
// // } from "@/components/ui/popover"

// // type Props = {
// //     data: { value: string, label: string }[],
// //     field: string,
// //     placeholder?: string
// // }

// // const ComboBox = ({ data, field, placeholder = "" }: Props) => {
// //     const [open, setOpen] = React.useState(false)
// //     const [value, setValue] = React.useState("")

// //     return (
// //         <Popover open={open} onOpenChange={setOpen}>
// //             <PopoverTrigger asChild>
// //                 <Button
// //                     variant="outline"
// //                     role="combobox"
// //                     aria-expanded={open}
// //                     className="w-full justify-between"
// //                 >
// //                     {value
// //                         ? data.find((item) => item.value === value)?.label
// //                         : placeholder}
// //                     <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
// //                 </Button>
// //             </PopoverTrigger>
// //             <PopoverContent className="w-full p-0">
// //                 <Command>
// //                     <CommandInput {...{ placeholder }} />
// //                     <CommandList>
// //                         <CommandEmpty>No {field} found.</CommandEmpty>
// //                         <CommandGroup>
// //                             {data.map((item) => (
// //                                 <CommandItem
// //                                     key={item.value}
// //                                     value={item.value}
// //                                     onSelect={(currentValue) => {
// //                                         setValue(currentValue === value ? "" : currentValue)
// //                                         setOpen(false)
// //                                     }}
// //                                 >
// //                                     <CheckIcon
// //                                         className={clsx(
// //                                             "mr-2 h-4 w-4",
// //                                             value === item.value ? "opacity-100" : "opacity-0"
// //                                         )}
// //                                     />
// //                                     {item.label}
// //                                 </CommandItem>
// //                             ))}
// //                         </CommandGroup>
// //                     </CommandList>
// //                 </Command>
// //             </PopoverContent>
// //         </Popover>
// //     )
// // }

// // export default ComboBox
