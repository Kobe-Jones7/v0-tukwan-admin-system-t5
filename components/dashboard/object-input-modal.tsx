import CustomModal from "@/components/custom-modal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { arrayToJson } from "@/lib/utils"
import React from 'react'

type Props = { title: string, onSubmit: (value: valueType) => void }
type valueType = Record<string, string>

const ObjectInput = ({ title, onSubmit }: Props) => {
    const [inputs, setInputs] = React.useState<string[]>([])
    const [value, setValue] = React.useState<valueType>({})

    return (
        <CustomModal title={title}>
            <div className="flex space-x-4">
                <Input value={value.key} type="text" placeholder={"Eg: Material"} onChange={(ev) => {
                    setInputs((prev) => {
                        return [ev.target.value, prev[1]]
                    })

                }} />
                <Input value={value.value} type="text" placeholder={"Cotton and Silk blend"} onChange={(ev) => {
                    setInputs((prev) => {
                        return [prev[0], ev.target.value]
                    })
                }} />

                <Button
                    variant="default"
                    className="p-4"
                    onClick={() => {
                        console.log(arrayToJson(inputs))
                        onSubmit(arrayToJson(inputs))
                        // setValue({ key: '', value: '' })
                    }}>
                    Save
                </Button>
            </div>
        </CustomModal>
    )
}

export default ObjectInput
