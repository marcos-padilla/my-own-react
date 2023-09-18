export type VNode = VElement | VText
export type VNodeList = VNode[]

export type VElement = {
	tag: string
	props?: {
		children?: VNodeList
	}
	className?: string
	style?: Record<string, string>
	dom: HTMLElement | null
}

export type VText = string | number

export type VElementConfig = {
	className?: string
	style?: Record<string, string>
}
