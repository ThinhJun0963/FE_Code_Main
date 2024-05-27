export interface ButtonProperty {
    buttonType: "submit" | "reset" | "button",
    message: string,
    href?: string,
    form?: string,
    callback?: (value?: object) => void,
}

export interface AdvancedButtonProperty extends ButtonProperty{
    style?: string,
    childrens?: React.ReactElement[],
}