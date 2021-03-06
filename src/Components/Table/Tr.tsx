import { ReactChild } from "react";

type Props = {
    children: ReactChild | ReactChild[],
}

export function Tr(props:Props) {
    return <tr className="border border-darkGray">
        {props.children}
    </tr>
}