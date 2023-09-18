export type VNode = VElement | VText
export type VNodeList = VNode[]

export type VElement = {
	tag: string
	className?: string
	dom: HTMLElement | null
}

export type VText = string | number
