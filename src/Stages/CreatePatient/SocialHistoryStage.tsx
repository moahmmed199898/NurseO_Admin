import { faBookMedical } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useFocus } from "../../Components/customHooks";
import { Button } from "../../Components/Form/Button";
import { Input } from "../../Components/Form/Input";
import { ArrayPreviewer } from "../../Components/Stages/ArrayPreviewer";
import { BaseStageProps, BaseStage } from "../../Components/Stages/BaseStage"
import { Td } from "../../Components/Table/Td";
import { Tr } from "../../Components/Table/Tr";

export type Props = BaseStageProps & {
    onNext: (medicalHistory: string[]) => void,
}

export function SocialHistoryStage(props: Props) {
    const [inputRef, setInputFocus] = useFocus()
    const [history, setHistory] = useState([]as string[]);
    
    const [entry, setEntry] = useState("");


    const onHistoryAddClickHandler = () => {
        history.push(entry)
        setHistory([...history]);
        setEntry("");
        setInputFocus();
    }


    const onNextClickHandler = ()=> {
        props.onNext(history)
    }


    return (
        <div className="overflow-hidden">
            <BaseStage {...props} onNext={onNextClickHandler} title="Medical History" icon={faBookMedical} moveLeft={history.length > 0}>
                <Input label="Entry" onChange={e => setEntry(e.currentTarget.value)} value={entry} ref={inputRef} optional/>
                
                <Button onClick={onHistoryAddClickHandler} className="bg-blue my-4">Add Social History Entry</Button>
            </BaseStage>

            <ArrayPreviewer headerItems={["Entry"]} show={history.length > 0}>
                {history.map((entry,i)=>
                    <Tr key={i}>
                        <Td>{entry}</Td>
                    </Tr>
                )}
            </ArrayPreviewer>

        </div>
    )

}