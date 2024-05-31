export interface GenericLink {
    linkName: string,
    linkValue: string,
}

export interface MenuListProperty {
    links: Array<GenericLink>,
    active: number
}