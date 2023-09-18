export type VNode = VElement | VText
export type VNodeList = VNode[]

export type VElement = {
	tag: string
	props?: {
		children?: VNodeList
	}
	className?: string
	style?: string
	dom: HTMLElement | null
}

export type VText = string | number
